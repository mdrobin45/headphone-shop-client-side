import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Swal from 'sweetalert2';
import useAPI from '../../../../../Hooks/useAPI';

const SingleHeadPhone = ({ headPhone }) =>
{
    const { user } = useAPI().auth;
    const { title, rating, img, _id, connection, price } = headPhone;
    const email = { email: user?.email };
    // Handle add to cart
    const handleAddToCart = () =>
    {
        axios.post('http://localhost:5000/cart', {...headPhone,...email})
            .then(res =>
            {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: 'Added product to cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else if (res.data.duplicate===true) {
                    Swal.fire({
                        position: 'center center',
                        icon: 'error',
                        title: 'Already added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className='shadow border rounded text-center p-3'>
            <img className='m-auto' src={img} alt="Product" />
            <h4 className='font-primary uppercase text-gray-400'>{connection}</h4>
            <h2 className='font-primary text-2xl py-3'>{title}</h2>
            <StarRatings
                rating={parseInt(rating)}
                starRatedColor="#ff8a00"
                numberOfStars={5}
                starDimension='20px'
                starSpacing='1px'
            />
            <h3 className='font-primary text-blue-800 pt-2 text-xl'>${price}</h3>
            <Link className='bg-orange py-2 block mt-3.5 rounded text-white text-lg font-primary' to={`checkout/${_id}`}>Buy Now</Link>
            <button onClick={handleAddToCart} className='bg-gray-700 py-2 w-full mt-3.5 rounded text-white text-lg font-primary'>Add To Cart</button>
        </div>
    );
};

export default SingleHeadPhone;