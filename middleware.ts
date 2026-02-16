import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/admin/login" },
  callbacks: {
    authorized: ({ token, req }) => {
      const { pathname } = req.nextUrl;

      // allow login page
      if (pathname.startsWith("/admin/login")) return true;

      // everything else under /admin requires login
      if (!token) return false;

      const role = (token as any)?.role;

      // must be admin or super_admin to access /admin
      if (role !== "admin" && role !== "super_admin") return false;

      // super_admin only section
      if (pathname.startsWith("/admin/admins")) {
        return role === "super_admin";
      }

      return true;
    },
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
