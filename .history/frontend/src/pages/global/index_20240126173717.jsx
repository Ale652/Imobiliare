import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Notification from "../../components/notification";

import { Outlet } from "react-router-dom";

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