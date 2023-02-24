import React from 'react';
import { Link } from 'react-router-dom';

const DocumentList = ({ documents, handleDelete }) => {
  return (
    <div>
      {documents.map((document) => (
        <div key={document.id}>
          <h2>{document.title}</h2>
          <p>{document.content}</p>
          <Link
            to={`/editor/${document.id}`}
            className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Edit
          </Link>
          <button onClick={() => handleDelete(document.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
