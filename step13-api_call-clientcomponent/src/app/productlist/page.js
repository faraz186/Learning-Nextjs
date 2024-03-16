"use client"     

import { useEffect, useState } from "react"    

export default function Product()      
{    
    const [product,setProduct] = useState([])
      
    useEffect(async ()=>{
        let data = await fetch("https://dummyjson.com/products");   
        data = await data.json();
        console.log(data.products);   
        setProduct(data.products);   
    })
    return(
        <>
            <h1>Product page</h1>   
            {   
                product.map((e,i)=>{     
                    return(
                        <div key={i}>
                            <h3>{e.title}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
