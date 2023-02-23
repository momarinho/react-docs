import { useState } from 'react';

const DocumentEditor = () => {
  const [document, setDocument] = useState('');

  const handleChange = (event) => {
    setDocument(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Bold
          </button>
          <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Italic
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Underline
          </button>
        </div>
        <div>
          <button className="mr-2 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded">
            Save
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Discard
          </button>
        </div>
      </div>
      <textarea
        className="w-full h-screen p-4 text-lg leading-7 rounded shadow-sm border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        value={document}
        onChange={handleChange}
        placeholder="Start typing your document here..."
      />
    </div>
  );
};

export default DocumentEditor;
