import './index.css';
import DocumentEditor from './components/DocumentEditor';
import Docs from './components/Docs';
import { app, db } from './firebase/firebase';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const title = location.pathname.split('/').pop();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-4 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold text-gray-900">Docs Clone</h1>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <Routes>
          <Route exact path="/" element={<Docs db={db} />} />
          <Route
            path="/editor/:id"
            element={<DocumentEditor db={db} title={title} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
