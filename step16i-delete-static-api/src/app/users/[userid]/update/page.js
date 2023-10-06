"use client"

import { useEffect } from "react";

export default function Page({params})
{
    let id = params.userid;
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    // console.log(id);

    useEffect(()=>{

    },[])

    const getUserDetails = async ()=>{
        let data = await fetch("https://localhost:3000/users/" + id);
        data = await data.json()
        setName(data.result.name);
        setEmail(data.result.email);
        setAge(data.result.age);

    }

    const updateUser = async ()=>{
        let result = await fetch("http://localhost:3000/api/users"+id,{
            method:"PUT",
            body:JSON.stringify({name,age,email})
        });

        result = await result.json();
        if(result.success)
        {
            alert("user information updated...")
        }
        else{
            alert("please try again...")

        }
    }
    return(
        <div>
            <h1>Update User Details</h1>

            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name"/>
            <br />
            <br />

            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter age"/>
            <br />
            <br />

            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email"/>
            <br />
            <br />
            <button onClick={updateUser}>Update User </button>
        </div>
    )
}