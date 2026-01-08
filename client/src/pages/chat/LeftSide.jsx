import { IoHomeOutline, IoSettingsSharp, IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { TbMessage2Filled } from "react-icons/tb";
import { Link } from 'react-router-dom';



const LeftSide = () => {
    const chatUrl = [
        {
            id: 1,
            url: '/',
            title: 'Home',
            icon: <IoHomeOutline />,
        }, {
            id: 2,
            title: 'Search',
            url: '/search-friend',
            icon: <IoSearchOutline />,
        }, {
            id: 3,
            title: 'Notification',
            icon: <FaRegHeart />,
            functionApply: 'ShowNotification()'
        }, {
            id: 4,
            url: '/chat-messages',
            title: 'Chat',
            icon: <TbMessage2Filled />,
        }
    ]


    return (
        <div className='h-full flex flex-col justify-between'>
            <div className="">
                {chatUrl.map((data) =>
                    <div className={`${data.id === 1 ? '' : 'mt-2'} bg-pink-100 rounded-[3px] px-5 py-3 `} key={data.id} >
                        <Link to={data.url} className='flex items-center gap-4'>
                            <p className='text-xl'> {data.icon}</p>
                            <p>{data.title}</p>
                        </Link>
                    </div>
                )}
            </div>
            <div className="bg-pink-100 rounded-[3px] px-5 py-3 ">
                <Link className='flex items-center gap-4'>
                    <IoSettingsSharp className='text-xl' />
                    <p>Setting</p>
                </Link>
            </div>
        </div>
    )
}

export default LeftSide