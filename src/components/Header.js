import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

import SignOut from '../screens/SignOut';

export default function Header() {
  const [user] = useAuthState(auth);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);

  const openSignOutModal = () => {
    setIsSignOutModalOpen(true);
  };

  const closeSignOutModal = () => {
    setIsSignOutModalOpen(false);
  };

  const handleSignOut = () => {
    auth.signOut();
    closeSignOutModal();
  };

  return (
    <header className="py-4 bg-gray-700">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">DOCS</h1>
        {user && (
          <>
            <button
              onClick={openSignOutModal}
              className="text-red-500 rounded hover:text-red-600"
              type="button"
            >
              Sign out
            </button>
            <SignOut
              isOpen={isSignOutModalOpen}
              onClose={closeSignOutModal}
              onSignOut={handleSignOut}
            />
          </>
        )}
      </div>
    </header>
  );
}
