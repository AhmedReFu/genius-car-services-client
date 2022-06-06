import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageServices from './Pages/ManageServices/ManageServices';
import Order from './Pages/Order/Order';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/Header/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <Home></Home>
        } title='Home'></Route>
        <Route path='/home' element={<Home></Home>} title='Home'></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail />} title='Service Detail'></Route>
        <Route path='/about' element={<About></About>} title='About'></Route>

        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } title='Checkout'></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        } title='Add Service'></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageServices />
          </RequireAuth>
        } title='Manage Service'></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        } title='Orders'></Route>

        <Route path='/login' element={<Login></Login>} title='Login'></Route>
        <Route path='register' element={<Register />} title='Register'></Route>
        <Route path='*' element={<NotFound />} title='404 page'></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
