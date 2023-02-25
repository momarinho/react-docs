import React from 'react';
import { Link } from 'react-router-dom';

const DocumentList = ({ documents, handleDelete }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {documents.map((document) => (
        <Link to={`/editor/${document.id}`} key={document.id}>
          <div className="bg-gray-300 rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-lg font-bold mb-2">
              {document.title.substring(0, 20)}...
            </h2>
            <div className="flex justify-end items-center space-x-2">
              <button
                onClick={() => handleDelete(document.id)}
                className="bg-orange-700 hover:bg-orange-800 text-white py-1 px-2 rounded-md transition duration-300 ease-in-out"
              >
                Delete
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DocumentList;
