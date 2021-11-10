import { useEffect, useState } from "react/cjs/react.development";
import initializeFirebase from "../Firebasse/firebase.init";
import { getAuth,signOut, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { useLocation } from "react-router";

initializeFirebase();
const useFirebase = () =>
{
    // Initialize state
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);



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
        return createUserWithEmailAndPassword(auth, email, password)
            /* .then((userCredential) =>
            {
                setUser(userCredential.user);
            }).finally(() =>
            {
                setIsLoggedIn(false)
            }) */
    }

    // Login with email && password
    const loginWithPassword = () =>
    {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out
    const logOut = () =>
    {
        signOut(auth).then(() =>
        {
            alert('Log Out successful')
            setUser({});
        }).finally(() =>
        {
            setIsLoggedIn(false)
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
            setIsLoggedIn(false)
        })
    },[auth])

    // Return
    return {
        registerWithPassword,
        loginWithPassword,
        formControl,
        getEmail,
        setUser,
        setIsLoggedIn,
        isLoggedIn,
        user,
        getPassword,
        logOut
    }
};
export default useFirebase;