import { useRef, useState } from 'react';

const DocumentEditor = () => {
  const [document, setDocument] = useState('');

  const textareaRef = useRef(null);

  const handleChange = (event) => {
    setDocument(event.target.value);
  };

  const handleBold = () => {
    const selectionStart = textareaRef.current.selectionStart;
    const selectionEnd = textareaRef.current.selectionEnd;
    const selectedText = document.substring(selectionStart, selectionEnd);
    const newDocument =
      document.substring(0, selectionStart) +
      '<strong>' +
      selectedText +
      '</strong>' +
      document.substring(selectionEnd);
    setDocument(newDocument);
  };

  const handleItalic = () => {
    const selectionStart = textareaRef.current.selectionStart;
    const selectionEnd = textareaRef.current.selectionEnd;
    const selectedText = document.substring(selectionStart, selectionEnd);
    const newDocument =
      document.substring(0, selectionStart) +
      '<em>' +
      selectedText +
      '</em>' +
      document.substring(selectionEnd);
    setDocument(newDocument);
  };

  const handleUnderline = () => {
    const selectionStart = textareaRef.current.selectionStart;
    const selectionEnd = textareaRef.current.selectionEnd;
    const selectedText = document.substring(selectionStart, selectionEnd);
    const newDocument =
      document.substring(0, selectionStart) +
      '<u>' +
      selectedText +
      '</u>' +
      document.substring(selectionEnd);
    setDocument(newDocument);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleBold}
          >
            Bold
          </button>
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleItalic}
          >
            Italic
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleUnderline}
          >
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
        ref={textareaRef}
        className="w-full h-screen p-4 text-lg leading-7 rounded shadow-sm border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        value={document}
        onChange={handleChange}
        placeholder="Start typing your document here..."
      />
    </div>
  );
};

export default DocumentEditor;
