import Link from "next/link";              
  
export default function Home()           
{  
  return (        
  
    <div style={{marginLeft:"32%"}}>            
  
      <h1>API Calling with Server Component</h1>         

      <Link style={{marginLeft:"15%"}} href="/productlist">Go to Product List</Link>      
       
    </div>
  )   
}  
