import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./views/Home"
import ProductDetails from "./views/ProductDetails"
import Products from "./views/Products"
import NotFound from "./views/NotFound"
import CategoryProduct from "./views/CategoryProduct"
import Cart from "./views/Cart"


const App = () => {

  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/categories/:name" element={<CategoryProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App