import { user } from "@/utils/db";    
import { NextResponse } from "next/server";  

export function GET(request,content)  
{    
    console.log(content.params.id);    
   
    let userdata = user.filter((item)=>item.id == content.params.id)  
    return NextResponse.json(userdata.length==0?{result:"No data found",success:false}:{result:userdata[0],success:true},{status:200})

    return NextResponse.json(  
        user,{status:200});  
}        
