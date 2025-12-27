import Beachview from '../components/common/BeachviewComp'

import ChatuiComp from '../components/common/ChatuiComp'
import FindFriendComp from '../components/common/FindFriendComp'

const Community = () => {
  return (
    <div>
      <Beachview />

      <div className='my-14'>
        <FindFriendComp />
      </div>

      <div>
        <ChatuiComp />
      </div>

      <div className='bg-white py-6 mb-8'>
        <div className='grid grid-cols-2 gap-10 items-center max-w-[1400px] mx-auto'>
          <div>
            <p className='font-semibold text-2xl mb-4'>What Says Costumer About Us</p>
            <p>Founded in 2025 by Manish, our platform is a modern dating website designed to help people connect in a simple, safe,
              and exciting way. We believe that meaningful connections can happen anywhere, even between complete strangers.
              Our website allows users to chat with random people, discover new profiles, and easily sort users based on their
              preferences. Whether you’re looking for a casual conversation, new friendships, or something more meaningful, our
              platform creates opportunities to meet people beyond your usual circle.
            </p>
          </div>
          <div>
            <img src="assets/images/map.jpg" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Community