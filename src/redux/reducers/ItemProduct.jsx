import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from "../actions/productAction";


const ItemProduct=()=>{
    const dispatch=useDispatch()
    const productsData=useSelector(store=>store.productsData)
    const products=productsData.products

    useEffect(()=>{
        try{
            dispatch(fetchProducts())

        }
        catch(error){
            console.log('error in fetching data')
        }
    },[dispatch])
    return(
        <>
        {products && products.map((item,i)=>(
            <div key={i}>
                <h1>{item.title}</h1>
            </div>

        ))}
        </>
    )
        
    }


export default ItemProduct