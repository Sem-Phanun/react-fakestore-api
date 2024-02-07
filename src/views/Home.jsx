import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import Proudct from "../components/Proudct";
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
    console.log(data)
  };
  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-indigo-500 tracking-widest font-medium title-font-mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR
        </h1>
      </div>
      {
        products.length > 0 && <Proudct products={products}/>
      }
      <FeatureCard />
      <State />
    </>
  );
};

export default Home;
