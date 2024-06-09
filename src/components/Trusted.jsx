import { TRUSTED_IMG_1, TRUSTED_IMG_2, TRUSTED_IMG_3, TRUSTED_IMG_4, TRUSTED_IMG_5 } from "./utils/constants"


const Trusted = () => {
  return (
    <div className="lg:ml-40 lg:my-10  ml-10 m-6">
      <h3 className="lg:text-3xl text-xl">Trusted By 1000+ Companies</h3>
      <div className="grid grid-cols-5 gap-5 lg:w-[83%]  my-10 bg-gray-200 relative h-24 pl-2 pt-2 w-full">
        <div className="col-span-1 w-20 h-20">
          <img src={TRUSTED_IMG_1} alt="tTRUSTED_IMG_1"  className="h-20 w-20"></img>
        </div>
        <div className="col-span-1 w-20 h-20">
          <img src={TRUSTED_IMG_5} alt="tTRUSTED_IMG_1" className="h-20 w-20"></img>
        </div>
        <div className="col-span-1 w-20 h-20">
          <img src={TRUSTED_IMG_2} alt="tTRUSTED_IMG_1" className="h-20 w-20"></img>
        </div>
        <div className="col-span-1 w-20 h-20">
          <img src={TRUSTED_IMG_3} alt="tTRUSTED_IMG_1" className="h-20 w-20"></img>
        </div>
        <div className="col-span-1 w-20 h-20">
          <img src={TRUSTED_IMG_4} alt="tTRUSTED_IMG_1" className="h-20 w-20"></img>
        </div>
      </div>
    </div>
  )
}

export default Trusted