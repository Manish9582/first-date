import { Outlet } from "react-router-dom"
import LeftSide from "../../pages/chat/LeftSide"


const ChatDashboard = () => {

    return (
        <div className={`grid grid-cols-12 h-screen w-full`}>
            <div className={`col-span-2 bg-white h-full`}>
                <LeftSide />
            </div>
            <div className={`col-span-10 h-full overflow-y-auto`}>
                <div>
                    <Outlet />
                </div>
                <div className='text-center bg-black text-white/70 py-3 text-[14px]'>
                    <p>All rights reserved &#xA9; {new Date().getFullYear()} First And Last Date .</p>
                </div>
            </div>
        </div>
    )
}

export default ChatDashboard