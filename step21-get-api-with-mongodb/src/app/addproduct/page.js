"use client"
import { useState } from 'react'
import '../style.css'

export default function Page()
{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [color,setColor] = useState("");
    const [company,setCompany] = useState("");
    const [category,setCategory] = useState("");

    const addProduct = async ()=>{
        let result = await fetch("https://localhost:300/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,company,category})
        });
        result = await result.json();

        if(result.success)
        {
            alert("new product added...")
        }
    }
    return(
        <div>
            <h1>Add Product</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name.."/>

            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price.."/>

            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Enter Product color.."/>

            <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product company.."/>

            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product category.."/>

            <button onClick={addProduct}>ADD PRODUCT</button>

        </div>
    )
}