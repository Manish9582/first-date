import ButtonComp from '../components/common/ButtonComp'
import HomeLoveJourny from '../components/arrays/HomeLoveJourny';
import FindFriendComp from '../components/common/FindFriendComp';
import DatingUiComp from '../components/common/DatingUiComp';


const Home = () => {
  const { LoveJuourny, LoveJuournyContaint } = HomeLoveJourny;

  return (
    <div>

      <div className='relative'>
        <div className="w-full h-[90vh] bg-[url('assets/images/Love_Front.jpg')] bg-center bg-cover">
          <div className="relative h-[100%] w-full bg-[rgba(0,0,0,0.3)]">
            <div className="text-center  absolute top-[70%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
              <div>
                <strong className="text-[45px] text-white">Go On Your First  Last Date</strong>
              </div>
              <div>
                <strong className="text-[22px] text-white">"Find your perfect match — where connections spark, and love begins."</strong>
              </div>
              <div className='mt-10 w-fit mx-auto'>
                <ButtonComp title={'Registation Now'} route={'/register'} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <DatingUiComp />
      </div>

      <div className='max-w-[1400px] mx-auto mb-14'>
        <div className='bg-red-600 text-white flex justify-between p-6 text-4xl rounded-t-xl'>
          <span>
            Perfect Match 🥰
          </span>
          <span>
            Love Journy 😘
          </span>
          <span>
            Couple Goal 😍
          </span>
        </div>
        <div className='bg-white rounded-b-xl p-14'>
          <div className='grid grid-cols-2 gap-10 items-center'>
            <div>
              <p className='text-6xl'>Where Chemistry Meets Compatibility</p>
              <div className='mt-10'>
                <ButtonComp title={'Registation Now'} route={'/register'} />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
              {LoveJuourny.map((data) =>
                <div key={data.id} className={`h-[200px] rounded-2xl ${data.id == 3 ? 'border border-gray-300' : ''}`}>
                  <img src={data.image} alt="" className='h-full w-full object-cover rounded-2xl' />
                </div>
              )}
            </div>
          </div>
          <div className='grid grid-cols-6 gap-8 mt-6'>
            {LoveJuournyContaint.map((data) =>

              <div key={data.id} className={`h-[200px] rounded-2xl ${data.id === 3 ? "border border-gray-300" : ""}`}>
                {data.image ? (
                  <img
                    src={data.image} alt={data.image} className="h-full w-full object-cover rounded-2xl" />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full border border-gray-300 rounded-2xl">
                    <p className="text-3xl text-rose-700 font-bold">{data.nubmer}</p>
                    <p className="text-gray-600 text-3xl text-center">{data.title}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>


      </div>

      <div className='mb-10'>
        <FindFriendComp />
      </div>
    </div>
  )
}

export default Home