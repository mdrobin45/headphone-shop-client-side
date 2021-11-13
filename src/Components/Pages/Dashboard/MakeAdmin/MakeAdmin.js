import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () =>
{
    const { register, handleSubmit, reset } = useForm();
    const role={role:'admin'}
    const onSubmit=(data)=>{
        axios.post('https://quiet-ocean-51705.herokuapp.com/users', {...data,...role})
            .then(res =>
            {
                if (res.data.insertedId) {
                   alert('Admin user created')
                }
                reset()
            })
    }
    return (
        <form className='w-2/4 m-auto font-primary shadow border p-6 my-20' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-3xl font-bold text-gray-800 pb-6 text-center'>Make an Admin</h2>
                <div className='flex'>
                    <input {...register("name",{ required: true })} className='border p-2 rounded mr-2 border-gray-400 w-full my-3' placeholder='Admin Name' type='text' />
                </div>
                <div>
                    <input {...register("email",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Email' type='number'/>
                </div>
                <input type="submit"  className='p-2 bg-orange cursor-pointer text-lg text-white rounded border-none w-full my-3'/>
            </form>
    );
};

export default MakeAdmin;