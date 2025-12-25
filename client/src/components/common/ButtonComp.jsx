import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComp = ({ title, route }) => {
    return (
        <div className='relative w-fit'>
            <Link to={route}>
                <div className="mx-auto text-white bg-gradient-to-r from-rose-400 to-rose-500 h-[100%] px-3 py-2 rounded-full w-[fit-content]">
                    {title}
                </div>
                <div className='w-7 h-7 absolute top-[-13px] right-[-5px]'>
                    <img src="assets/images/Heart-icon.png" />
                </div>
            </Link>
        </div>
    )
}

export default ButtonComp