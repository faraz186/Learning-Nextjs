import Image from 'next/image'      
import img from '../../public/vercel.svg'   
        
export default function Home() {
  return (        
    <>   
    <h1 style={{textAlign:"center"}}>Image Optimization in Nextjs</h1>   
   
    <br />   
    
    <h2 style={{textAlign:"center",textDecoration:"underline"}}>Online Image</h2>   
   
    <Image style={{marginLeft:"40%"}} src="https://images.unsplash.com/photo-1582807129843-8a00296ccb37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80" 
      width={400} height={250} />        

      <br />      
      <br />
      <br />

    <h2 style={{textAlign:"center",textDecoration:"underline"}}>Offline Image</h2>   
    
    <Image style={{marginLeft:"40%"}} src={img}    
    width={400} height={250} />
    </>
  )
}
