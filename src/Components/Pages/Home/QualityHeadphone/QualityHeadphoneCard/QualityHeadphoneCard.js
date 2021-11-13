import React from 'react';

const QualityHeadphoneCard = ({icon,text}) => {
    return (
        <div className='bg-white hover:bg-orange hover:text-white md:my-6 md:w-1/3 mx-3 my-6 px-6 py-20 rounded shadow text-center text-gray-800 transition-all'>
            {icon}
            <h3 className='pt-6 font-primary text-2xl'>{text}</h3>
        </div>
    );
};

export default QualityHeadphoneCard;