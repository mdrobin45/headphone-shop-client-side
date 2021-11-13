import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAPI from '../../../Hooks/useAPI';
import paymentCard from '../../../images/card-logo.png'

const Checkout = () =>
{
    // Initialize state
    const { user } = useAPI().auth;
    const [userInfo, setUserInfo] = useState({});
    const { id } = useParams();
    const orders = [];
    const [totalPrice, setTotalPrice] = useState(0);
    const [headphone, setHeadphone] = useState({});
    const { register, handleSubmit,reset } = useForm();


    // Post from data to database
    const onSubmit = data =>
    {
        const status = { status: 'Pending' };
        const { _id, ...rest } = data;
        axios.post('https://quiet-ocean-51705.herokuapp.com/orders', {...rest,...headphone,...status})
            .then(res =>
            {
                if (res.data.insertedId) {
                    alert("Order Added");
                    reset();
                }
                console.log(res);
            })
    };


    // Get user info from database
    useEffect(() =>
    {
        fetch(`https://quiet-ocean-51705.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data =>
            {
                const { _id, ...rest } = data;
                setUserInfo(rest)
                reset(rest);
            });
    }, [reset])

    // Get single headphone
    useEffect(() =>
    {
        fetch(`https://quiet-ocean-51705.herokuapp.com/shop/${id}`)
            .then(res => res.json())
            .then(data =>
            {
                const { _id, ...rest } = data;
                setHeadphone(rest)
            });
    }, [id])
    orders.push(headphone)


    // Update total price
    useEffect(() =>
    {
        orders?.map(order => {if (order?.price) {
            setTotalPrice(order?.price+totalPrice)
        }else{setTotalPrice(0)}});
    }, [headphone]);
    
    
    return (
        <div className='container font-primary my-20 mt-10 flex'>

            {/* Customer details form */}
            <div className='1/5 border p-6 shadow rounded'>
                <div className='items-center flex'>
                    <h2 className='text-xl flex items-center justify-center w-10 h-10 bg-orange p-2 rounded-full'>1</h2>
                    <h2 className='font-bold text-2xl pl-2'> Customer Information</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex'>
                        <input {...register("firstName",{ required: true })} readOnly value={userInfo?.firstName} className='border p-2 rounded mr-2 border-gray-400 w-full my-3' placeholder='First Name' id='firstName' type='text' />
                        <input {...register("lastName",{ required: true })} readOnly value={userInfo?.lastName}  className='border p-2 rounded ml-2 border-gray-400 w-full my-3' placeholder='Last name' id='lastName' type='text'/>
                    </div>
                    <div>
                        <input {...register("email",{ required: true })} readOnly value={userInfo?.email} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Email' id='email' type='email' />
                    </div>
                    <div>
                        <input {...register("phone",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Phone' id='phone' type='number'/>
                    </div>
                    <div>
                        <input {...register("city",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='City' id='city' type='text'/>
                        <input {...register("address",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Address' id='address' type='text' />
                    </div>
                    <div>
                        <textarea {...register("comment",{ required: true })} className='border p-2 rounded border-gray-400 w-full my-3' placeholder='Comment' id='comment' />
                    </div>
                    <input type="submit"  className='p-2 bg-orange cursor-pointer text-lg text-white rounded border-none w-full my-3'/>
                </form>
            </div>

            {/* Payment method && delivery card */}
            <div className='w-4/5 block'>
                <div className='flex justify-center'>
                    <div className='shadow border p-6 mx-3 w-2/4 rounded'>
                        <div className='items-center pb-4 flex'>
                            <h2 className='text-xl flex items-center justify-center w-10 h-10 bg-orange p-2 rounded-full'>2</h2>
                            <h2 className='font-bold text-2xl pl-2'>Payment Method</h2>
                        </div>
                        <hr />
                        <p className='pt-3 text-xl'>Select Payment Method</p>
                        <form>
                            <input id='COD' name='a' type="radio" value='Cash on Delivery' />
                            <label className='text-lg pl-2 pr-2' htmlFor="COD">Cash on Delivery</label>

                            <input id='online' name='a' type="radio" value='Online Payment' />
                            <label className='text-lg pl-2' htmlFor="online">Online Payment</label>
                        </form>
                        <div className='pt-3'>
                            <h2 className='text-xl font-bold'>We are accepted:</h2>
                            <img className='pt-3' src={paymentCard} alt="Card" />
                        </div>
                    </div>

                    {/* Delivery card */}
                    <div className='shadow border mx-3 w-2/4 p-6 rounded'>
                        <div className='items-center pb-4 flex'>
                            <h2 className='text-xl flex items-center justify-center w-10 h-10 bg-orange p-2 rounded-full'>3</h2>
                            <h2 className='font-bold text-2xl pl-2'>Delivery Method</h2>
                        </div>
                        <hr />
                        <p className='pt-3 text-xl'>Select Delivery Method</p>
                        <div>
                            <input id='COD' name='a' type="radio" value='Cash on Delivery' />
                            <label className='text-lg pl-2 pr-2' htmlFor="COD">Home Delivery - $30</label>
                            <br />
                            <input id='online' name='a' type="radio" value='Online Payment' />
                            <label className='text-lg pl-2' htmlFor="online">Store Pickup - $0</label>
                        </div>
                    </div>
                </div>
                {/* Gift voucher && coupon code card */}
                <div className='border flex items-center justify-between mt-10 mx-3 p-4 rounded shadow'>
                    <div className='flex items-center w-2/4'>
                        <input placeholder='Gift Voucher' className='border m-3 p-2 rounded border-gray-400 w-4/5' type="text" />
                        <input className='bg-orange border-gray-400 cursor-pointer mx-3 my-3 p-2 rounded text-lg text-white' type="submit" value='Apply Voucher' />
                    </div>
                    <div className='flex items-center w-2/4'>
                        <input placeholder='Promo / Coupon Code' className='border p-2 rounded border-gray-400 w-4/5 m-3' type="text" />
                        <input className='bg-orange border-gray-400 cursor-pointer mx-3 my-3 p-2 rounded text-lg text-white' type="submit" value='Apply Coupon' />
                    </div>
                </div>

                {/* Order Review */}
                <div className='mt-10 shadow border rounded mx-3'>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Product Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Unit Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Total
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {orders.map((order) => (
                                        <tr key={order._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{order?.title}</div>
                                                </div>
                                            </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{order.price}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                1
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            </td>
                                        </tr>
                                        ))}
                                            <tr>
                                            <td></td>       
                                            <td></td>       
                                            <td className='px-6 py-4 whitespace-nowrap font-bold text-lg text-gray-800'>Subtotal:</td>       
                                            <td className='px-6 py-4 whitespace-nowrap text-lg font-bold text-gray-500'>{totalPrice}</td>       
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;