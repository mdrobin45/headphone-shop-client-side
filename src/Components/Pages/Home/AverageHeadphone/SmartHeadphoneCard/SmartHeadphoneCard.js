import React from 'react';

const SmartHeadphoneCard = ({img,title,description}) => {
    return (
        <div className='text-white'>
            <img className='m-auto rounded' src={img} alt="Headphone" />
            <h2 className='text-2xl py-4 font-primary'>{title}</h2>
            <p className='text-lg font-primary'>{description}</p>
        </div>
    );
};

export default SmartHeadphoneCard;