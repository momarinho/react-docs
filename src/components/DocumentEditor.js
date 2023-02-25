import { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';

import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';

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
      <div className="fixed top-0 left-0 right-0 bg-white z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
      </div>
      <div className="flex justify-end items-center mb-4 px-4 pt-2">
        <div className="space-x-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={handleDiscard}
          >
            Discard
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save'}
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

      <div className="flex-grow bg-white">
        <ReactQuill
          ref={quillRef}
          className="h-screen border-0"
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
        />
      </div>
    </div>
  );
};
export default DocumentEditor;
