import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () =>
{
    const { register, handleSubmit, reset } = useForm();
    const onSubmit=(data)=>{
        axios.post('https://quiet-ocean-51705.herokuapp.com/shop', data)
            .then(res =>
            {
                if (res.status===200) {
                   alert('Product Added')
                }
                reset()
            })
    }

    return (
        <div>
            <form className='md:w-2/4 m-auto font-primary shadow border p-6 my-20' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-3xl font-bold text-gray-800 pb-6 text-center'>Review</h2>
                <div className='flex'>
                    <input {...register("title",{ required: true })} className='border p-2 rounded mr-2 border-gray-400 w-full my-3' placeholder='Title' type='text' />
                    <input {...register("rating",{ required: true })} className='border p-2 rounded ml-2 border-gray-400 w-full my-3' placeholder='Rating' type='number'/>
                </div>
                <div>
                    <input {...register("connection",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Connection Type' type='text'/>
                </div>
                <div>
                    <input {...register("image",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Your Image Link' type='text'/>
                </div>
                <div>
                    <input {...register("price",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Price' type='number' />
                </div>
                <input type="submit"  className='p-2 bg-orange cursor-pointer text-lg text-white rounded border-none w-full my-3'/>
            </form>
        </div>
    );
};

export default AddProduct;