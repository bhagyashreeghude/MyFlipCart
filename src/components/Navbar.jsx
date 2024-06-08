import { LOGO_IMG } from "./utils/constants";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
// import { useState } from "react";
// import { CgMenu ,CgClose} from "react-icons/cg";

const Navbar = () => {
  // const [menu, setMenu] = useState();

  return (
    <div className="lg:bg-slate-900 w-full lg:h-30 lg:text-white cursor-pointer p-2 h-full  text-black lg:h-24">

      <ul className=" lg:grid lg:grid-cols-11 lg:gap-2 lg:text-2xl lg:mx-2 text-6xl    flex flex-col mx-28 w-full">
        <li className="cols-start-1 col-span-6  ">
          <img src={LOGO_IMG} alt="logo" className="lg:h-14 lg:w-16 h-0" />
          <h1 className="border-solid text-white">Shree Store</h1>
        </li>
        <li className="pt-4 mx-6 lg:pt-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className=" pt-6 mx-6 lg:pt-2">
          <NavLink to="/">About</NavLink>
        </li>
        <li className=" pt-6 mx-6 lg:pt-2">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="pt-6 mx-6 lg:pt-2">
          <NavLink to="/">Products</NavLink>
        </li>
        <li className="pt-6 mx-20 lg:pt-2">
          <NavLink to="/">
            <FaCartArrowDown className="" size={70} />
            <span className="">10</span>
          </NavLink>
        </li>
      </ul>

      {/* <!--2buttons for closing and opening menu for responsive design--> */}
      {/* <div className="">
        <CgMenu className="di"/>
        <CgClose className=""/>
      </div> */}
    </div>
  );
};

export default Navbar;
