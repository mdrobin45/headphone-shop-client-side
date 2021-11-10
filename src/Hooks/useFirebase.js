import { useEffect, useState } from "react/cjs/react.development";
import initializeFirebase from "../Firebasse/firebase.init";
import { getAuth,signOut, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();
const useFirebase = () =>
{
    // Initialize state
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Form control
    const formControl = (e) =>
    {
        e.preventDefault();
    }

    // Get email
    const getEmail = (e) =>
    {
        const inputValue = e.target.value;
        setEmail(inputValue);
    }

    // Get Password
    const getPassword = (e) =>
    {
        const inputValue = e.target.value;
        setPassword(inputValue);
    }

    // Register with email && password
    const registerWithPassword = () =>
    {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                setUser(userCredential.user);
            })
    }

    // Login with email && password
    const loginWithPassword = () =>
    {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential =>
            {
                setUser(userCredential.user);
            })
    }

    // Log Out
    const logOut = () =>
    {
        signOut(auth).then(() =>
        {
            alert('Log Out successful')
        })
    }
    

    // Update user state
    useEffect(() =>
    {
        onAuthStateChanged(auth, user =>
        {
            if (user) {
                setUser(user);
            }
        })
    },[auth])

    // Return
    return {
        registerWithPassword,
        loginWithPassword,
        formControl,
        getEmail,
        getPassword,
        logOut
    }
};
export default useFirebase;