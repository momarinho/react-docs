import { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const DocumentEditor = ({ title }) => {
  const [document, setDocument] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const quillRef = useRef();
  const navigate = useNavigate();
  const collectionRef = collection(db, 'docsData');
  const { id } = useParams();

  const handleSave = (event) => {
    event.preventDefault();
    const documentRef = doc(collectionRef, id);
    updateDoc(documentRef, { docsDesc: document })
      .then(() => {
        console.log(`Document "${title}" saved:`, document);
        toast.success(`Document "${title}" saved:`);
      })
      .catch((error) => {
        console.error('Error saving document:', error);
        toast.error('Error saving document.');
      });
  };

  const handleDiscard = () => {
    if (window.confirm('Are you sure you want to discard your changes?')) {
      setDocument('');
    }
  };

  const goBack = () => {
    navigate('/', { replace: true });
  };

  const downloadPdf = () => {
    const strippedDocument = document.replace(/(<([^>]+)>)/gi, '');
    const docDefinition = {
      content: strippedDocument,
    };
    pdfMake.createPdf(docDefinition).download(`${title}.pdf`);
  };

  useEffect(() => {
    const documentRef = doc(collectionRef, id);
    const unsubscribe = onSnapshot(documentRef, (doc) => {
      setDocument(doc.data().docsDesc);
      setIsLoading(false);
    });
    return unsubscribe;
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-around items-center mb-4 px-4 pt-2">
        <div className="space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save'}
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={handleDiscard}
          >
            Discard
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
            onClick={downloadPdf}
          >
            Download PDF
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={goBack}
          >
            Back
          </button>
        </div>
      </div>

      <ToastContainer />

      <div className="flex-screen bg-white">
        <ReactQuill
          ref={quillRef}
          className="h-fit"
          value={document}
          onChange={setDocument}
          placeholder="Start typing here..."
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ color: [] }, { background: [] }],
            ],
          }}
          style={{ color: 'black' }}
        />
      </div>
    </div>
  );
};

export default DocumentEditor;
