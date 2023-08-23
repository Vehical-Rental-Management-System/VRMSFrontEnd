import LoginHeader from "./components/UI/LoginHeader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CarListing from "./pages/CarListing";
import CarDetails from "./pages/CarDetails";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import UpdateProfile from "./pages/UpdateProfile";
import PaymentForm from "./pages/PaymentForm";
import AllVehicles from './pages/AllVehicles';
import AvailableVehicles from './pages/AvailableVehicles';
import ReservedVehicles from './pages/ReservedVehicles';
import Users from './pages/RetrieveUsers';
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import UserProfile from "./pages/Users/UserProfile";
import ViewProfile from "./pages/Users/ViewProfile";
import ChangePassword from "./pages/Users/ChangePassword";
import MyBookings from "./pages/Users/MyBookings";
import UpdateVehicle from "./pages/UpdateVehicle";
import AdminChangePassword  from "./pages/AdminChangePassword/index";
import Profile from "./pages/Profile/"
import Bookings from "./pages/Bookings"
import BookingsWithFeedback from "./pages/BookingsWithFeedback"
import WebsiteFeedback from "./pages/WebsiteFeedback"
import ServiceLocations from "./pages/ServiceLocation"
import AddServiceLocation from "./pages/AddServiceLocation"
import AddVehicle from "./pages/AddVehicle"


function App() {

  
    const location = useLocation();

    console.log(location.pathname);

    const role = useSelector((state) => state.auth.role)

  return (
    <>
      
      { location.pathname=="/login" ?<LoginHeader></LoginHeader>: location.pathname=="/register" ? <LoginHeader></LoginHeader>:role=="Admin"?<></>:<Header /> }
      <div className='row'>
      {role=="Admin" &&  <div className='col-md-2'><SideBar menu={sidebar_menu} /></div>}
            
        
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cars" element={<CarListing />} />
                    <Route path="/cars/:id" element={<CarDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/payment" element={<PaymentForm />} />
                    <Route path="/updateprofile" element={<UpdateProfile />} />
                    <Route path="/viewProfile" element={<ViewProfile />} />
                    <Route path="/changePassword" element={<ChangePassword />} />
                    <Route path="/myBooking" element={<MyBookings />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Home />} />
                    
                    <Route path="/register" element={<Register />} />
                    </Routes>
                    {/* Admin route  */}
                    <div className='col-md-10'>
                    <Routes>
                  
                        <Route path="*" element={<div></div>} />
                        <Route exact path="/" element={<div></div>} />
                        <Route exact path="/AllVehicles" element={< AllVehicles />} />
                        <Route exact path="/AvailableVehicles" element={< AvailableVehicles />} />
                        <Route exact path="/ReservedVehicles" element={< ReservedVehicles />} />
                        <Route exact path="/Users" element={< Users />} />
                        <Route path ="/Profile" element = {<Profile/>}/>
                        <Route path ="/AdminChangePassword" element = {<AdminChangePassword/>}/>
                        <Route path ="/Bookings" element = {<Bookings/>}/>
                        <Route path ="/BookingsWithFeedback" element = {<BookingsWithFeedback/>}/>
                        <Route path ="/ServiceLocations" element = {<ServiceLocations/>}/>
                        <Route path ="/AddServiceLocation" element = {<AddServiceLocation/>}/>
                        <Route path ="/AddVehicle" element = {<AddVehicle/>}/>
                        <Route path ="/WebsiteFeedback" element = {<WebsiteFeedback/>}/>
                        

                        {/* <Route exact path="/addServiceProvider" element={ <addServiceProvider /> }/> */}
                  


                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            </div>
      { location.pathname=="/login" ?<></> :location.pathname=="/register" ? <></>:role=="Admin"?<></>:<Footer /> }
    
      <ToastContainer />
    </>
  );
}

export default App;