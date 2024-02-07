import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"


const CategoryProduct = () => {
    const { name } = useParams()
    const [cateogry, setCategory] = useState([])

    useEffect(()=> {
        getCatogry()
    },[])

    const getCatogry = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/category/${name}`)
        const data = res.data
        setCategory(data)
    }
  return (
    <ProductCard products={cateogry}/>
  )
}

export default CategoryProduct