import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Product from "./components/Product"
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/header" element={<Header/>}/> */}
            <Route path="/contact" element={<Contact/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/singleproduct/:id" element={<SingleProduct/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
