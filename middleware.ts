// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;

//   // List all routes that require authentication
//   const protectedRoutes = ["/profile", '/dashboard'];

//   // Redirect to login if token is missing
//   if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
//     return NextResponse.redirect(new URL("/login", request.url));
  
//   }

//   return NextResponse.next();
// }

// // Apply middleware to the protected routes only
// export const config = {
//   matcher: ["/profile"],
// };


// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const adminToken = request.cookies.get("adminToken")?.value; // Check if the admin token exists

  // List all routes that require authentication
  const protectedRoutes = ["/profile"];
  const adminProtectedRoutes = ["/dashboard"];

  const pathname = request.nextUrl.pathname;

  // Check if route is for admin dashboard and if admin token is missing
  if (adminProtectedRoutes.includes(pathname) && !adminToken) {
    return NextResponse.redirect(new URL("/admin", request.url)); // Redirect to admin login if admin token missing
  }

  // Check if route requires general authentication and if token is missing
  if (protectedRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect ordinary users to /login if token missing
  }

  return NextResponse.next();
}

// Apply middleware to the protected routes only
export const config = {
  matcher: ["/profile", "/dashboard", "/admin"], // Specify all protected routes
};
