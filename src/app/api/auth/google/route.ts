import { NextResponse } from "next/server";

import { API_PATHS } from "@/api/API_PATHS";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function GET() {
  try {
    const response = await fetch(`${baseURL}${API_PATHS.auth.googleLogin}`, {
      method: "GET",
      credentials: "include",
      redirect: "manual",
    });

    return NextResponse.json(
      { redirectUrl: response.headers.get("location") },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
