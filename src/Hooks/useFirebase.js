import initializeFirebase from "../Firebasse/firebase.init";
import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import axios from "axios";

initializeFirebase();
const useFirebase = () =>
{
    // Initialize state
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userInfo, setUserInfo] = useState({ name: '', email: '', role: 'user' });



    // Form control
    const formControl = (e) =>
    {
        e.preventDefault();
    };
    // First name handle
    const name = (e) =>
    {
        const inputValue = e.target.value;
        const setFName = { ...userInfo };
        setFName.name = inputValue;
        setUserInfo(setFName);
    };


    // Get email
    const getEmail = (e) =>
    {
        const inputValue = e.target.value;
        const setUserEmail = { ...userInfo };
        setUserEmail.email = inputValue;
        setUserInfo(setUserEmail);
        setEmail(inputValue);
    };

    // Get Password
    const getPassword = (e) =>
    {
        const inputValue = e.target.value;
        setPassword(inputValue);
    };

    // Register with email && password
    const registerWithPassword = (history, location) =>
    {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                axios.post('http://localhost:5000/users', userInfo)
                    .then();
                setUser(userCredential.user);
                swal({
                    position: 'center center',
                    icon: 'success',
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                history.push(location.state?.from || '/');
            }).catch(error =>
            {
                const errorCode = error.code;
                switch (errorCode) {
                    case 'auth/email-already-in-use':
                        swal({
                            position: 'center center',
                            icon: 'warning',
                            title: 'Account already exist',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        break;
                    case 'auth/weak-password':
                        swal({
                            position: 'center center',
                            icon: 'warning',
                            title: 'Weak Password',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        break;
                    case 'auth/invalid-email':
                        swal({
                            position: 'center center',
                            icon: 'warning',
                            title: 'Invalid Email',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        break;
                    default:

                }
            }).finally(() =>
            {
                setIsLoggedIn(false);
            });
    };

    // Login with email && password
    const loginWithPassword = (history, location) =>
    {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential =>
            {
                setUser(userCredential.user);
                swal({
                    position: 'center center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                history.push(location.state?.from || '/');
            }).catch(error =>
            {
                const errorCode = error.code;
                switch (errorCode) {
                    case 'auth/wrong-password':
                        swal({
                            position: 'center center',
                            icon: 'warning',
                            title: 'Incorrect email or password',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        break;
                    case 'auth/user-not-found':
                        swal({
                            position: 'center center',
                            icon: 'warning',
                            title: 'Incorrect email or password',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        break;
                    default:

                }
            }).finally(() =>
            {
                setIsLoggedIn(false);
            });
    };

    // Log Out
    const logOut = () =>
    {
        signOut(auth).then(() =>
        {
            swal({
                position: 'center center',
                icon: 'success',
                title: 'Log Out Successful',
                showConfirmButton: false,
                timer: 1500
            });
            setUser({});
        }).finally(() =>
        {
            setIsLoggedIn(false);
        });
    };


    // Update user state
    useEffect(() =>
    {
        onAuthStateChanged(auth, user =>
        {
            if (user) {
                setUser(user);
            }
            setIsLoggedIn(false);
        });
    }, [auth]);

    // Return
    return {
        registerWithPassword,
        loginWithPassword,
        formControl,
        name,
        getEmail,
        setUser,
        setIsLoggedIn,
        isLoggedIn,
        user,
        getPassword,
        logOut
    };
};
export default useFirebase;