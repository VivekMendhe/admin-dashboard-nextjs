import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

/**
 {
    "id": 11,
    "petId": 11,
    "quantity": 100,
    "shipDate": "2023-05-14T17:18:29.728Z",
    "status": "Taj Hotel",
    "complete": true
 }
 */
// http://localhost:3000/api/users
export async function POST(request) {
  let data = await request.json();
  console.log(data.id);

  // Check if any required field is missing
  if (
    !data.id ||
    !data.petId ||
    !data.quantity ||
    !data.shipDate ||
    !data.status ||
    data.complete === undefined
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 500 }
    );
  }

  // All required fields are present, return success response
  return NextResponse.json(data, { status: 201 });
}
