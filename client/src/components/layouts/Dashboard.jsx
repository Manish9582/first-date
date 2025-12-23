import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"


const Dashboard = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Dashboard