import React from 'react';
import useAPI from '../../../../Hooks/useAPI';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import SingleHeadPhone from './SingleHeadPhone/SingleHeadPhone';

const HomeShop = () =>
{
    const { headPhones } = useAPI().fetchData;
    return (
        <div className='container py-20'>
            <div className='text-center'>
                <SectionHeader mainTitle='Choose Colors' subTitle='SHOP HEADPHONES'/>
            </div>
            <div className='grid pt-6 grid-cols-3 gap-4'>
                {
                   headPhones?.slice(0,6).map(headPhone=><SingleHeadPhone key={headPhone._id} headPhone={headPhone}/>)
                }
            </div>
        </div>
    );
};

export default HomeShop;