import { useState } from 'react';

const Modal = ({ handleAdd, handleClose }) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      return;
    }
    handleAdd(title);
    setTitle('');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-lg font-bold mb-2 text-gray-300">Add Document</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-gray-300" htmlFor="title">
            Title:
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md bg-gray-700 border-gray-700 text-gray-300 focus:border-green-500 focus:ring-green-500 focus:ring-opacity-50"
              placeholder="Enter a title..."
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-700 text-base font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-700 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
