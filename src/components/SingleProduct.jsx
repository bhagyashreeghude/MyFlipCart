import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  console.log(getSingleProduct);

  const { id } = useParams();
  console.log(id);
  

  // console.log(featureProducts?.[0]?.id)

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading...1</div>;
  }

  const { id:shree,name, company, price, description, category, stock, stars, reviews } =
    singleProduct ;
    console.log(name)
    console.log(company)
  return (
    <div>
      {id  }
      {name}
      <h1>{name}</h1>
      <p>Company: {company}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Stock: {stock}</p>
      <p>Stars: {stars}</p>
      <p>Reviews: {reviews}</p>
    </div>
  );
};

export default SingleProduct;
