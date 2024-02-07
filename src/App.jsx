import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./views/Home"
import { Route, Routes } from "react-router-dom"
import ProductDetails from "./views/ProductDetails"


const App = () => {

  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App