import { createContext, useContext, useEffect, useReducer } from "react";
// import { PRODUCTS_API } from "../utils/constants"
import axios from "axios";
import reducer from "../reducer/productReducer"
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  singleProduct :{},
};

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({type:"SET_LOADING"})
    try {
      const result = await axios.get(url);
      console.log(result);
      const products = await result.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  //my 2nd api call for single product
  const getSingleProduct =async(url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
      const result = await axios.get(url);
      console.log(result);
      const singleProduct = await result.data;
      console.log(singleProduct)
      dispatch({ type: "SET_SINGLE_PRODUCT_API", payload:  singleProduct });
    } catch (error){
      dispatch({type:"SET_SINGLE_ERROR"})
    }

  }

    
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state,getSingleProduct }}>{children}</AppContext.Provider>
  );
};
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
