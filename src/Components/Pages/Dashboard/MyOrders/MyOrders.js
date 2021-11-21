import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import useAPI from '../../../../Hooks/useAPI';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyOrders = () =>
{
    const { user } = useAPI().auth;
    const [orders, setOrders] = useState();
    const [updateOrder, setUpdateOrder] = useState(0);
    useEffect(() =>
    {
        fetch(`https://headphone-shop-r.herokuapp.com//orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, updateOrder]);

    // Cancel or delete order
    const cancelOrder = (id) =>
    {
        Swal.fire({
            title: 'Do you want to delete this order?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) =>
        {
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
    return (
        <div className='flex flex-col'>
            {
                orders?.map(item => <section
                    className='mt-6 w-full'
                    key={item._id}>
                    {
                        item?.status === 'Pending' ? <div className='text-center rounded-t-lg bg-yellow-500 text-white text-lg py-2 w-10/12 m-auto'><h2>Pending</h2></div> : <div className='text-center rounded-t-lg bg-green-600 text-white text-lg py-2 w-10/12 m-auto'><h2>Approved</h2></div>
                    }
                    <div className='border items-center m-auto mb-6 md:flex md:pb-0 md:pr-6 md:px-0 pb-10 px-6 rounded-b-lg shadow w-10/12' >
                        <div>
                            <img src={item?.img} alt="Thumbnail" />
                        </div>
                        <div className='pl-6'>
                            <h2 className='font-bold pt-6 text-3xl'>{item?.roomName}</h2>
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
                            <p className='text-lg'>{item?.description}</p>
                        </div>
                        {
                            item?.status !== 'Approved' ? <button onClick={() => cancelOrder(item?._id)} className='bg-red-500 md:w-auto px-10 py-3 rounded text-white w-full'>Cancel</button> : ''
                        }
                    </div>
                </section>

                )
            }
        </div>
    );
};

export default MyOrders;