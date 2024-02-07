import Categories from "../components/Categories";
import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import State from "../components/State";
import axios from "axios";
import { useState, useEffect } from "react";
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
      
      {
        products.length > 0 && <ProductCard products={products}/>
      }
      <State />
    </>
  );
};

export default Home;
