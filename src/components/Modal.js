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
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-lg font-bold mb-2 text-gray-300">Add Document</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="title">
            <span className="text-gray-300">Title:</span>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md bg-gray-700 border-gray-700 text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Enter a title..."
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </label>
          <div className="flex justify-between">
            <button
              type="submit"
              className="btn btn-primary mr-2 text-green-500 hover:text-green-400"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary text-red-500 hover:text-red-400"
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
