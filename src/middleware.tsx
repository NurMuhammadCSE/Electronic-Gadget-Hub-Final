// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode"; // Make sure jwt-decode is installed

// export function middleware(request: NextRequest) {
//   // Retrieve token from cookies
//   const token = request.cookies.get("auth-token")?.value;

//   if (!token) {
//     // If no token, redirect to login page
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   try {
//     // Decode the token
//     const userToken: any = jwtDecode(token);

//     // console.log("Decoded Token:", userToken);

//     // Proceed to the requested page if authenticated
//     return NextResponse.next();
//   } catch (error) {
//     console.log("Error decoding token:", error);
//   }
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/login', request.url))

  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    // If no token, redirect to login page
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/checkout", "/dashboard/:path*"],
};
