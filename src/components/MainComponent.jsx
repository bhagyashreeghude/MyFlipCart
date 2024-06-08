import { SHOPPING_IMG } from "./utils/constants";

const MainComponent = ({myData}) => { 
  const {name}  = myData
  return (
    <div>
      <div className="flex flex-row w-[75%] ml-40 my-10 border-8 border-solid ">
        <div>
          <p>Welcome to </p>
          <h1 className="text-6xl">{name}!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quae ab officiis aspernatur, soluta dolorem?
          </p>
          <button className="bg-blue-500 hover:bg-blue-300 p-2 m-2 rounded-lg ">Shop Now</button>
        </div>
        <div>
          <img src={SHOPPING_IMG} alt="shoppingImg" className="h-56 w-96"></img>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
