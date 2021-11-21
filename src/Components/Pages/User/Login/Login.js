import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAPI from '../../../../Hooks/useAPI';

const Login = () =>
{
    const history = useHistory();
    const location = useLocation();
    const { formControl, getEmail, getPassword, loginWithPassword } = useAPI().auth;
    
    return (
        <div>
            <form onSubmit={formControl} className='md:w-2/4 text-center shadow border p-6 rounded m-auto my-20'>            
                <h2 className='text-3xl font-primary text-orange font-bold text-center'>Please Login</h2>
                <input onBlur={getEmail} className='p-3 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' placeholder='Email' type="email" />
                <input onBlur={getPassword} className='p-3 block w-full my-3 rounded bg-gray-100 border text-lg outline-none' placeholder='Password' type="password" />
                <input onClick={()=>loginWithPassword(history,location)} className='p-3 cursor-pointer block w-full bg-orange text-lg font-primary text-white rounded' value='Login' type="submit" />
                <div className='pt-4'>
                    <Link className='text-lg font-primary text-orange' to='/register'>Create an Account</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;