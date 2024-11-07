import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // List all routes that require authentication
  const protectedRoutes = ["/profile", '/dashboard'];

  // Redirect to login if token is missing
  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  
  }

  return NextResponse.next();
}

// Apply middleware to the protected routes only
export const config = {
  matcher: ["/profile"],
};
