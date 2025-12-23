import React from 'react'

const HeartIcon = () => {
    return (
        <div>
            <a href='/' className='flex items-center'>
                <div className='font-semibold text-sm'>
                    <p className='text-nowrap'>First And</p>
                    <p className='text-nowrap'>Last Date</p>
                </div>
                <div className='w-5 h-5 rotate-90'>
                    <img src="assets/images/Heart-icon.png" />
                </div>
            </a>
        </div>
    )
}

export default HeartIcon