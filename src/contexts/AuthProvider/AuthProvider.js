import React, { createContext, useState } from 'react';
import {getAuth, signInWithPopup} from "firebase/auth";
import app from "../../firebase/Firebase.config"

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({displayName: "Aslam"})

    const createWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const userInfo = { user, createWithGoogle }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;