import React from 'react';

const SectionHeader = ({mainTitle,subTitle,headingColor}) => {
    return (
        <div>
            <h3 className='uppercase text-orange tracking-widest font-primary'>{subTitle}</h3>
            <h2 style={{color:`${headingColor}`}} className='font-primary md:font-black md:text-6xl text-2xl'>{mainTitle}</h2>
        </div>
    );
};

export default SectionHeader;