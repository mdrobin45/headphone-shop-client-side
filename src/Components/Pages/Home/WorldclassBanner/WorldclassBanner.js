import React from 'react';
import Button from '../../../Button/Button';
import '../../../CustomStyle/Style.css'

const WorldclassBanner = () => {
    return (
        <div className='worldClassBanner'>
            <div className='container'>
                 <div className='md:w-2/4'>
                    <h4 className='md:text-xl tracking-widest font-primary text-white'>WORLDCLASS WIRELESS HEADPHONES</h4>
                    <h2 className='font-primary md:font-bold md:text-6xl text-3xl text-white'>Experience the next level of silence.</h2>
                    <Button url='/shop' btnText='Discover now'/>
                </div>
                <div className='md:w-2/4 block'></div>
            </div>
            
        </div>
    );
};

export default WorldclassBanner;