// src/components/ThemeToggle.tsx
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      className="btn btn-sm btn-outline-light theme-toggle"
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        position: "relative",
        width: "40px",
        height: "40px",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {darkMode ? (
        <i className="fas fa-sun" style={{ fontSize: "18px" }} />
      ) : (
        <i className="fas fa-moon" style={{ fontSize: "18px" }} />
      )}
    </button>
  );
}
