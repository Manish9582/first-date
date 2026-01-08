import { MdOutlineAttachFile } from "react-icons/md";
import { IoIosSend } from "react-icons/io";


const ChatRigthSide = () => {
    return (
        <div>
            <div className="py-3.5 px-4 border-b border-gray-500 flex gap-4 items-center">
                <div className="bg-pink-300 w-fit px-3.5 py-2 rounded-full">
                    <strong className="font-semibold text-sm">M</strong>
                </div>
                <div>
                    <p className="text-sm">Randome</p>
                    <p className="text-[12px] font-semibold">Online</p>
                </div>
            </div>

            <div className="px-4 h-[80vh] overflow-y-auto">

            </div>
            <div className="bg-white flex gap-2 items-center py-4 px-4">
                <div className="bg-gray-100 text-xl rotate-[45deg] cursor-pointer p-3 rounded-full">
                    <MdOutlineAttachFile />
                </div>
                <div className="w-full border border-gray-400 mt-0.5 rounded-md">
                    <input type="text" className="w-full py-2 outline-none px-2" placeholder="Send Message ..."/>
                </div>
                <div className="bg-gray-100 p-3 text-xl cursor-pointer rounded-full">
                    <IoIosSend />
                </div>
            </div>
        </div>
    )
}

export default ChatRigthSide