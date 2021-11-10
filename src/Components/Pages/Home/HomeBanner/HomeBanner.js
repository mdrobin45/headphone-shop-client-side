import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookSquare,FaInstagram,FaPinterestP} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../CustomStyle/Style.css'
import headphone from '../../../../images/home-headphones-1.jpg'
import Button from '../../../Button/Button';

const HomeBanner = () => {
    return (
        <>
            <div className='homeBanner'>
                <div className='container flex'>
                    <div className='flex w-2/4 items-center'>
                        <div>
                            <a href="/"><AiOutlineTwitter className='text-3xl hover:text-orange transition-all text-white my-6' /></a>
                            <a href="/"><FaFacebookSquare className='text-3xl hover:text-orange transition-all text-white my-6' /></a>
                            <a href="/"><FaPinterestP className='text-3xl hover:text-orange transition-all text-white my-6' /></a>
                            <a href="/"><FaInstagram className='text-3xl hover:text-orange transition-all text-white my-6'/></a>
                        </div>
                        <div className='pl-10'>
                            <h2 className='font-bold text-7xl text-white font-primary'>LOUD AND <br /> CLEAR SOUND</h2>
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