import React from 'react';
import { Link } from 'react-router-dom';

const DocumentList = ({ documents, handleDelete }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {documents.map((document) => (
        <div
          key={document.id}
          className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-lg font-bold mb-2">
            {document.title.substring(0, 20)}...
          </h2>
          <div className="flex justify-end items-center space-x-2">
            <Link
              to={`/editor/${document.id}`}
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(document.id)}
              className="bg-orange-700 hover:bg-orange-800 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
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
