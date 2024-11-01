import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const token = cookies().get("accessToken")?.value;

  if (!token) {
    // If no token, redirect to login page
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/checkout", "/dashboard/:path*"],
};
