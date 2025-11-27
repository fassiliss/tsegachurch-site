// src/hooks/useAdminGuard.ts
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAdminGuard() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window === "undefined") return;
        const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

        if (!isLoggedIn) {
            router.replace("/admin-login");
        }
    }, [router]);
}
