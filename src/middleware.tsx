// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Retrieve token from cookies
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    // If no token, redirect to login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Proceed to the requested page if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout", "/dashboard/:path*"],
};