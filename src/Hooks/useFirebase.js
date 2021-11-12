import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    //handle google sign in
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
    }
    //handle Sign Up 
    const handleSignUp = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    //Login
    const loginViaEmailAndPassword =(email,password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Added User Name
    const getUserName= (name)=> {
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          const newUser={...user, displayName: name} // recommend
         setUser(newUser)
          
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      }
    //Sign Out handler
    const handleSignOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
        setUser({});
        })
        .finally(()=>setIsLoading(false))
    }
        //Save User
        const savedUser = (email,name,method) =>{
            const user = {email : email , displayName : name}
            fetch('http://localhost:5000/users',{
                method : method,
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            })
            .then()
        }
    //Check Admin
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])
    //observer
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return()=> unsubscribed;
    },[])
    

    return {
        admin,
        user,
        error,
        isLoading,
        setUser,
        setIsLoading,
        setError,
        signInUsingGoogle,
        handleSignUp,
        savedUser,
        getUserName,
        loginViaEmailAndPassword,
        handleSignOut
    }
}

export default useFirebase;