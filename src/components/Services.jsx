import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <div className="  ">
      <p>Our Feature Services</p>

      <div className="  ml-40 my-10  grid grid-cols-3 gap-2 w-[70%]">
        <div className="col-span-1 bg-gray-200 p-2">
          <TbTruckDelivery className="ml-16" size={40} />
          <p>Super fast and Free Delivery</p>
        </div>
        <div className="col-span-1 bg-gray-200">
        <MdSecurity className="ml-16" size={40} />
          <p>Non-Contact Shipping</p>
        </div>
        <div className="col-span-1 bg-gray-200 rounded-full ">
          <GiReceiveMoney className="ml-16" size={40} />
          <p>Money-back Gauranteed</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
