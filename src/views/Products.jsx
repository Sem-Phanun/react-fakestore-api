import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import FeatureCard from "../components/FeatureCard";
import Categories from "../components/Categories";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res.data;
    setProducts(data);
  };

  return (
    <>
      <Categories />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-indigo-500 tracking-widest font-medium title-font-mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR
        </h1>
      </div>
      <ProductCard products={products} />
    </>
  );
};

export default Products;
