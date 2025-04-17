import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { checkLogin } from "@/api/auth/auth";
import { refreshAccessToken } from "@/api/token/token";

export async function GET() {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const refreshToken = cookiesStore.get("refreshToken")?.value;

  if (!accessToken && !refreshToken) {
    return NextResponse.json({ isAuth: false }, { status: 401 });
  }

  try {
    const userResponse = await checkLogin(accessToken!);
    if (userResponse?.data) {
      return NextResponse.json({ isAuth: true, user: userResponse.data }, { status: 200 });
    }

    if (!refreshToken) {
      return NextResponse.json({ isAuth: false }, { status: 401 });
    }

    const refreshResponse = await refreshAccessToken(refreshToken);
    if (!refreshResponse?.data?.accessToken) {
      return NextResponse.json({ isAuth: false }, { status: 401 });
    }

    const newAccessToken = refreshResponse.data.accessToken;

    const responseWithCookies = NextResponse.json({ isAuth: true, user: userResponse?.data }, { status: 200 });

    responseWithCookies.cookies.set("accessToken", newAccessToken, { httpOnly: true });

    return responseWithCookies;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ isAuth: false, error: "Internal server error" }, { status: 500 });
  }
}
