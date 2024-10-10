/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode"; // Make sure jwt-decode is installed

export function middleware(request: NextRequest) {
  // Retrieve token from cookies
  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    // If no token, redirect to login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Decode the token
    const userToken: any = jwtDecode(token);

    // console.log("Decoded Token:", userToken);

    // Check if userId exists (basic validation)
    if (!userToken.userId) {
      console.log("No valid userId in token");
      return logoutUser(request);
    }

    // Proceed to the requested page if authenticated
    return NextResponse.next();
  } catch (error) {
    console.log("Error decoding token:", error);
    return logoutUser(request);
  }
}

// Function to log out the user by clearing the auth-token cookie and redirecting to the login page
function logoutUser(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.set("auth-token", "", { maxAge: 0 }); // Clear the token
  return response;
}

export const config = {
  matcher: ["/checkout", "/dashboard/:path*"], // Apply middleware to these routes
};
