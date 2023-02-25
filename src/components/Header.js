import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function Header() {
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <header className="py-4 bg-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Docs Clone</h1>
        {user && (
          <button
            onClick={signOut}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            type="button"
          >
            Sign out
          </button>
        )}
      </div>
    </header>
  );
}
