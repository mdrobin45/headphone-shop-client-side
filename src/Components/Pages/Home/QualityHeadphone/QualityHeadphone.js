import React from 'react';
import {BsSoundwave} from 'react-icons/bs'
import {GiSpeaker} from 'react-icons/gi'
import {ImHeadphones} from 'react-icons/im'
import {FaUserAlt} from 'react-icons/fa'
import SectionHeader from '../../../SectionHeader/SectionHeader';
import QualityHeadphoneCard from './QualityHeadphoneCard/QualityHeadphoneCard';

const QualityHeadphone = () => {
    return (
        <div className='bg-gray-100 pt-14'>
            <div className='m-auto text-center w-1/2'>
                <SectionHeader mainTitle='More Power Even Less Noise' subTitle='QUALITY HEADPHONES' />
            </div>
            <div className='flex py-20 justify-between container'>
                    <QualityHeadphoneCard icon={<BsSoundwave className='text-5xl m-auto'/>} text='Virtual Surround Sound'/>
                    <QualityHeadphoneCard icon={<GiSpeaker className='text-5xl m-auto'/>} text='Sound Position Control'/>
                    <QualityHeadphoneCard icon={<ImHeadphones className='text-3xl m-auto'/>} text='Easy Hands Free Calling'/>
                    <QualityHeadphoneCard icon={<FaUserAlt className='text-3xl m-auto'/>} text='Smarter Voice Assitant'/>
                </div>
        </div>
    );
};

export default QualityHeadphone;