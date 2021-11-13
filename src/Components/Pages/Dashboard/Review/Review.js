import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const Review = () =>
{
    const { register, handleSubmit, reset } = useForm();
    const onSubmit=(data)=>{
        axios.post('https://quiet-ocean-51705.herokuapp.com/reviews', data)
            .then(res =>
            {
                if (res.data.insertedId) {
                   alert('Review added')
                }
                reset()
            })
    }
    return (
        <div>
            <form className='w-2/4 m-auto font-primary shadow border p-6 my-20' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-3xl font-bold text-gray-800 pb-6 text-center'>Review</h2>
                    <div className='flex'>
                        <input {...register("authorName",{ required: true })} className='border p-2 rounded mr-2 border-gray-400 w-full my-3' placeholder='Your Name' type='text' />
                        <input {...register("title",{ required: true })} className='border p-2 rounded ml-2 border-gray-400 w-full my-3' placeholder='Review Title' type='text'/>
                    </div>
                    <div>
                        <input {...register("rating",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Rating' type='number'/>
                    </div>
                    <div>
                        <input {...register("image",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Your Image Link' type='text'/>
                    </div>
                    <div>
                        <textarea {...register("quote",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Your Quote' />
                    </div>
                    <input type="submit"  className='p-2 bg-orange cursor-pointer text-lg text-white rounded border-none w-full my-3'/>
                </form>
        </div>
    );
};

export default Review;