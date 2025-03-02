import { NextResponse } from "next/server";         

export function GET(request) {
  return NextResponse.json(
    {
      name: "Faraz",
      age: 22,
      email: "faraz@gmail.com",
    },
    { status: 201 }
  );
}
