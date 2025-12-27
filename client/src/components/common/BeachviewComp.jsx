import ButtonComp from "./ButtonComp"

const BeachviewComp = () => {
  return (
    <div className="bg-[url('assets/images/page-compo.jpg')] h-[60vh] w-full bg-no-repeat bg-cover">
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full relative">
        <div className="absolute top-[50%] left-[30%] transform translate-x-[-50%] translate-y-[-50%] text-white">
          <p className="font-semibold text-xl">Find Your clarity</p>
          <div className="my-3">
            <p className="text-4xl">Take A Chance  <br /> To Love and Be</p>
          </div>
          <div>
            <ButtonComp title={'Registation Now'} route={'/register'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeachviewComp