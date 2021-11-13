import React from 'react';
import { Switch, useRouteMatch,Route } from 'react-router';
import { Link } from 'react-router-dom';
import DashboardHome from './DashboardHome/DashboardHome';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


const Dashboard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <div className='flex'>
                <ul>
                    <li>
                        <Link to={`${url}`}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={`${url}/myOrder`}>My Orders</Link>
                    </li>
                    <li>
                        <Link to={`${url}/payment`}>Payment</Link>
                    </li>
                    <li>
                        <Link to={`${url}/reviews`}>Reviews</Link>
                    </li>
                    <li>
                        <Link to={`${url}/make-admin`}>Make Admin</Link>
                    </li>
                </ul>  
            </div>
            
            <Switch>
                <Route exact path={path}>
                    <DashboardHome/>
                </Route>
                <Route exact path={`${path}/myOrder`}>
                    <MyOrders/>
                </Route>
                <Route exact path={`${path}/payment`}>
                    <Payment/>
                </Route>
            </Switch>
          </div>
    );
};

export default Dashboard;