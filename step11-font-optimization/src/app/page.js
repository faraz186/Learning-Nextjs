import { Roboto } from "next/font/google"    
             
const roboto = Roboto({
  weight:"300",      
  subsets:["latin"],
  display:"swap"
})      

export default function Home()   
{
  return (  
   <>      
    <h1 className={roboto.className}>Font Optimization in Nextjs</h1>
   </>
  )  
}    
