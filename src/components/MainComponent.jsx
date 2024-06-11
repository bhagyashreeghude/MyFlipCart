import { SHOPPING_IMG } from "./utils/constants";

const MainComponent = (props) => { 
  const {name}  = props
  return (
    <div>
      <div className="lg:flex lg:flex-row lg:w-[75%] lg:ml-40 lg:my-10 border-8 border-solid 
                      ml-10 w-full ">
        <div>
          <p>Welcome to </p>
          <h1 className="lg:text-6xl text-2xl ">{name}!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quae ab officiis aspernatur, soluta dolorem?
          </p>
          <button className="bg-blue-500 hover:bg-blue-300 p-2 m-2 rounded-lg ">Shop Now</button>
        </div>
        <div>
          <img src={SHOPPING_IMG} alt="shoppingImg" className="lg:h-56 lg:w-96 w-full h-72"></img>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
