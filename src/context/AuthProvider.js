import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // Login User
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // LogOut User
    const logOut = () => {
        return signOut(auth);
    };
    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user observing');
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        user,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
