import React from 'react';
import Loader from 'react-loader-spinner';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Cart from './Components/Pages/Cart/Cart';
import Checkout from './Components/Pages/Checkout/Checkout';
import Contact from './Components/Pages/Contact/Contact';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import Shop from './Components/Pages/Shop/Shop';
import Login from './Components/Pages/User/Login/Login';
import Register from './Components/Pages/User/Register/Register';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import APIContextProvider from './ContextAPI/APIContextProvider';
import useFetchData from './Hooks/useFetchData';

const App = () =>
{
  const { loading } = useFetchData();
  return (
    <APIContextProvider>
      {
        loading ? <div style={{ left: '45%' }} className='absolute text-center top-1/3'>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div> : <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/shop'>
              <Shop />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <PrivetRoute path='/dashboard'>
              <Dashboard />
            </PrivetRoute>
            <PrivetRoute exact path='/checkout/:id'>
              <Checkout />
            </PrivetRoute>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/register'>
              <Register />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      }
    </APIContextProvider>
  );
};

export default App;