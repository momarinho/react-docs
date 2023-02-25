import React from 'react';
import { Link } from 'react-router-dom';

const DocumentList = ({ documents, handleDelete }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {documents.map((document) => (
        <div key={document.id} className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">{document.title}</h2>
          <p className="mb-4 text-gray-500">{document.content.substring(0, 100)}...</p>
          <div className="flex justify-end items-center">
            <Link
              to={`/editor/${document.id}`}
              className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(document.id)}
              className="bg-orange-700 hover:bg-orange-800 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
