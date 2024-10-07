export default function User()  
{  
    return(
        <div>
            <h1 style={{textAlign:"center"}}>User Page</h1>
        </div>        
    )
}

export function generateMetadata(){  
    return{    
        title:"User page title",
        description:"User Page description"  
    }   
}  
