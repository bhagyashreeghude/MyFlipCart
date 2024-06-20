import { NavLink } from "react-router-dom";
import FormatPrice from "./helper/FormatPrice";
const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <>
      <NavLink to={`/singleproduct/:${id}`}></NavLink>
      <div className="w-1/5 ">
        <img src={image} alt={name}  className="w-52 hover:opacity-70"/>
        <div className="grid grid-cols-2  ">
          <h3 className="col-span-1 text-left">{category}</h3>
          <h2  className="col-span-1 text-left">{<FormatPrice price={price}/>}</h2>
        </div>
      </div>
    </>
  );
};

export default Product;
