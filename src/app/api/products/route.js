// require("dotenv").config();
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import ProductModel from "@/models/product.model";
import DBConnection from "@/utils/db";

const url = process.env.MONGOOSE_URL;

DBConnection();

export async function GET(request, content) {
  const data = await ProductModel.find().exec();
  return NextResponse.json(data, { status: 200 });
}

/** 
export async function POST(request, content) {
  const data = new ProductModel({
    name: "Realme 5s",
    price: "9999",
    category: "Electronic",
    userId: "12345",
    company: "Realme",
  });
  await data.save();
  return NextResponse.json({ success: "Success", data }, { status: 201 });
}
*/

export async function POST(request, content) {
  try {
    const payload = await request.json();
    const data = new ProductModel(payload);
    await data.save();
    return NextResponse.json({ success: "Success", data }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
}
