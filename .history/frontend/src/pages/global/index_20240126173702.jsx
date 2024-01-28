import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { Outlet } from "react-router-dom";
import { Notification } from "./components/notification/ind"

function Global() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Notification />
    </>
  );
}

export default Global;