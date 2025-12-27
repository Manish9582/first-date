import ButtonComp from "./ButtonComp"
import { FaArrowRight } from "react-icons/fa6";

const ChatuiComp = () => {
  return (
    <div>
      <div className='max-w-[1300px] mx-auto grid grid-cols-2 gap-14 items-center'>
        <div className='w-full h-[350px]'>
          <img src="assets/images/girls-chat.png " alt="" className='h-full w-full object-cover rounded-4xl' />
        </div>
        <div className='h-full'>
          <p className="text-rose-700 font-black">How Does</p>
          <p className="text-[35px] font-semibold">Chat Work</p>
          <p className="text-[14px] text-gray-400">This site lets you choose a partner and easily start chatting or building a connection with them.</p>
          <hr className="my-2 border" />
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Simple to use</p>
              <p>Just send a friend request first, and once they accept, you can start chatting</p>
            </div>
            <div className="bg-rose-500 p-3 rounded-[50%] rotate-45">
              <FaArrowRight />
            </div>
          </div>
          <hr className="my-2 border" />
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Samrt Matching</p>
              <p> based on their interests and preferences</p>
            </div>
            <div className="bg-rose-500 p-3 rounded-[50%] rotate-45">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-[1400px] grid grid-cols-12 mx-auto items-center h-[100%] px-8">
          <div className="col-start-1 col-end-5">
            <div>
              <p className="text-rose-500 font-medium">Chat Love Dating</p>
              <p className="text-[45px]">Where Love Begins, One Match At A Time</p>
              <p className="my-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point using Lorem ipsum.</p>
            </div>
            <div className="mt-5">
              <ButtonComp title={'Registation Now'} route={'/register'} />
            </div>
          </div>
          <div className="relative col-start-6 col-end-13">
            <div className="grid grid-cols-2 gap-10">
              <div className="bg-gradient-to-r from-purple-300 to-pink-200 h-[100%] rounded-lg">
                <img src='assets/images/boy-chat-start.png' alt="boy" className="w-[100%] h-[100%] object-cover" />
              </div>
              <div className="bg-gradient-to-r from-pink-300 to-purple-200 rounded-lg">
                <img src='assets/images/girls-chat-start.png' alt="girl" className="w-[100%] h-[100%] object-cover" />
              </div>
            </div>
            <div className="w-[100px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <img src='assets/images/chat-logo.png' alt="chat-logo" className="w-[100%] h-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatuiComp