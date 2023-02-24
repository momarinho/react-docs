import './index.css';
import DocumentEditor from './components/DocumentEditor';
import Docs from './components/Docs';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-4 bg-white shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold text-gray-900">Docs</h1>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <Routes>
          <Route exact path="/" element={<Docs />}></Route>
          <Route path="/editor/:id" element={<DocumentEditor />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
