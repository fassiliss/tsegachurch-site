import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    authorized: ({ token, req }) => {
      const { pathname } = req.nextUrl;

      // allow the login page itself
      if (pathname.startsWith("/admin/login")) return true;

      // everything else under /admin requires login
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
