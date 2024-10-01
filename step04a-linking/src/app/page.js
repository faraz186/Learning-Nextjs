import Link from "next/link";

export default function Home() {             
  return (           
    <div style={{ textAlign: "center" }}>         
     
      <h1 style={{ textAlign: "center" }}>Linking | Home Page</h1>       
      <br />       
  
      <Link href="/login">Go to Login Page</Link>    
  
      <br />    
      <br />     

      <Link href="/about">Go to About Page</Link>          
      
      <br />      
      <br />  
   
      <Link href="/login/loginstudent">Go to Login Student Page</Link>          

      <br />     
      <br />  

      <Link href="/about/aboutstudent">Go to About Student Page</Link>  
    </div>
  );
}
