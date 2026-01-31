import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // 1. Redirect logged-in users away from /login to /dashboard
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // 2. Define protected routes
  const protectedRoutes = ["/dashboard", "/projects", "/settings"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // 3. Redirect unauthenticated users to /login
  if (isProtectedRoute && !token) {
    const url = new URL("/login", req.url);
    url.searchParams.set("callbackUrl", encodeURI(pathname));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * 1. /api/auth/* (NextAuth internal routes)
     * 2. /_next/static (static files)
     * 3. /_next/image (image optimization files)
     * 4. favicon.ico, etc.
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
