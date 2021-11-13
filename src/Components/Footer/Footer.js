import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container md:flex justify-between'>
                <div className='md:w-1/3'>
                    <h2 className='text-2xl font-primary font-bold text-white'>About Headphones</h2>
                    <p className='text-lg pt-4 font-primary text-white'>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.</p>
                    <Link className='uppercase text-xl pt-4 block text-white font-primary' to='/shop'>Discover HeadPhones</Link>
                </div>
                <div>
                    <h2 className='text-2xl font-bold font-primary text-white'>Company</h2>
                    <Link className='text-white block font-primary py-2 text-lg' to='/about'>About</Link>
                    <Link className='text-white block font-primary py-2 text-lg' to='/contact'>Contact</Link>
                    <Link className='text-white block font-primary py-2 text-lg' to='/'>Latest News</Link>
                    <Link className='text-white block font-primary py-2 text-lg' to='/'>Help & FAQs</Link>
                    <Link className='text-white block font-primary py-2 text-lg' to='/'>Privacy Policy</Link>
                </div>
                <div>
                    <h2 className='text-2xl font-bold font-primary text-white'>Links</h2>
                    <Link className='text-white block font-primary py-2 text-lg' to='/shop'>Shop Products</Link>
                    <Link className='text-white block font-primary py-2 text-lg' to='/my-orders'>My Orders</Link>
                    <Link className='text-white block font-primary py-2 text-lg' to='/'>Checkout</Link>
                    <Link className='text-white block font-primary py-2 text-lg' to='/'>Contact</Link>
                    <Link className='text-white block font-primary py-2 text-lg' to='/'>Privacy Policy</Link>
                </div>
                <div>
                    <h2 className='text-2xl font-bold font-primary text-white'>Contact</h2>
                    <div>
                        <p className='block uppercase font-primary text-orange'>Phone</p>
                        <p className='block uppercase font-primary text-white'>0123456789</p>
                    </div>
                    <div className='mt-4'>
                        <p className='block uppercase font-primary text-orange'>Address</p>
                        <p className='block uppercase font-primary text-white'>880 BROOKLYN STREET</p>
                        <p className='block uppercase font-primary text-white'>NEW YORK, USA</p>
                    </div>
                    <div className='mt-4'>
                        <p className='block uppercase font-primary text-orange'>E-mail</p>
                        <p className='block uppercase font-primary text-white'>HELP@YOURCOMPANY.COM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;