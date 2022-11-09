import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const AuthProvider = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {

    // Modal Controll 
    const [openModal , setOpenModal] = useState(false);

    const [user , setUser ] = useState(null)
    const [loading , setLoading ] = useState(true);

    // create User with email password 
    const createUserWithEmailPass = (email ,password ) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login with email password 
    const loginWithEmailPass = (email , password ) =>{
        return signInWithEmailAndPassword(auth ,email ,password)
    }

    // Update user profile name and image 
    const updateUserProfile = (displayName , photoURL)=>{
        return updateProfile(auth.currentUser,{displayName,photoURL})
    }

    // Google with Login 
    const googleWithLogin =(googleAuthProvider)=>{
        return signInWithPopup(auth,googleAuthProvider)
    }

    // LogOut 
    const logOut =() =>{
        return signOut(auth)
    }

    // User State Auth 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log("On state change on user " , currentUser);
        })
    },[])

    const UserInfo = {
        user,
        googleWithLogin,
        logOut,
        createUserWithEmailPass,
        updateUserProfile,
        loginWithEmailPass,
        openModal , 
        setOpenModal,

    }
    return (
        <div>
            <AuthProvider.Provider value={UserInfo}>
                {
                    children
                }
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;