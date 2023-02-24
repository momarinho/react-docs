import { useState } from 'react';
import DocumentList from './DocumentList';
import Modal from './Modal';

const Docs = () => {
  const [documents, setDocuments] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const generateId = () => {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substring(2, 8);
    return timestamp + randomNumber;
  };

  const handleAdd = (title) => {
    const newDocument = {
      id: generateId(),
      title: title,
      content: '',
    };
    setDocuments([...documents, newDocument]);
    setShowAddModal(false);
  };

  const handleDelete = (id) => {
    const updatedDocs = documents.filter((document) => document.id !== id);
    setDocuments(updatedDocs);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Documents</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={() => setShowAddModal(true)}
        >
          Add Document
        </button>
        {showAddModal && (
          <Modal handleAdd={handleAdd} handleClose={handleCloseModal} />
        )}
      </div>

      <DocumentList documents={documents} handleDelete={handleDelete} />
    </div>
  );
};

export default Docs;
