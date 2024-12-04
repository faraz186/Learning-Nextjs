"use client"    
import { useState } from "react"
  
export default function Page()
{   
    const [name,setName] = useState("");      
    const [age,setAge] = useState("");  
    const [email,setEmail] = useState("");

    const addUser = async ()=>{
        let response = await fetch("http://localhost:3000/api/users",{      
            method:"Post",  
            body:JSON.stringify({name,age,email})    
        })  
        response = await response.json();
        if(response.success)
        {  
            alert("new user added..")    
        }
        else{
            alert("some error issues...")
        }
        console.log(response)
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Add new User</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name"/>
            <br />
            <br />

            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter age"/>
            <br />
            <br />

            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email"/>
            <br />
            <br />
            <button onClick={addUser}>Add user</button>
        </div>
    )

} 
