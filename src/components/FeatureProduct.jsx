import { useProductContext } from "./context/productContext";
// import ProductReducer from "./reducer/productReducer";
import Product from "./Product";
const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts);
  console.log(isLoading);

  if (isLoading) {
    return <div>.....Loading</div>;
  }
  return (
    <>
      <div className="bg-gray-100 p-2 m-2 ">
        <h1 className="text-3xl ml-40">Our Feature Services</h1>
        <div className="text-center pt-6">
          <div className="flex flex-wrap gap-5  ml-80 text-center">
            {featureProducts.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
