import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  //   const data = user;
  //   console.log(data, content.params.userId);
  const response = user.filter((item) => item.id === content.params.userId);
  // console.log(response);

  return NextResponse.json(
    response.length == 0
      ? { message: "No Data Found!", status: 404 }
      : response,
    { status: 200 }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();
  console.log(payload);
  // let id = content.params.userId;
  payload.id = content.params.userId;
  return NextResponse.json({ result: payload });
}

export function DELETE(request, content) {
  let id = content.params.userId;
  if (id) {
    return NextResponse.json({ result: "User Deleted" }, { status: 200 });
  } else {
    return NextResponse.json({ result: "User is not found" }, { status: 204 });
  }
}
