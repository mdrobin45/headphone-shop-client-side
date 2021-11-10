import React from 'react';

const SectionHeader = ({mainTitle,subTitle,headingColor}) => {
    return (
        <div>
            <h3 className='uppercase text-orange tracking-widest font-primary'>{subTitle}</h3>
            <h2 style={{color:`${headingColor}`}} className='text-6xl font-black font-primary'>{mainTitle}</h2>
        </div>
    );
};

export default SectionHeader;