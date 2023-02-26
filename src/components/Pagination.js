import React from 'react';

const Pagination = ({
  documents,
  currentPage,
  setCurrentPage,
  documentsPerPage,
}) => {
  const pageNumbers = Array.from(
    { length: Math.ceil(documents.length / documentsPerPage) },
    (_, i) => i + 1
  );

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`mx-2 my-1 px-4 py-2 rounded-md ${
            number === currentPage
              ? 'bg-gray-800 text-gray-300'
              : 'bg-gray-500 text-gray-200 hover:bg-gray-700 hover:text-gray-300'
          }`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
