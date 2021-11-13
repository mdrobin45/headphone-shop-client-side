import React from 'react';
import useAPI from '../../../../Hooks/useAPI';
import SectionHeader from '../../../SectionHeader/SectionHeader';
import SingleProduct from './SingleProduct/SingleProduct';

const ManageProducts = () =>
{
    const { headPhones } = useAPI().fetchData;
    return (
        <div className='container py-20'>
            <div className='text-center'>
                <SectionHeader mainTitle='Manage Products' subTitle='HEADPHONES'/>
            </div>
            <div className='md:grid pt-6 grid-cols-3 gap-4'>
                {
                   headPhones?.map(headPhone=><SingleProduct key={headPhone._id} headPhone={headPhone}/>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;