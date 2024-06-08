import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <div className="  ">
      <p className="text-3xl ml-40">Our Feature Services</p>

      <div className="ml-40 my-10  grid grid-cols-3 gap-2 w-[60%]">
        <div className="col-span-1 bg-gray-200 p-2 rounded-full border border-black">
          <TbTruckDelivery className="ml-28 " size={40} />
          <p className="text-center">Super fast and Free Delivery</p>
        </div>
        <div className="col-span-1 bg-gray-200 p-2 rounded-full border border-black">
          <MdSecurity className="ml-32" size={35} />
          <p className="text-center p-1">Non-Contact Shipping</p>
        </div>
        <div className="col-span-1 bg-gray-200 p-2 rounded-full border border-black ">
          <GiReceiveMoney className="ml-28" size={40} />
          <p className="text-center">Money-back Gauranteed</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
