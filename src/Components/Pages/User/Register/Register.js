import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAPI from '../../../../Hooks/useAPI';

const Register = () =>
{
    const history = useHistory();
    // const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '', email: '', role: 'user' });
    const location = useLocation();
    const { formControl,name, getEmail, getPassword, registerWithPassword } = useAPI().auth;

    

    // Email handle
    /* const emailHandle = (e) =>
    {
        const inputValue = e.target.value;
        const setEmail = { ...userInfo };
        setEmail.email = inputValue;
        setUserInfo(setEmail);
    }; */

    return (
        <div>
            <form onSubmit={formControl} className='md:w-2/4 text-center shadow border p-6 rounded m-auto my-20'>                
                <h2 className='text-3xl font-primary text-orange font-bold text-center'>Please Register</h2>
                <div className='flex'>
                    <input onChange={name} placeholder='First Name' className='p-3 mr-2 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' type="text" />
                    {/* <input onChange={lastNameHandle} placeholder='Last Name' className='p-3 ml-2 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' type="text" /> */}
                </div>
                <input onBlur={getEmail} className='p-3 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' placeholder='Email' type="email" />
                <input onBlur={getPassword} className='p-3 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' placeholder='Password' type="password" />
                <input onClick={()=>registerWithPassword(history,location)} className='p-3 cursor-pointer block w-full bg-orange text-lg font-primary text-white rounded' value='Register' type="submit" />
                <div className='pt-4'>
                    <Link className='text-lg font-primary text-orange' to='/login'>Already have account?</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;