import LoginHeader from "./components/UI/LoginHeader";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routers from "./routers/Routers";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";


function App() {

  
    const location = useLocation();

    console.log(location.pathname);

    const role = useSelector((state) => state.auth.role)

  return (
    <>
      <>
      { location.pathname=="/login" ?<LoginHeader></LoginHeader>: location.pathname=="/register" ? <LoginHeader></LoginHeader>:role=="Admin"?<></>:<Header /> }
      <div>
        <Routers />
      </div>
      { location.pathname=="/login" ?<></> :location.pathname=="/register" ? <></>:role=="Admin"?<></>:<Footer /> }
    </>
      <ToastContainer />
    </>
  );
}

export default App;
