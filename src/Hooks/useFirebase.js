import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    //handle google sign in
    const signInUsingGoogle = (e) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                setError(" ");
            })
            .finally(()=>setIsLoading(false))
            .catch(error => {  
                setError(error);
            })
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
    
    
    //Name
    const handleName = (e) => {
        setName(e.target.value);
        
    }
    //Email
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    //Password
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    //handle Sign Up
    const handleSignup =(e)=>{
        setIsLoading(true)
        e.preventDefault();
        console.log(email,password);
        if(password.length < 6){
            setError("Password must be 6 character long");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        createUserWithEmailAndPassword(auth,email,password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setError("");
            verifyEmail();
            setUserName();
        })
        .finally(()=>setIsLoading(false))
        .catch(error => {
            setError(error.message);
        })
    }
    //Set User Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
    }

    //email verification
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result => {
            console.log(result);
        })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(result => { })
    }
    //handle Login
    const handleLogin = (e) =>{
        setIsLoading(true)
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setEmail(" ");
            setPassword(" ");
            setError(" ");
        })
        .finally(()=>setIsLoading(false))
        .catch(error => {
            setError(error.message);
        })
    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        handleSignOut,
        handleName,
        handleEmail,
        handlePassword,
        handleSignup,
        handleResetPassword,
        handleLogin
    }
}

export default useFirebase;