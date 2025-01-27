// middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Example: Redirect user if not logged in
  //   const token = request.cookies.get("auth-token");

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/sign-up", request.url));
  }

  return NextResponse.next(); // Proceed with the request
}
