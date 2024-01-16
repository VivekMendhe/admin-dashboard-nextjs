import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");
    if (!file) {
      return NextResponse.json(
        { message: "No image found!", success: false },
        { status: 201 }
      );
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/images/${file.name}`;
    await writeFile(path, buffer);
    return NextResponse.json(
      { message: "Image Upload Successfully!", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
