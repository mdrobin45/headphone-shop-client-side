import React, { useState } from 'react';
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

const Dashboard = () =>
{
    const [sidebar, setSidebar] = useState(true);
    const { path, url } = useRouteMatch();
    return (
        <div className='flex'>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        {/* {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        )
                        })} */}
                        <li className='nav-text'>
                            <Link to={`${url}`}>Dashboard</Link>
                        </li>
                        <li className='nav-text'>
                            <Link to={`${url}/myOrder`}>My Orders</Link>
                        </li>
                        <li className='nav-text'>
                            <Link to={`${url}/manage-orders`}>Manage Orders</Link>
                        </li>
                        <li className='nav-text'>
                            <Link to={`${url}/manage-products`}>Manage Products</Link>
                        </li>
                        <li className='nav-text'>
                            <Link to={`${url}/review`}>Review</Link>
                        </li>
                    </ul>
                </nav>
                <div className='w-full'>
                    <Switch>
                        <Route exact path={`${path}/myOrder`}>
                            <MyOrders/>
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
                    </Switch>
                </div>
            </IconContext.Provider>
        </div>
        
    );
};

export default Dashboard;