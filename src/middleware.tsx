// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import {jwtDecode} from "jwt-decode";

// // Define the shape of your decoded token (optional)
// interface DecodedToken {
//   email?: string;
//   exp?: number;
// }

// export function middleware(request: NextRequest) {
//   // Retrieve token from cookies
//   const token = request.cookies.get("auth-token")?.value;

//   if (!token) {
//     // If no token, redirect to login page
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   try {
//     // Decode the token to check if the email exists
//     const decoded: DecodedToken = jwtDecode(token);

//     // Check if email exists in the decoded token
//     if (!decoded?.email) {
//       // If no email in token, redirect to login
//       return NextResponse.redirect(new URL("/login", request.url));
//     }

//   // Proceed to the requested page if authenticated
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/checkout", "/dashboard/:path*"],
// };

//! Last
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

// Define the shape of your decoded token (optional)
interface DecodedToken {
  email?: string;
  exp?: number;
}

export function middleware(request: NextRequest) {
  // Retrieve token from cookies
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    // If no token, redirect to login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Decode the token to check if the email exists
    const decoded: DecodedToken = jwtDecode(token);

    // Check if email exists in the decoded token
    if (!decoded?.email) {
      // If no email in token, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Optionally, you can check for token expiration (exp is in seconds)
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < currentTime) {
      // If token is expired, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // If email exists and token is not expired, proceed to the requested page
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token:", error);

    // If the token is invalid, redirect to login page
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/checkout", "/dashboard/:path*"],
};

// export { default } from "next-auth/middleware"

// export const config = { matcher: ["/checkout", "/dashboard/:path*"] }

// middleware.ts

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// // Custom middleware function
// export async function middleware(request: NextRequest) {
//   // Retrieve token from cookies (for credential login)
//   const token = request.cookies.get("auth-token")?.value;

//   // Retrieve token from next-auth (JWT or session)
//   const sessionToken = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

//   // If neither custom token nor session token is available, redirect to login
//   if (!token && !sessionToken) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   // Proceed to the requested page if authenticated
//   return NextResponse.next();
// }

// // Configuring which routes require authentication
// export const config = {
//   matcher: ["/checkout", "/dashboard/:path*"],
// };
