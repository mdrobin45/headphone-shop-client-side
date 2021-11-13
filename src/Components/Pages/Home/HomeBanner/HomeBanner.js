import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookSquare,FaInstagram,FaPinterestP} from 'react-icons/fa';
import '../../../CustomStyle/Style.css'
import headphone from '../../../../images/home-headphones-1.jpg'
import Button from '../../../Button/Button';

const HomeBanner = () => {
    return (
        <>
            <div className='homeBanner'>
                <div className='container md:flex'>
                    <div className='md:flex md:w-2/4 items-center'>
                        <div>
                            <a href="/"><AiOutlineTwitter className='text-3xl hover:text-orange transition-all text-white my-6' /></a>
                            <a href="/"><FaFacebookSquare className='text-3xl hover:text-orange transition-all text-white my-6' /></a>
                            <a href="/"><FaPinterestP className='text-3xl hover:text-orange transition-all text-white my-6' /></a>
                            <a href="/"><FaInstagram className='text-3xl hover:text-orange transition-all text-white my-6'/></a>
                        </div>
                        <div className='pl-10'>
                            <p className='uppercase tracking-widest font-primary text-lg text-orange'>Get your favorite headphone & enjoy music</p>
                            <h2 className='font-primary md:font-bold md:text-7xl pt-6 text-2xl text-white'>LOUD AND <br /> CLEAR SOUND</h2>
                            <Button url='/shop' btnText='Discover Now'/>
                        </div>
                    </div>
                    <div className='block w-2/4'></div>
                </div>
            </div>
            <div className='bg-gray-100'>
                <img className='m-auto' src={headphone} alt="Headphone" />
            </div>
        </>
        
    );
};

export default HomeBanner;