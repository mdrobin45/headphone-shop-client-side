import React from 'react';
import Button from '../../../Button/Button';
import '../../../CustomStyle/Style.css'

const WorldclassBanner = () => {
    return (
        <div className='worldClassBanner'>
            <div className='container'>
                 <div className='w-2/4'>
                    <h4 className='text-xl tracking-widest font-primary text-white'>WORLDCLASS WIRELESS HEADPHONES</h4>
                    <h2 className='font-primary text-6xl font-bold text-white'>Experience the next level of silence.</h2>
                    <Button url='/shop' btnText='Discover now'/>
                </div>
                <div className='w-2/4 block'></div>
            </div>
            
        </div>
    );
};

export default WorldclassBanner;