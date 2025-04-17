import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookiesStore = await cookies();

  cookiesStore.set("accessToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0),
    sameSite: "lax",
  });

  cookiesStore.set("refreshToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0),
    sameSite: "lax",
  });

  return NextResponse.json(
    { message: "Tokens removed successfully" },
    { status: 200 }
  );
}
