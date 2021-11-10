import React from 'react';
import videoImage from '../../../../images/home-video-image.jpg'
import SectionHeader from '../../../SectionHeader/SectionHeader';
import SmartHeadphoneCard from './SmartHeadphoneCard/SmartHeadphoneCard';
import colImgOne from '../../../../images/home-col-1.jpg'
import colImgTwo from '../../../../images/home-col-2.jpg'
import colImgThree from '../../../../images/home-col-3.jpg'

const AverageHeadphone = () => {
    return (
        <div>
            <div>
                <img style={{marginBottom:'-6rem'}} className='m-auto border-r-8 border-orange border-l-8' src={videoImage} alt="Video" />
            </div>
            <section className='bg-gray-700 container pb-20 pt-32'>
                <div className='w-2/4'>
                    <SectionHeader headingColor='#fff' subTitle='EMSO HEADPHONES' mainTitle='Smarter Than Your Average Headphones'/>
                </div>

                <div className='flex justify-between py-10'>
                    <SmartHeadphoneCard
                        img={colImgOne}
                        title='Wear in Total Comfort'
                        description='Headphones grew out of the need to free up a persons hands when operating a telephone. There were several iterative products that were predecessors to the hands-free headphones.'
                    />
                    <SmartHeadphoneCard
                        img={colImgTwo}
                        title='Clearer Hands-free Calling'
                        description='Headphones grew out of the need to free up a persons hands when operating a telephone. There were several iterative products that were predecessors to the hands-free headphones.'
                    />
                    <SmartHeadphoneCard
                        img={colImgThree}
                        title='Control at Your Fingertip'
                        description='Headphones grew out of the need to free up a persons hands when operating a telephone. There were several iterative products that were predecessors to the hands-free headphones.'
                    />
                </div>
            </section>
        </div>
    );
};

export default AverageHeadphone;