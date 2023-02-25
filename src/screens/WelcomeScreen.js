import React from 'react';
import { auth } from '../firebase/firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

export default function WelcomeScreen() {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
      <p className="text-gray-500 text-center mb-8">
        Sign in with Google to start
      </p>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={signIn}
      >
        Sign in
      </button>
    </main>
  );
}
