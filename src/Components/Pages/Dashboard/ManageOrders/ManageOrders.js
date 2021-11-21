import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ReactStars from 'react-stars';

const ManageOrders = () =>
{
    const [orders, setOrders] = useState();
    const [updateOrder, setUpdateOrder] = useState(0);
    useEffect(() =>
    {
        fetch('https://headphone-shop-r.herokuapp.com//orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [updateOrder]);



    // Delete order
    const deleteOrder = (id) =>
    {
        Swal.fire({
            title: 'Do you want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) =>
        {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete(`https://headphone-shop-r.herokuapp.com//orders/${id}`)
                    .then(res =>
                    {
                        if (res.status === 200) {
                            setUpdateOrder(updateOrder + 1);
                        }
                    });
                Swal.fire('Order Deleted', '', 'success');
            }
        });
    };


    // Approve order
    const approveOrder = (id) =>
    {
        axios.put(`https://headphone-shop-r.herokuapp.com//orders/${id}`)
            .then(res =>
            {
                if (res.status === 200) {
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: 'Order Approved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setUpdateOrder(updateOrder + 1);
                }
            });
    };
    return (
        <div className='font-primary'>
            {
                orders?.map(item => <section
                    className='mt-6'
                    key={item._id}>
                    {
                        item?.status === 'Pending' ? <div className='text-center rounded-t-lg bg-yellow-500 text-white text-lg py-2 w-10/12 m-auto'><h2>Pending</h2></div> : <div className='text-center rounded-t-lg bg-green-600 text-white text-lg py-2 w-10/12 m-auto'><h2>Approved</h2></div>
                    }
                    <div className='border rounded-b-lg md:flex md:pr-6 m-auto mb-6 shadow w-10/12'>
                        <div className='md:pr-6 md:w-3/4'>
                            <div>
                                <img className='w-full' src={item?.img} alt="Thumbnail" />
                            </div>
                            <div className='pl-6'>
                                <h2 className='font-bold text-3xl text-yellow-500'>{item?.title}</h2>
                                <h2 className='font-bold text-3xl text-yellow-500'>${item?.price}</h2>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={item.rating}
                                    edit={false}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                />
                            </div>
                        </div>
                        <div className='md:px-0 md:w-1/4 px-4'>
                            <h2 className='text-3xl font-bold text-center text-yellow-500 pt-3'>User Info</h2>
                            <hr />
                            <h2 className='text-2xl font-bold pt-4'>Name: {item?.name}</h2>
                            <p className='text-lg'>Email: {item?.email}</p>
                            <p className='text-lg'>Phone: {item?.phone}</p>
                            <p className='text-lg'>Address: {item?.address}</p>
                            <button onClick={() => deleteOrder(item?._id)} className='bg-red-500 block w-full my-3 px-10 py-3 rounded text-white'>Delete</button>
                            {
                                item?.status === 'Approved' ? <button disabled onClick={() => approveOrder(item?._id)} className='bg-green-600 cursor-not-allowed px-10 block w-full my-3 py-3 rounded text-white'>Already Approved</button> : <button onClick={() => approveOrder(item?._id)} className='bg-green-600 px-10 block w-full my-3 py-3 rounded text-white'>Approve</button>
                            }
                        </div>
                    </div>
                </section>
                )
            }
        </div>
    );
};

export default ManageOrders;