import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import BuyNow from './Components/Pages/BuyNow/BuyNow';
import Contact from './Components/Pages/Contact/Contact';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import Shop from './Components/Pages/Shop/Shop';
import Login from './Components/Pages/User/Login/Login';
import Register from './Components/Pages/User/Register/Register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/purchase' element={<BuyNow />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;