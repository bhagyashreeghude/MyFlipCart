import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <div className="  ">
      <p className="lg:text-3xl lg:ml-40 m-6 text-xl ml-10">Our Feature Services</p>

      <div className="lg:ml-40 lg:my-10  lg:grid lg:grid-cols-3 lg:gap-2 lg:w-[75%] 
                      grid grid-cols-3 gap-2 m-6 ml-10">
        <div className="col-span-1 bg-gray-200 lg:p-2 rounded-full border border-black mb-2">
          <TbTruckDelivery className="lg:ml-40 ml-16" size={40} />
          <p className="text-center">Super fast and Free Delivery</p>
        </div>
        <div className="col-span-1 bg-gray-200 lg:p-2 rounded-full border border-black mb-2">
          <MdSecurity className="lg:ml-40 ml-16" size={35} />
          <p className="text-center p-1">Non-Contact Shipping</p>
        </div>
        <div className="col-span-1 bg-gray-200 lg:p-2 rounded-full border border-black mb-2">
          <GiReceiveMoney className="lg:ml-40 ml-16" size={40} />
          <p className="text-center">Money-back Gauranteed</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
