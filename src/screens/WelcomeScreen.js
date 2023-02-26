import React from 'react';
import { auth } from '../firebase/firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

export default function WelcomeScreen() {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="flex flex-col items-center justify-center h-96">
      <h2 className="text-3xl font-extrabold mb-4 text-white">
        Welcome @!
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Sign in with Google to start
      </p>

      <button
        className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
        onClick={signIn}
      >
        Sign in
      </button>
    </main>
  );
}
