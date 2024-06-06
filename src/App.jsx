import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/singleproduct/:id" element={<SingleProduct/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
