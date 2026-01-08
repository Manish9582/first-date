import { MdModeEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { VscLiveShare } from "react-icons/vsc";


const Profile = () => {
    return (
        <div className='w-full h-full'>
            <div className='relative h-[40vh] w-full'>
                <div className='h-full w-full'>
                    <img src="assets/images/default-user-backgraound.png" alt="backgraound-image"
                        className='object-cover h-full w-full' />
                </div>
                <div className="claass relative rounded-full bottom-[30%] left-[8%] w-40 h-40">
                    <img src="assets/images/default-user-face.png" alt=""
                        className="w-full h-full object-cover rounded-full" />
                    <div className="absolute bg-white p-2 cursor-pointer top-[55%] rounded-full right-[-10px]">
                        <MdModeEdit />
                    </div>
                </div>
            </div>

            <div className="bg-white flex justify-between items-center py-4 px-6 mt-18">
                <div>
                    UserName
                </div>
                <div className="flex gap-4">
                    <div className="bg-pink-200 p-3 rounded-full">
                        <FaPlus />
                    </div>
                    <div className="bg-pink-200 p-3 rounded-full">
                        <VscLiveShare />
                    </div>
                </div>
            </div>

            <div className="pb-8">
                <div className="border-b border-t py-2 font-semibold text-xl text-center border-gray-300  mt-4">
                    Your Post
                </div>
                <div className="grid grid-cols-3 gap-6 px-8 mt-8">
                    {[1, 2, 3, 4, 5].map((data, indxe) =>
                        <div className="border border-green-700 text-center rounded-lg" key={indxe}>
                            {data}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid sapiente et veritatis vel voluptatum, facilis perferendis temporibus sequi nobis! Itaque reiciendis in tempore, fugiat voluptatum saepe neque totam, quae aut sunt illum a inventore deserunt voluptas eos! Consequatur blanditiis accusantium, sit voluptates excepturi ea eligendi sapiente fugit placeat et, eos, aliquid praesentium consectetur rerum dicta dolorum incidunt quo obcaecati? Cumque?
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile