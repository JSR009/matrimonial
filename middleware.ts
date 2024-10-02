// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for the admin in cookies
//   const isAdmin = request.cookies.has('isAdmin') && request.cookies.get('isAdmin') === 'true';

  // If the request is for the Dashboard and the user is not an admin
  if (request.nextUrl.pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ['/dashboard'], // Only apply middleware to the dashboard route
};
