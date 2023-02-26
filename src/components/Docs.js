import { useState, useEffect } from 'react';
import DocumentList from './DocumentList';
import Modal from './Modal';
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
} from 'firebase/firestore';

const Docs = ({ db }) => {
  const [docsData, setDocsData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAdd = (title) => {
    const collectionRef = collection(db, 'docsData');
    addDoc(collectionRef, {
      title: title,
      docsDesc: '',
    })
      .then(() => {
        // alert('Data Added');
        setShowAddModal(false);
      })
      .catch(() => {
        alert('Cannot add data');
      });
  };

  const handleDelete = (id) => {
    const docRef = doc(db, 'docsData', id);
    deleteDoc(docRef)
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
  };

  useEffect(() => {
    const collectionRef = collection(db, 'docsData');
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setDocsData(data);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-300">Documents</h1>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-gray-300 py-1 px-2 rounded-md transition duration-300 ease-in-out"
          onClick={() => setShowAddModal(true)}
        >
          Add Document
        </button>
        {showAddModal && (
          <Modal handleAdd={handleAdd} handleClose={handleCloseModal} />
        )}
      </div>

      <DocumentList documents={docsData} handleDelete={handleDelete} />
    </div>
  );
};

export default Docs;
