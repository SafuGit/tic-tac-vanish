import React, { useEffect, useState, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children} : {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribed();
    }
  }, []);

  const userInfo = {
    user,
    loading,
    signInWithGoogle,
    logOut
  }

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;