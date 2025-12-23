import React from 'react'
import ButtonComp from '../components/common/ButtonComp'
import { PiSealCheckBold } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TbWorldHeart } from "react-icons/tb";
import { BsPersonHearts } from "react-icons/bs";
import { MdOutlineFilterVintage } from "react-icons/md";


const Home = () => {
  return (
    <div>

      <div className='relative'>
        <div className='w-full h-[89vh]' id='HomebgImage'>
          <div className="relative h-[100%] w-full bg-[rgba(0,0,0,0.3)]">
            <div className="text-center  absolute top-[70%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <div>
                <strong className="text-[45px] text-white">Go On Your First  Last Date</strong>
              </div>
              <div>
                <strong className="text-[22px] text-white">"Find your perfect match — where connections spark, and love begins."</strong>
              </div>
              <div className='mt-10'>
                <ButtonComp title={'Registation Now'} route={'/register'} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto gap-12 my-12'>
        <div className='grid grid-cols-2 items-center '>
          <div>
            <strong className='text-6xl'>Connecting Hearts, One Swipe  At  A Time</strong>
            <div className='my-2 text-gray-600'>
              <p>It is a long establish fact at the reader will be distraced  by the readable content of a page when looking at its layout. The point of using  lorem ipsum is that it has</p>
            </div>
            <div className='mt-3'>
              <div className='flex gap-4 items-center'>
                <PiSealCheckBold className='text-rose-700' /><p>Provide Deeper Matching Insight</p>
              </div>
              <div className='flex gap-4 items-center'>
                <PiSealCheckBold className='text-rose-700' /> <p> Verfy to Increase Trust</p>
              </div>
            </div>
          </div>
          <div >
            <img src="assets/images/first-date.jpeg" alt="first-date" className='rounded-2xl' />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-10 mt-14">
            <div className="text-center bg-white py-9 px-6 rounded-xl">
              <div className=" w-[fit-content] rounded-[50%] mx-auto border-2 p-6 bg-red-500 text-white">
                <p className="text-[35px]">
                  <FaHandHoldingHeart />
                </p>
              </div>
              <div className="text-[22px] font-bold mt-4">Emotional Intimacy</div>
              <div className="text-[13px] text-center mt-2">Emotional intimacy is the deep connection where two hearts feel safe to be fully seen, heard, and understood.</div>
            </div>
            <div className="text-center bg-white py-9 px-6 rounded-xl">
              <div className=" w-[fit-content] rounded-[50%] mx-auto border-2 p-6 bg-red-500 text-white">
                <p className="text-[35px]">
                  <TbWorldHeart />
                </p>
              </div>
              <div className="text-[22px] font-bold mt-4">Social Interaction</div>
              <div className="text-[13px] text-center mt-2">Social interaction is the dynamic exchange of thoughts, feelings, and behaviors between individuals or groups in a shared social space.</div>
            </div>
            <div className="text-center bg-white py-9 px-6 rounded-xl">
              <div className=" w-[fit-content] rounded-[50%] mx-auto border-2 p-6 bg-red-500 text-white">
                <p className="text-[35px]">
                  <MdOutlineFilterVintage />
                </p>
              </div>
              <div className="text-[22px] font-bold mt-4">Rapid Filtering</div>
              <div className="text-[13px] text-center mt-2">Rapid filtering is the quick process of sifting through information or stimuli to identify what's relevant or important in a given context.</div>
            </div>
            <div className="text-center bg-white py-9 px-6 rounded-xl">
              <div className=" w-[fit-content] rounded-[50%] mx-auto border-2 p-6 bg-red-500 text-white">
                <p className="text-[35px]">
                  <BsPersonHearts />
                </p>
              </div>
              <div className="text-[22px] font-bold mt-4">Mutual Interest</div>
              <div className="text-[13px] text-center mt-2">Mutual interest is a shared curiosity or passion between individuals that fosters connection and engagement.</div>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Home