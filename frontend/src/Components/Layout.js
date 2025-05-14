import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Box sx={{ pt: 1 }}>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
