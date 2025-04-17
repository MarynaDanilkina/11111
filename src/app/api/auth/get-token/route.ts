import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const refreshToken = cookiesStore.get("refreshToken")?.value;

  if (!accessToken || !refreshToken) {
    return NextResponse.json(
      { error: "Tokens not found in cookies" },
      { status: 400 }
    );
  }

  return NextResponse.json({ accessToken, refreshToken }, { status: 200 });
}
