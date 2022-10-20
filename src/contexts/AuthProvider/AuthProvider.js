import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../../firebase/Firebase.config"

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({displayName: "Aslam"})

    const createWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEamil = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateName = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    } 

    const userInfo = { user, createWithGoogle, logOut, createUser, signInWithEamil, updateName }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;