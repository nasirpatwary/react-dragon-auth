import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import app from "../firebase/firebase_config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const  AuthConText = createContext(null)
const  auth = getAuth(app)
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [loader, setLoader] = useState(true)
    const createUser = (email,password) =>{
          setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
     
    const signIn = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoader(true)
       return signOut(auth)
       
    }

    useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth,cureentUser =>{
    console.log('user the auth',cureentUser);
    setUser(cureentUser)
    setLoader(false)
    })
    
    return() =>{
        unSubcribe()
       }

},[])

   const authInfo = {
    user,
    loader,
    createUser,
    signIn,
    logOut
   }
    return (
        <AuthConText.Provider value={authInfo}>
            {children}
        </AuthConText.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
}