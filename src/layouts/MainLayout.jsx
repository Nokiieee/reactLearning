import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
      {/* you can put <ToastContainer /> anywhere. It's positioned absolute */}
    </>
  );
};

export default MainLayout;
