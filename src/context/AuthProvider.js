import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

// Create User
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({ children }) => {
    const authInfo = { createUser };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
