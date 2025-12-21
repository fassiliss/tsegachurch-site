// src/components/ThemeToggle.tsx
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [dark, setDark] = useState(false);

    // Run only on client
    useEffect(() => {
        setMounted(true);

        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const isDark = saved ? saved === "dark" : prefersDark;

        document.documentElement.classList.toggle("dark-mode", isDark);
        setDark(isDark);
    }, []);

    const toggleTheme = () => {
        const isDark = !dark;
        document.documentElement.classList.toggle("dark-mode", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
        setDark(isDark);
    };

    // ⛔ Prevent hydration mismatch
    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
                background: "transparent",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
                borderRadius: "999px",
                padding: "6px 14px",
                cursor: "pointer",
                fontSize: "14px",
            }}
        >
            {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
