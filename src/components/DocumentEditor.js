import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const DocumentEditor = ({ title }) => {
  const [document, setDocument] = useState('');

  const quillRef = useRef();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log(`Document "${title}" saved:`, document);
  };

  const handleDiscard = () => {
    setDocument('');
  };

  const goBack = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center mb-4 px-4">
        <div>
          <button
            className="mr-2 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={handleDiscard}
          >
            Discard
          </button>
        </div>
        <div>
          <h1 className="text-2xl">{title}</h1>
        </div>
        <div>
          <button
            onClick={goBack}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Back
          </button>
        </div>
      </div>

      <div className="flex-grow bg-white">
        <ReactQuill
          ref={quillRef}
          className="h-screen border-0"
          value={document}
          onChange={setDocument}
          placeholder="Start typing here..."
        />
      </div>
    </div>
  );
};

export default DocumentEditor;
