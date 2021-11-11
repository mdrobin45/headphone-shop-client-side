import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const SingleHeadPhone = ({ headPhone }) =>
{
    const { title, rating, img, connection, price } = headPhone;
    return (
        <div className='shadow border rounded text-center p-3'>
            <img className='m-auto' src={img} alt="Product" />
            <h4 className='font-primary uppercase text-gray-400'>{connection}</h4>
            <h2 className='font-primary text-2xl py-3'>{title}</h2>
            <StarRatings
                rating={rating}
                starRatedColor="#ff8a00"
                numberOfStars={5}
                starDimension='20px'
                starSpacing='1px'
            />
            <h3 className='font-primary text-blue-800 pt-2 text-xl'>${price}</h3>
            <Link className='bg-orange py-2 block mt-3.5 rounded text-white text-lg font-primary' to='/checkout'>Buy Now</Link>
        </div>
    );
};

export default SingleHeadPhone;