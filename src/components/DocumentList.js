import React from 'react';
import { Link } from 'react-router-dom';

const DocumentList = ({ documents, handleDelete }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {documents.map((document) => (
        <div key={document.id} className="bg-gray-800 rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Link to={`/editor/${document.id}`} className="text-gray-300">
            <h2 className="text-lg font-bold mb-2">
              {document.title.substring(0, 20)}...
            </h2>
          </Link>
          <div className="flex justify-end items-center space-x-2">
            <button
              onClick={() => handleDelete(document.id)}
              className="bg-pink-600 hover:bg-pink-700 text-gray-300 py-1 px-2 rounded-md transition duration-300 ease-in-out"
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

