import Categories from "../components/Categories";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductLoading from "../components/ProductLoading";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProudcts();
  }, []);

  const getAllProudcts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res.data
    setProducts(data);
  };
  return (
    <>
      <Hero />
      <Categories/>

      <h1 className="text-center font-light text-6xl">Product</h1>
      {
        products.length > 0 ? 
        <ProductCard products={products}/>
        : 
        <ProductLoading/>
      }
    </>
  );
};

export default Home;
