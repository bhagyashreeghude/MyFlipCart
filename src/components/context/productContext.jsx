import { createContext ,useContext, useEffect } from "react"
import { PRODUCTS_API } from "../utils/constants"
import axios from "axios"

const AppContext = createContext()

const API="https://api.pujakaitem.com/api/products"

const AppProvider = ({children}) =>{

    const getProducts =async(url)=>{
        const result = await axios.get(url);
        console.log(result)
        const products = await result.data

    }
    useEffect (()=>{
        getProducts(API)
    },[])



    return (
        <AppContext.Provider value={{myName: "Shree"}}>
            {children}
        </AppContext.Provider>
    )
}
const useProductContext =()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext,useProductContext} ;