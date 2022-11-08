import React, { createContext, useState } from 'react';
import app from '../../Firebase/FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user , setUser ] = useState(null)


    const UserInfo = {


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