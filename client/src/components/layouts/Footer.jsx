import ButtonComp from '../common/ButtonComp'
import { Link } from 'react-router-dom'
import HeartIconComp from '../common/HeartIconComp'


const Footer = () => {
    let ArrayFotter = [
        {
            id: 1,
            heading: 'Community',
            titles: [
                {
                    title: 'Guidelines',
                    route: '/gude-lines'
                }, {
                    title: 'Sucess Stories',
                    route: '/sucess-stories'
                }, {
                    title: 'The Blog',
                    route: '/blogs'
                }
            ]
        }, {
            id: 2,
            heading: 'Contact',
            titles: [
                {
                    title: 'Support',
                    route: '/support'
                }, {
                    title: 'Security',
                    route: '/security'
                }, {
                    title: 'Safty Tips',
                    route: '/safty-tips'
                }
            ]
        }, {
            id: 2,
            heading: 'Legal & Privicy',
            titles: [
                {
                    title: 'Terms & Service',
                    route: '/terms-services'
                }, {
                    title: 'Privacy Policy',
                    route: '/privacy-policy'
                }, {
                    title: 'Cookies Policy',
                    route: '/cookies'
                }
            ]
        }
    ]
    return (
        <div >
            <div className='bg-white pb-6 pt-10'>
                <div className='grid grid-cols-12 max-w-[1200px]  mx-auto mt-6'>
                    <div className='col-start-1 col-end-5'>
                        <div className=' mb-3'>
                            <strong className='text-4xl'>Are You For In The Gossipe ?</strong>
                        </div>
                        <div>
                            <HeartIconComp />
                        </div>
                        <p className='font-semibold text-gray-500 text-[14px] mt-3'>
                            This site is for individuals who live alone and are looking for meaningful ways to spend their time.
                            A space for solo souls to connect, unwind, and make the most of their alone time
                        </p>
                    </div>
                    <div className='col-start-6 col-end-13'>
                        <div className='flex gap-3 items-center border-b-2 border-rose-600 px-3 pb-2'>
                            <input type="text" placeholder='Enter your email' className='outline-none w-full' />
                            <div>
                                <ButtonComp route={'/login'} title={'Login'} />
                            </div>
                        </div>
                        <div className='flex mt-3 px-2 justify-between'>
                            {ArrayFotter.map((data, index) => {
                                return (
                                    <div key={index} className='w-fit'>
                                        <strong className='font-semibold text-black text-[16px]'>{data.heading}</strong>
                                        <div>
                                            {data.titles.map((item, indexnum) =>
                                                <div className='font-light text-[15px] mt-1' key={indexnum}>
                                                    <Link key={indexnum} to={item.route}>{item.title}</Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center bg-black text-white/70 py-3 text-[14px]'>
                <p>All rights reserved &#xA9; {new Date().getFullYear()} First And Last Date .</p>
            </div>
        </div>
    )
}

export default Footer