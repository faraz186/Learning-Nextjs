"use client";    
import { useRouter } from "next/navigation";    
         
export default function AboutStudent() {      
  const router = useRouter();       
         
  return (  
    <div style={{ textAlign: "center" }}>      
      <h1 style={{ textAlign: "center" }}>About Student Page</h1>  
      <br /> 
   
      <button onClick={() => router.push("/login")}>Go to Login Page</button>      

      <br />  
      <br />  
  
      <button onClick={() => router.push("/about")}>Go to About Page</button>  

      <br />
      <br />  
  
      <button onClick={() => router.push("/login/loginteacher")}>  
        Go to Login Teacher Page
      </button>   

      <br />
      <br />
      <button onClick={() => router.push("/about/aboutcollege")}>   
        Go to About College Page
      </button>
    </div>
  );
}
