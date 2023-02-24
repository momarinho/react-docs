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
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4">
        <h2 className="text-lg font-bold mb-2">Add Document</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2" htmlFor="title">
            <span className="text-gray-700">Title:</span>
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
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
              className="btn btn-primary mr-2 text-green-600 hover:text-green-700"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary text-red-600 hover:text-red-700"
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
