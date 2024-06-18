export default function Home() {  
  return (   
         
    <div style={{textAlign:"center"}}>
        
      <h1 style={{textDecoration:"underline"}}>Props</h1>  
  
      <br />
      <User name="Muhammad Faraz"/>
      <br />
   
      <User name="Ali Ahmed"/>
      <br />
  
      <User name="Kashif Abbas"/>
      <br />  

      <User name="Muhammad Shabbir "/>
      <br />
  
    </div>
  )
}

const User = (props) =>{
  return(
    <div>
        <h1>Hello I am <span style={{color:"blue"}}>{props.name}</span></h1>
    </div>
  )
}

