// pages/admin/index.tsx
import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

export default function AdminLogin() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setIsLoading(false);

        if (error) {
            console.error("Supabase login error:", error);
            setError(error.message); // show on the page
            return;
        }

        // success → redirect
        router.push("/admin/dashboard");
    };


    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "12px 14px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        fontSize: "1rem",
    };

    const cardStyle: React.CSSProperties = {
        maxWidth: "420px",
        margin: "0 auto",
        background: "#ffffff",
        borderRadius: "16px",
        padding: "30px 28px",
        boxShadow: "0 12px 35px rgba(15, 23, 42, 0.12)",
    };

    return (
        <>
            <Head>
                <title>Admin Login — Tsega Church</title>
            </Head>

            <Header />

            <PageBanner
                pageName="Login Area"
                pageTitle="Login Area"

            />



            {/* Login Card */}
            <main style={{ padding: "60px 0" }}>
                <div className="theme_container">
                    <div style={cardStyle}>
                        <h2
                            style={{
                                fontSize: "1.6rem",
                                fontWeight: 700,
                                marginBottom: "18px",
                                textAlign: "center",
                            }}
                        >
                            Admin Login
                        </h2>
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "0.95rem",
                                color: "#6b7280",
                                marginBottom: "22px",
                            }}
                        >
                            Please sign in with your administrator credentials.
                        </p>

                        {error && (
                            <div
                                style={{
                                    background: "#fde2e1",
                                    border: "1px solid #fca5a5",
                                    color: "#b91c1c",
                                    padding: "10px 12px",
                                    borderRadius: "8px",
                                    marginBottom: "16px",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {error}
                            </div>
                        )}

                        {success && (
                            <div
                                style={{
                                    background: "#dcfce7",
                                    border: "1px solid #22c55e",
                                    color: "#166534",
                                    padding: "10px 12px",
                                    borderRadius: "8px",
                                    marginBottom: "16px",
                                    fontSize: "0.9rem",
                                }}
                            >
                                ✅ Login successful (demo). You can now redirect to a dashboard.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label
                                    style={{
                                        display: "block",
                                        marginBottom: "6px",
                                        fontWeight: 600,
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                    placeholder="admin@tsegachurch.org"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    style={{
                                        display: "block",
                                        marginBottom: "6px",
                                        fontWeight: 600,
                                    }}
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="primary_btn-two"
                                style={{
                                    width: "100%",
                                    padding: "12px 18px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                }}
                            >
                                {submitting ? "Signing in..." : "Sign In"}
                            </button>

                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#9ca3af",
                                    marginTop: "14px",
                                    textAlign: "center",
                                }}
                            >
                                For authorized administrators only.
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Small helper styles for mobile-link reuse if needed */}
            <style jsx global>{`
        .mobile-link {
          display: flex;
          align-items: center;
          padding: 14px 16px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-primary, #111827);
          text-decoration: none;
          font-weight: 600;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .mobile-link:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }
      `}</style>
        </>
    );
}
