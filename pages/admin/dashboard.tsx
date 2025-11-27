// pages/admin/dashboard.tsx
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import { supabase } from "src/lib/supabaseClient";
import { useAdminGuard } from "src/hooks/useAdminGuard";
import PageBanner from "@/src/components/PageBanner";

export default function AdminDashboard() {
    useAdminGuard();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
        } catch (err) {
            console.error("Supabase signOut error:", err);
        }
        if (typeof window !== "undefined") {
            localStorage.removeItem("isAdminLoggedIn");
        }
        router.push("/admin-login");
    };

    return (
        <>
            <Head>
                <title>Admin Dashboard — Tsega Church</title>
            </Head>

            <Header />

            <PageBanner
                pageName="Admin Area"
                pageTitle="Protected Admin Area "

            />



            <main style={{ padding: "40px 0 60px" }}>
                <div className="theme_container">
                    {/* Top row: intro + logout */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 24,
                            flexWrap: "wrap",
                        }}
                    >
                        <div>
                            <h2 style={{ fontSize: "1.6rem", marginBottom: 4 }}>
                                Welcome, Admin
                            </h2>
                            <p style={{ margin: 0, color: "#6b7280", fontSize: "0.95rem" }}>
                                Use the links below to manage site content.
                            </p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="admin-secondary-btn"
                            style={{ minWidth: 120 }}
                        >
                            Logout
                        </button>
                    </div>

                    {/* Cards */}
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <Link href="/admin/members">
                                <a style={{ textDecoration: "none" }}>
                                    <div className="admin-card" style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>
                                            Members Manager
                                        </h3>
                                        <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
                                            Add, update, and manage church members and visitors.
                                        </p>
                                        <p style={{ marginTop: 12, fontSize: "0.9rem" }}>
                                            <i className="fas fa-users me-2" />
                                            Go to Members
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <div className="col-md-4 mb-4">
                            <Link href="/admin/announcements">
                                <a style={{ textDecoration: "none" }}>
                                    <div className="admin-card" style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>
                                            Announcements
                                        </h3>
                                        <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
                                            Create and schedule church-wide announcements.
                                        </p>
                                        <p style={{ marginTop: 12, fontSize: "0.9rem" }}>
                                            <i className="fas fa-bullhorn me-2" />
                                            Go to Announcements
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        </div>

                        <div className="col-md-4 mb-4">
                            <Link href="/admin/media">
                                <a style={{ textDecoration: "none" }}>
                                    <div className="admin-card" style={{ height: "100%" }}>
                                        <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>
                                            Media Uploads
                                        </h3>
                                        <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
                                            Upload photos, sermon audio, and videos for the site.
                                        </p>
                                        <p style={{ marginTop: 12, fontSize: "0.9rem" }}>
                                            <i className="fas fa-photo-video me-2" />
                                            Go to Media
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
