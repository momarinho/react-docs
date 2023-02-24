import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DocumentEditor = ({ title }) => {
  const [document, setDocument] = useState('');
  const quillRef = useRef();

  const handleSave = () => {
    console.log(`Document "${title}" saved:`, document);
  };

  const handleDiscard = () => {
    setDocument('');
  };

  return (
    <div className="flex flex-col h-screen">
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
        <h1 className="text-2xl">{title}</h1>
      </div>

      <div className="flex-grow px-4">
        <ReactQuill
          ref={quillRef}
          className="h-full"
          value={document}
          onChange={setDocument}
          placeholder="Start typing here..."
        />
      </div>
    </div>
  );
};

export default DocumentEditor;
