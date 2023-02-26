import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

export default function Header() {
  const [user] = useAuthState(auth);

  const signOut = () => {
    auth.signOut();
  };

  return (
    <header className="py-4 bg-gray-700">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">DOCS</h1>
        {user && (
          <button
            onClick={signOut}
            className="text-red-500 rounded hover:text-red-600"
            type="button"
          >
            Sign out
          </button>
        )}
      </div>
    </header>
  );
}
