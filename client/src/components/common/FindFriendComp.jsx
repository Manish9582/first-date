import React from 'react'

const FindFriendComp = () => {
  let ImageCate = [
    {
      id: 1,
      image: 'assets/images/every-one.jpg',
      title: 'Every one'
    }, {
      id: 2,
      image: 'assets/images/women.jpg',
      title: 'Women'
    }, {
      id: 3,
      image: 'assets/images/men.jpg',
      title: 'Men'
    }, {
      id: 4,
      image: 'assets/images/others.jpg',
      title: 'Others'
    }
  ]
  return (
    <div>
      <div className='text-center'>
        <p className='text-4xl font-semibold'>Find Your Match</p>
        <p className='my-3'>Here find your perfect parnter that you like</p>
        <div className='max-w-[600px] flex justify-between mx-auto mt-3'>
          {ImageCate.map((data) =>
            <div className='relative w-[120px] h-[120px] border-4 border-red-700  rounded-full' key={data.id}>
              <img src={data.image} alt={data.image} className='w-full h-full object-cover  rounded-full' />
              <p className='text-white absolute top-[50%] left-[50%] text-nowrap font-semibold transform translate-x-[-50%] translate-y-[-50%]'>
                {data.title}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FindFriendComp