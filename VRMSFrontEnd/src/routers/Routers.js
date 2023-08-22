import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/SignUp";
import UpdateProfile from "../pages/UpdateProfile";
import PaymentForm from "../pages/PaymentForm";
import { ToastContainer } from "react-toastify";
import AllVehicles from '../pages/AllVehicles';
import AvailableVehicles from '../pages/AvailableVehicles';
import ReservedVehicles from '../pages/ReservedVehicles';
import Users from '../pages/Users';
import SideBar from '../components/Sidebar';
import sidebar_menu from '../constants/sidebar-menu';

const Routers = () => {
    return (<>

        {/* <div className='dashboard-container'> */}
        <div className='row'>
        <div className='col-md-2'><SideBar menu={sidebar_menu} /></div>
            
        <div className='col-md-10'>
            {/* <div className='dashboard-body'> */}
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cars" element={<CarListing />} />
                    <Route path="/cars/:slug" element={<CarDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/payment" element={<PaymentForm />} />
                    <Route path="/updateprofile" element={<UpdateProfile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Admin route  */}

                  
                        <Route path="*" element={<div></div>} />
                        <Route exact path="/" element={<div></div>} />
                        <Route exact path="/AllVehicles" element={< AllVehicles />} />
                        <Route exact path="/AvailableVehicles" element={< AvailableVehicles />} />
                        <Route exact path="/ReservedVehicles" element={< ReservedVehicles />} />
                        <Route exact path="/Users" element={< Users />} />
                        <Route exact path="/locations" element={<div></div>} />
                        <Route exact path="/profile" element={<div></div>} />
                        {/* <Route exact path="/addServiceProvider" element={ <addServiceProvider /> }/> */}
                  


                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            </div>
          {/* <div className='col'></div> */}
            {/* </div> */}
        {/* </div> */}
        <ToastContainer />
    </>
    );
};

export default Routers;
