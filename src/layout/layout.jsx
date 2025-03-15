import { Outlet, Route } from "react-router-dom";
import NavBar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

const Layout = () => {
    return(
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>

        </>

    );
}

export default Layout;