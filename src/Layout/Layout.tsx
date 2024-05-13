
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import CustomOutlet from "../components/Outlet/CustomOutlet";
import {Outlet} from "react-router-dom";


export default function Layout() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
