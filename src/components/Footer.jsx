import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import Button from "./Button"
const Footer = ({myBtn}) => {
  const btn ={
    btnName:"Get Started"
  }

  return (
    <div className="bg-gray-900 text-white h-[70%] w-full ">
      <div className="relative h-28 w-full">
        <div className="bg-white text-black  w-[70%] h-28 rounded-xl p-4 mx-44  absolute top-[-3.5rem] grid grid-cols-6 border border-black mb-15">
          <div className="col-span-5">
            <h3 className="text-2xl">Ready to get started ?</h3>
            <h3>Talk to us today</h3>
          </div>
          <Button myBtn={btn} className="w-[25%] rounded-lg" />

          {/* <button className="bg-blue-600 hover:bg-blue-400 h-14 col-span-1">
            GET STARTED
          </button> */}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 p-2 w-[75%] pb-10 pt-0 mx-60">
        <div className="col-span-1">
          <h4>Shree Store</h4>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
            quisquam.
          </p>
        </div>
        <div className="flex flex-col w-60 col-span-1">
          <h4 className="mb-4">Subscribe to get important updates</h4>
          <input placeholder="YOUR E-MAIL" className="m-2 p-2 w-60"></input>
          <button className="bg-blue-600 hover:bg-blue-400 p-2 m-2 w-40">
            Subscribe
          </button>
        </div>
        <div className="col-span-1 ">
          <h4 className="">Follow Us</h4>
          <div className="flex flex-row mt-4">
            <RiYoutubeLine size={42} />
            <FaInstagram size={34} className="ml-5" />
          </div>
        </div>
        <div>
          <h4>Call Us</h4>
          <p className="mt-4"><a href="tel:">+91 1234567890</a></p>
        </div>
      </div>
      <hr></hr>
      <div className="grid grid-cols-6 mt-10">
        <p className="col-start-2">@{new Date().getFullYear()} ShreeStore.All Rights Reserved</p>
        <p className="col-start-5 ">PRIVACY POLICY TERMS & CONDITIONS</p>
      </div>
    </div>
  );
};

export default Footer;
