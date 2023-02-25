import Docs from './components/Docs';
import { app, auth, db } from './firebase/firebase';
import { Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import './index.css';
import DocumentEditor from './components/DocumentEditor';
import WelcomeScreen from './screens/WelcomeScreen';
import Header from './components/Header';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <Header />
        {!user ? (
          <WelcomeScreen />
        ) : (
          <main className="container mx-auto mt-8 px-4">
            <Routes>
              <Route exact path="/" element={<Docs db={db} />} />
              <Route path="/editor/:id" element={<DocumentEditor db={db} />} />
            </Routes>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
