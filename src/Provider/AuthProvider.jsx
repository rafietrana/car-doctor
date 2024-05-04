import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

 export  const AuthContext = createContext(null)
 
 const AuthProvider = ({children}) => {
const [loading, setLoading] = useState(true);
const [user, setUser] = useState(null);

const createUser =(email, password) =>{

    setLoading(true)
    return   createUserWithEmailAndPassword(auth, email, password)
}




const singInUser = (email, password) =>{
    setLoading(true)


      return signInWithEmailAndPassword(auth, email, password)
}


const logout = ()=>{
    setLoading(true)
         return signOut(auth)
}




useEffect(()=>{
  const unSubcribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unSubcribe();
    }
})
const useInfo = {
    user,
    loading,
    createUser,
    singInUser,
    logout
}

    return (
       <AuthContext.Provider value={useInfo}>
           {children}
       </AuthContext.Provider>
    );
 };
 
 export default AuthProvider;