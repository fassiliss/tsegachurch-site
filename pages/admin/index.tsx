// pages/admin/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AdminIndex() {
    const router = useRouter();

    useEffect(() => {
        // When someone goes to /admin, send them to the main dashboard
        router.replace("/admin/dashboard");
    }, [router]);

    // You can return a tiny fallback if you like
    return null;
}
