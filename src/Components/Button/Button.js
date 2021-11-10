import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ url, btnText }) =>
{
    return (
        <div>
            <Link className='bg-orange font-primary hover:bg-white hover:text-orange inline-block mt-6 px-6 py-4 rounded text-lg text-white uppercase transition-all' to={url}>{btnText}</Link>
        </div>
    );
};

export default Button;