import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login | GEECN</title>
      </Head>

      <Header />

      <PageBanner pageName="Admin Area" pageTitle="Sign In" />

      <main style={{ padding: "60px 0", backgroundColor: "var(--bg-secondary)" }}>
        <div className="theme_container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div style={{
                backgroundColor: "var(--bg-color)",
                borderRadius: "12px",
                padding: "40px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                border: "1px solid var(--border-color)"
              }}>
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                  <h1 style={{ 
                    fontSize: "24px", 
                    fontWeight: "600", 
                    marginBottom: "8px",
                    color: "var(--text-color)"
                  }}>
                    Admin Login
                  </h1>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                    Sign in to access the admin panel
                  </p>
                </div>

                {error && (
                  <div style={{
                    padding: "12px",
                    backgroundColor: "#fee",
                    color: "#c33",
                    borderRadius: "8px",
                    marginBottom: "20px",
                    fontSize: "14px",
                    textAlign: "center"
                  }}>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "8px", 
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "var(--text-color)"
                    }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@geecn.org"
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid var(--border-color)",
                        borderRadius: "8px",
                        fontSize: "15px",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-color)"
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ 
                      display: "block", 
                      marginBottom: "8px", 
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "var(--text-color)"
                    }}>
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid var(--border-color)",
                        borderRadius: "8px",
                        fontSize: "15px",
                        backgroundColor: "var(--input-bg)",
                        color: "var(--text-color)"
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      padding: "14px",
                      backgroundColor: loading ? "#999" : "#6432c8",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "all 0.3s"
                    }}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                </form>

                <p style={{ 
                  marginTop: "24px", 
                  textAlign: "center", 
                  fontSize: "13px",
                  color: "var(--text-muted)"
                }}>
                  For password reset, contact the system administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
