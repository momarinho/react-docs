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

  return (
    <div>
      <div>
        <button onClick={() => setShowAddModal(true)}>Add Document</button>
        {showAddModal && <Modal handleAdd={handleAdd} />}
      </div>

      <DocumentList documents={documents} handleDelete={handleDelete} />
    </div>
  );
};

export default Docs;
