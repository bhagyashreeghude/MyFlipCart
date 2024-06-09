import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white h-72 w-full">
      <div className="grid grid-cols-4 gap-3 mx-48   p-2 w-[75%]">
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
          <p className="mt-4">+91 1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
