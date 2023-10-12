import {NextResponse} from 'next/server';
import mongoose from "mongoose";
import {connectionSrt} from "@/lib/db"
import { Product } from '@/lib/model/products';

export async function GET()
{
    let data = [];
    try{
        await mongoose.connect(connectionSrt);
        data = await Product.find();
    }
    catch(err){
        data={success:false}
    }

    return NextResponse.json({result:data,success:true})
}