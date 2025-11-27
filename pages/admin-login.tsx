// pages/admin-login.tsx
import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import { supabase } from "src/lib/supabaseClient";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("fassil661@gmail.com"); // default for you
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // If already logged in, go straight to dashboard
    useEffect(() => {
        if (typeof window === "undefined") return;
        const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
        if (isLoggedIn) {
            router.replace("/admin/dashboard");
        }
    }, [router]);

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg(null);
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error || !data.session) {
                console.error("Login error:", error);
                setErrorMsg(error?.message || "Invalid login credentials.");
                return;
            }

            // ✅ Mark admin as logged in
            if (typeof window !== "undefined") {
                localStorage.setItem("isAdminLoggedIn", "true");
            }

            // ✅ Go to dashboard
            router.push("/admin/dashboard");
        } catch (err: any) {
            console.error(err);
            setErrorMsg("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Admin Login — Tsega Church</title>
            </Head>

            <Header />

            <main className="theme_container" style={{ padding: "80px 0" }}>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="admin-card">
                            <h1 style={{ fontSize: "1.8rem", marginBottom: 8 }}>Admin Area</h1>
                            <p style={{ marginBottom: 20, color: "#6b7280" }}>
                                Secure access for site administrators and ministry leaders.
                            </p>

                            <h2 style={{ marginBottom: 20, fontSize: "1.3rem" }}>Sign In</h2>

                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label className="admin-label">Email</label>
                                    <input
                                        type="email"
                                        className="admin-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="admin@tsegachurch.org"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="admin-label">Password</label>
                                    <input
                                        type="password"
                                        className="admin-input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="Your password"
                                    />
                                </div>

                                {errorMsg && (
                                    <p style={{ color: "#dc2626", fontSize: "0.9rem", marginBottom: 10 }}>
                                        {errorMsg}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="primary_btn-two w-100"
                                    disabled={loading}
                                >
                                    {loading ? "Signing in..." : "Sign In"}
                                </button>

                                <p
                                    style={{
                                        marginTop: 12,
                                        fontSize: "0.8rem",
                                        color: "#9ca3af",
                                        textAlign: "center",
                                    }}
                                >
                                    For authorized administrators only.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
