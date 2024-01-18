import axios from "axios";
import cookie from "cookie";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  const basicAuth =
    "Basic " + Buffer.from(`${email}:${password}`).toString("base64");

  try {
    const response = await axios.get(`${process.env.API_URL}/api/login`, {
      headers: {
        Authorization: basicAuth,
      },
    });

    const accessToken = response.headers["authorization"];
    const serializedCookie = cookie.serialize("access", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
      path: "/",
    });
    const nextResponse = NextResponse.json(
      { data: response.data },
      { status: 200 }
    );
    nextResponse.headers.set("Set-Cookie", serializedCookie);

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
