import axios from "axios";
import cookie from "cookie";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, surnames, email, password } = await request.json();

  try {
    const response = await axios.post(`${process.env.API_URL}/api/register`, {
      name,
      surnames,
      email,
      password,
    });

    const nextResponse = NextResponse.json(
      { data: response.data },
      { status: 200 }
    );

    return nextResponse;
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
