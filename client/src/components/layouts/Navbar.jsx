import { NavLink } from 'react-router-dom'
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useState } from 'react';
import HeartIconComp from '../common/HeartIconComp';

const Navbar = () => {
  let NavList = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    }, {
      id: 2,
      title: 'Community',
      url: '/community'
    }, {
      id: 3,
      title: 'About',
      url: '/about'
    }, {
      id: 5,
      title: 'Study Time',
      url: '/study-time'
    }, {
      id: 4,
      title: 'Blog',
      url: '/blogs'
    }
  ]

  const [showSearchbar, setshowSearchbar] = useState(true)
  return (
    <div className='bg-white shadow-lg p-4'>
      <div className='max-w-[1400px] mx-auto lg:grid grid-cols-12'>
        <div className='col-start-1 col-end-1'>
          <HeartIconComp />
        </div>

        <div className=' col-start-8 relative col-end-13  lg:flex items-center justify-between font-sans font-semibold text-[16px] text-gray-800'>
          {NavList.map((data, index) =>
            <NavLink key={index} className="block lg:inline" to={data.url}>{data.title}</NavLink>
          )}

          <div className={`${showSearchbar ? 'hidden' : 'block'} absolute w-[300px] border border-gray-200  
          h-[40px] rounded-[5px] bg-white shadow-md top-16.5 right-0 transform ease-in`}>
            <input type="search" className='outline-none h-full w-full px-2' placeholder='Search person   . . . ' />
          </div>
          <div className='border lg:block hidden border-gray-600 h-5'></div>
          <BsFillSearchHeartFill className='text-lg cursor-pointer' onClick={() => setshowSearchbar(!showSearchbar)} />
          <div>
            <NavLink to={'/login'}>Login</NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar