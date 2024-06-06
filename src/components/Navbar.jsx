import { LOGO_IMG } from "./utils/constants";
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="bg-slate-900 w-full h-52 relative text-white ">
      <ul className=" grid grid-cols-7 gap-4 pt-6 text-2xl">
        <li className="cols-start-2 ">
          <img src={LOGO_IMG} alt="logo" className="h-20 w-20 p-2 m-2 " />
        </li>
        <li className="col-span-1 ">
          <h1 className="border-solid text-white">Shree Store</h1>
        </li>
        <li className="col-span-1 "><NavLink to="/">Home</NavLink></li>
        <li className="col-span-1 "><NavLink to="/">About</NavLink></li>
        <li className="col-span-1 "><NavLink to="/contact">Contact</NavLink></li>
        <li className="col-span-1 "><NavLink to="/">Products</NavLink></li>
        <li className="col-span-1 "><NavLink to="/">Cart</NavLink></li>

      </ul>
    </div>
  );
};

export default Navbar;
