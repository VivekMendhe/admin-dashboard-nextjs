import ProductModel from "@/models/product.model";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  try {
    const productId = content.params.productId;
    const filter = { _id: productId };
    let payload = await request.json();
    console.log(payload);

    const product = await ProductModel.findOneAndUpdate(filter, payload);

    return NextResponse.json({ id: productId, payload });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request, content) {
  const productId = content.params.productId;
  const filter = { _id: productId };
  const data = await ProductModel.findById(filter).exec();
  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(request, content) {
  const productId = content.params.productId;
  const filter = { _id: productId };
  const data = await ProductModel.findByIdAndDelete(filter);
  return NextResponse.json(
    { message: "Successfully Deleted!" },
    { status: 200 }
  );
}
