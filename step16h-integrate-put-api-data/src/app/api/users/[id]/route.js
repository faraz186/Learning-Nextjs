import { user } from "@/utils/db";      
import { NextResponse } from "next/server";

export function GET(request,content)
{
    // console.log(content.params.id);

    let userdata = user.filter((item)=>item.id == content.params.id)
    return NextResponse.json(userdata.length==0?{result:"No data found",success:false}:{result:userdata[0],success:true},{status:200})

    // return NextResponse.json(
    //     user,{status:200});
}


export async function PUT(request,content)
{
    let payload = await request.json();

    payload.id = content.params.id;
    // console.log(payload);

    if(!payload.id || !payload.name || !payload.age || !payload.email)
    {
        return NextResponse.json({result:"request data is not found..",success:false},{status:400});

    }

    return NextResponse.json({result:payload,success:true},{status:200});

}
