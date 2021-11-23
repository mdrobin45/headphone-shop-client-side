import React from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import swal from 'sweetalert';

const SingleProduct = ({ headPhone }) =>
{
    const { title, rating, img, _id, connection, price } = headPhone;

    // Delete Product
    const deleteProduct = (id) =>
    {
        swal({
            title: 'Do you want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) =>
        {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete(`https://headphone-shop-r.herokuapp.com//shop/${id}`)
                    .then(res =>
                    {

                    });
                swal('Product Deleted', '', 'success');
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
            <button onClick={() => deleteProduct(_id)} className='py-2 bg-red-500 w-full block mt-3.5 rounded text-white text-lg font-primary'>Delete</button>
        </div>
    );
};

export default SingleProduct;