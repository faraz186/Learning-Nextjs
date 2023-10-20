import {NextResponse} from 'next/server';
import mongoose from "mongoose";
import {connectionSrt} from "@/lib/db"
import { Product } from '@/lib/model/products';

export async function PUT(request,content)
{
    const productId = content.params.productid;

    const filter = {_id:productId};

    const payload = await request.json();

    // console.log(payload);

    await mongoose.connect(connectionSrt);

    const result = await Product.findOneAndUpdate(filter,payload)
    // console.log(content);

    // const result = [];

    return NextResponse.json({result,success:true})
    
}

