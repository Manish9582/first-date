import ChatLeftSide from "./ChatLeftSide"
import ChatRigthSide from "./ChatRigthSide"

const ChatMessage = () => {
  return (
    <div className='w-full grid grid-cols-12 h-[100vh]'>
      <div className='col-span-3 border-r border-gray-500 bg-pink-100'>
        <ChatLeftSide />
      </div>
      <div className='col-span-9 h-[100vh] overflow-y-auto'>
        <ChatRigthSide />
      </div>
    </div>
  )
}

export default ChatMessage