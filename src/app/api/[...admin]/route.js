import { NextResponse } from "next/server";
export async function GET(request, content) {
  const data = content.params.admin;
  return NextResponse.json({ result: data });
}
