"use client";     
import { useState } from "react";  
  
// if you are using events,state and hooks in Nextjs use "use client"
// assign on the top because all these things such as events and hooks are using in
// client side rendering and next js using server side rendering that's why we useclient..   
  
export default function Home() {
  const [name, setName] = useState("Faraz");

  const popUp = () => {  
    setName("Muhammad");  
  };      

  const PreviousPopUp = () => {
    setName("Faraz");
  };

  const randomPopUp = (message) => {   
    alert(message);
  };

  return (   
    <div>
      <h1>Hello, {name}</h1>   
  
      <button style={{ marginRight: 20 }} onClick={popUp}>   
        Change my name
      </button>  

      <button onClick={PreviousPopUp}>Change previous name</button>

      <br />
      <br />
      <br />

      <button onClick={() => randomPopUp("Welcome Muhammad Faraz")}>
        Click Random User
      </button>
    </div>
  );
}
