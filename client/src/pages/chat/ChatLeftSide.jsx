import React from 'react'

const ChatLeftSide = () => {
    return (
        <div>
            <div className="py-5 px-4 border-b border-gray-500">
                <strong className="font-semibold text-xl">Your Friends</strong>
            </div>
            <div className="px-4 h-[80vh] overflow-y-auto">
                {[2, 4, 4, 5, 2, 4].map((data, index) =>
                    <div key={index} className={`flex justify-between items-center my-3 p-3 hover:bg-pink-600 border border-pink-600 rounded-md cursor-pointer`}>
                        <div className="w-10 h-10">
                            <img src="assets/images/men-one.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                            <p className="text-sm">Randome{index}</p>
                            <p className="text-[13px] font-semibold text-green-700 hover:text-white">Online</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="pt-5 px-4 border-t border-gray-500 flex gap-4 items-center">
                <div className="bg-pink-300 w-fit px-3.5 py-2 rounded-full">
                    <strong className="font-semibold text-sm">M</strong>
                </div>
                <div>
                    <p className="text-sm">Randome</p>
                    <p className="text-[12px] font-semibold">Online</p>
                </div>
            </div>
        </div>
    )
}

export default ChatLeftSide