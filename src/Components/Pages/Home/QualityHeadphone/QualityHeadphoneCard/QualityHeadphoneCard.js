import React from 'react';

const QualityHeadphoneCard = ({icon,text}) => {
    return (
        <div className='shadow bg-white hover:bg-orange hover:text-white transition-all text-gray-800 mx-3 py-20 rounded text-center w-1/3 px-6'>
            {icon}
            <h3 className='pt-6 font-primary text-2xl'>{text}</h3>
        </div>
    );
};

export default QualityHeadphoneCard;