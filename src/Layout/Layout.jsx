import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;