import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Checkout from './Components/Pages/Checkout/Checkout';
import Contact from './Components/Pages/Contact/Contact';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageOrders from './Components/Pages/Dashboard/ManageOrders/ManageOrders';
import ManageProducts from './Components/Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './Components/Pages/Dashboard/MyOrders/MyOrders';
import Review from './Components/Pages/Dashboard/Review/Review';
import Home from './Components/Pages/Home/Home';
import Shop from './Components/Pages/Shop/Shop';
import Login from './Components/Pages/User/Login/Login';
import Register from './Components/Pages/User/Register/Register';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import APIContextProvider from './ContextAPI/APIContextProvider';

const App = () => {
  return (
    <APIContextProvider>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/shop'>
            <Shop/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route exact path='/review'>
            <Review/>
          </Route>
          <PrivetRoute exact path='/checkout/:id'>
            <Checkout/>
          </PrivetRoute>
          <Route exact path='/manage-orders'>
            <ManageOrders/>
          </Route>
          <Route exact path='/manage-product'>
            <ManageProducts/>
          </Route>
          <Route exact path='/my-order'>
            <MyOrders/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </APIContextProvider>
  );
};

export default App;