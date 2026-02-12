import { Outlet } from "react-router";
import { Link } from "react-router";
import Navber from "../root/Components/Navber/Navber";
import Footer from "../root/Components/Footer/Footer";

const RootLayout = () => {
    return (
        <>
            <header>
                <Navber />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default RootLayout;