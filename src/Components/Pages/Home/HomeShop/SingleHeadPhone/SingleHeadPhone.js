import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import useAPI from '../../../../../Hooks/useAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useHook from '../../../../../Hooks/useHook';


const SingleHeadPhone = ({ headPhone }) =>
{
    const { user } = useAPI().auth;
    const { title, rating, img, _id, connection, price } = headPhone;
    const { updateUI, setUpdateUI } = useHook();


    // Handle add to cart
    const handleAddToCart = () =>
    {
        const productDetails = { email: user?.email, title: title, rating: rating, img: img, productId: _id, connection: connection, price: price };
        axios.post('https://headphone-shop-r.herokuapp.com/cart', productDetails)
            .then(res =>
            {
                if (res.data.insertedId) {
                    toast.success('Product successfully added!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                    setUpdateUI(updateUI + 1);
                } else if (res.data.duplicate === true) {
                    toast.error('Oops! Product already exist', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                    });
                }
            });
    };
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
            <ToastContainer />
        </div>
    );
};

export default SingleHeadPhone;