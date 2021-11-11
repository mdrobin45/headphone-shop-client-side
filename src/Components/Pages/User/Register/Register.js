import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAPI from '../../../../Hooks/useAPI';

const Register = () =>
{
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({firstName:'',lastName:'',email:''});
    const location = useLocation();
    const { formControl, getEmail,setUser,setIsLoggedIn, getPassword, registerWithPassword } = useAPI().auth;
    
    // Register with password
    const handlePasswordRegister = () =>
    {
        axios.post('https://quiet-ocean-51705.herokuapp.com/users', userInfo)
        .then()
        registerWithPassword()
        .then((userCredential) =>
            {
                setUser(userCredential.user);
                history.push(location.state?.from || '/')
            }).finally(() =>
            {
                setIsLoggedIn(false)
            })
    }

    // First name handle
    const firstNameHandle = (e) =>
    {
        const inputValue = e.target.value;
        const setFName = { ...userInfo };
        setFName.firstName = inputValue;
        setUserInfo(setFName);
    }

    // Last name handle
    const lastNameHandle = (e) =>
    {
        const inputValue = e.target.value;
        const setLName = { ...userInfo };
        setLName.lastName = inputValue;
        setUserInfo(setLName);
    }

    // Email handle
    const emailHandle = (e) =>
    {
        const inputValue = e.target.value;
        const setEmail = { ...userInfo };
        setEmail.email = inputValue;
        setUserInfo(setEmail);
    }
    
    return (
        <div>
            <form onSubmit={formControl} className='w-2/4 text-center shadow border p-6 rounded m-auto my-20'>
                <h2 className='text-3xl font-primary text-orange font-bold text-center'>Please Register</h2>
                <div className='flex'>
                    <input onChange={firstNameHandle} placeholder='First Name' className='p-3 mr-2 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' type="text" />
                    <input onChange={lastNameHandle} placeholder='Last Name' className='p-3 ml-2 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' type="text" />
                </div>
                <input onChange={emailHandle} onBlur={getEmail} className='p-3 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' placeholder='Email' type="email" />
                <input onBlur={getPassword} className='p-3 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' placeholder='Password' type="password" />
                <input onClick={handlePasswordRegister}  className='p-3 cursor-pointer block w-full bg-orange text-lg font-primary text-white rounded' value='Register' type="submit" />
                <div className='pt-4'>
                    <Link className='text-lg font-primary text-orange' to='/login'>Already have account?</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;