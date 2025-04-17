import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { accessToken, refreshToken, accessTokenExp } = await req.json();

  if (!accessToken || !refreshToken) {
    return NextResponse.json({ error: "Missing token data" }, { status: 400 });
  }

  const response = NextResponse.json({ message: "Tokens set successfully" }, { status: 200 });

  // Используем accessTokenExp напрямую
  response.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(Number(accessTokenExp) * 1000),
    sameSite: "strict",
  });

  // Всё ещё нужно декодировать refreshToken, если нет refreshTokenExp
  const decodedRefreshToken = JSON.parse(
    Buffer.from(refreshToken.split(".")[1], "base64").toString()
  );

  response.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(decodedRefreshToken.exp * 1000),
    sameSite: "strict",
  });

  return response;
}