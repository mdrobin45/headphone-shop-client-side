import React from 'react';
import StarRatings from 'react-star-ratings';

const SingleTestimonial = ({ item }) =>
{
    const { title, rating, quote, author, img } = item;
    return (
        <div className='text-center py-6 px-20 bg-white shadow rounded mx-6 border'>
            <StarRatings
                rating={rating}
                starRatedColor="#ff8a00"
                numberOfStars={5}
                starDimension='20px'
                starSpacing='1px'
            />
            <h2 className='text-2xl pt-6 text-gray-800 font-bold font-primary'>{title}</h2>
            <p className='text-lg pt-6 pb-6 font-primary text-gray-500'>{quote}</p>
            <hr className='py-3' />
            <img className='m-auto w-10' src={img} alt="author" />
            <p className='text-orange pt-4 font-bold font-primary text-lg'>{author}</p>
        </div>
    );
};

export default SingleTestimonial;