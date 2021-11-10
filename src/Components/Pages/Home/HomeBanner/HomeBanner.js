import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookSquare,FaInstagram,FaPinterestP} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../CustomStyle/Style.css'

const HomeBanner = () => {
    return (
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
                        <h2 className='font-bold text-7xl text-white primary-font'>LOUD AND <br /> CLEAR SOUND</h2>
                        <Link className='bg-orange hover:bg-white hover:text-orange inline-block mt-6 px-6 py-4 rounded text-lg text-white uppercase transition-all' to='/shop'>Discover Now</Link>
                    </div>
                </div>
                <div className='block w-2/4'></div>
            </div>
        </div>
    );
};

export default HomeBanner;