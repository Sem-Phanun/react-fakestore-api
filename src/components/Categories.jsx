import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import FeatureCard from "./FeatureCard"

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        getCategories()
    },[])

    const getCategories = async () => {
        const res = await axios.get("https://fakestoreapi.com/products/categories")
        const data = res.data

        setCategories(data)
    }
  return (
    <>
        <FeatureCard cards={categories}/>
        <ProductCard/>
    </>
  )
}

export default Categories