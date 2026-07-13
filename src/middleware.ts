import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
    const isLoginRoute = req.nextUrl.pathname === "/admin/login";

    if (isAdminRoute && !isLoginRoute && !isAuth) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    if (isLoginRoute && isAuth) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true, // handled manually in code block
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
