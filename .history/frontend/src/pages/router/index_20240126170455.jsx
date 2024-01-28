import theme from "../../theme";

import Home from "../home";
import Global from "../global";
import Register from "../register";
import Login from "../login";

import { ThemeProvider } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ForgotPassword from "../forgot-password";


function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Global />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;
