import './index.css';
import DocumentEditor from './components/DocumentEditor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-4 bg-white shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Docs
          </h1>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <DocumentEditor />
      </main>
    </div>
  );
}

export default App;
