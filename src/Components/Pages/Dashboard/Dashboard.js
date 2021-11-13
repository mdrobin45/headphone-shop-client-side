import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch, useRouteMatch,Route } from 'react-router';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import DashboardHome from './DashboardHome/DashboardHome';
import MyOrders from './MyOrders/MyOrders';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import Review from './Review/Review';
import Payment from './Payment/Payment';
import useAPI from '../../../Hooks/useAPI';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProduct from './AddProduct/AddProduct';

const Dashboard = () =>
{
    const { user } = useAPI().auth;
    const [sidebar, setSidebar] = useState(true);
    const { path, url } = useRouteMatch();
    const [userInfo, setUserInfo] = useState({});


    // Get user info from database
    useEffect(() =>
    {
        fetch(`https://quiet-ocean-51705.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data =>setUserInfo(data));
    }, [])
    console.log(userInfo);
    return (
        <div className='flex'>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        {/* Logged In user Link */}
                        {
                            userInfo?.role === 'admin' ?<div>
                                <li className='nav-text'>
                                    <Link to={`${url}/manage-orders`}>Manage Orders</Link>
                                </li>
                                <li className='nav-text'>
                                    <Link to={`${url}/manage-products`}>Manage Products</Link>
                                </li>
                                <li className='nav-text'>
                                    <Link to={`${url}/add-product`}>Add Product</Link>
                                </li>
                                <li className='nav-text'>
                                    <Link to={`${url}/make-admin`}>Make an Admin</Link>
                                </li>
                            </div> : <div>
                                <li className='nav-text'>
                                    <Link to={`${url}`}>Dashboard</Link>
                                </li>
                                <li className='nav-text'>
                                    <Link to={`${url}/myOrder`}>My Orders</Link>
                                </li>
                                
                                
                                <li className='nav-text'>
                                    <Link to={`${url}/review`}>Review</Link>
                                </li>
                                <li className='nav-text'>
                                    <Link to={`${url}/payments`}>Payments</Link>
                                </li> 
                            </div>  
                        }
                    </ul>
                </nav>
                <div className='w-full'>
                    <Switch>
                        <Route exact path={`${path}/myOrder`}>
                            <MyOrders/>
                        </Route>
                        <Route exact path={`${path}`}>
                            <DashboardHome/>
                        </Route>
                        <Route exact path={`${path}/add-product`}>
                            <AddProduct/>
                        </Route>
                        <Route exact path={`${path}/manage-orders`}>
                            <ManageOrders/>
                        </Route>
                        <Route exact path={`${path}/manage-products`}>
                            <ManageProducts/>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review/>
                        </Route>
                        <Route exact path={`${path}/payments`}>
                            <Payment/>
                        </Route>
                        <Route exact path={`${path}/make-admin`}>
                            <MakeAdmin/>
                        </Route>
                    </Switch>
                </div>
            </IconContext.Provider>
        </div>
        
    );
};

export default Dashboard;