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
import AvailableVehicles from '../pages/AvailableVehicles';
import ReservedVehicles from '../pages/ReservedVehicles';
import AddVehicle from '../pages/AddVehicle';
import ServiceLocations from "../pages/ServiceLocation";
import AddServiceLocation from "../pages/AddServiceLocation";
import Bookings from "../pages/Bookings";
import BookingsWithFeedback from "../pages/BookingsWithFeedback";
import WebsiteFeedback from "../pages/WebsiteFeedback";
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
                        <Route exact path="/AvailableVehicles" element={< AvailableVehicles />} />
                        <Route exact path="/ReservedVehicles" element={< ReservedVehicles />} />
                        <Route exact path="/AddVehicle" element={< AddVehicle />} />
                        <Route exact path="/Users" element={< Users />} />
                        <Route exact path="/ServiceLocations" element={< ServiceLocations />} />
                        <Route exact path="/AddServiceLocation" element={< AddServiceLocation />} />
                        <Route exact path="/Bookings" element={< Bookings />} />
                        <Route exact path="/BookingsWithFeedback" element={< BookingsWithFeedback />} />
                        <Route exact path="/WebsiteFeedback" element={< WebsiteFeedback />} />
                        <Route exact path="/locations" element={<div></div>} />
                        <Route exact path="/profile" element={<div></div>} />
                  


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
