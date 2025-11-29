import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "src/components/PageBanner";

export default function AdminDashboard() {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login");
        }
    }, [status, router]);

    const handleLogout = async () => {
        await signOut({ callbackUrl: "/admin/login" });
    };

    if (status === "loading" || status === "unauthenticated") {
        return (
            <div style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--bg-secondary)"
            }}>
                <p style={{ color: "var(--text-color)" }}>Loading...</p>
            </div>
        );
    }

    const cards = [
        {
            title: "Members Manager",
            description: "View, add, edit, and manage church members and their information.",
            icon: "fas fa-users",
            href: "/admin/members",
            color: "#6366f1"
        },
        {
            title: "Announcements",
            description: "Create and manage church announcements and news updates.",
            icon: "fas fa-bullhorn",
            href: "/admin/announcements",
            color: "#f97316"
        },
        {
            title: "Events",
            description: "Manage upcoming church events, dates, times, and locations.",
            icon: "fas fa-calendar-alt",
            href: "/admin/events",
            color: "#10b981"
        },
        {
            title: "Media",
            description: "Upload and organize photos, videos, sermons, and documents.",
            icon: "fas fa-photo-video",
            href: "/admin/media",
            color: "#14b8a6"
        },
        {
            title: "Admin Management",
            description: "Add, deactivate, and manage administrator accounts and permissions.",
            icon: "fas fa-user-shield",
            href: "/admin/admins",
            color: "#8b5cf6"
        }
    ];

    return (
        <>
            <Head>
                <title>Admin Dashboard — GEECN</title>
            </Head>
            <Header />
            <PageBanner pageName="Admin Area" pageTitle="Admin Dashboard" />

            <main style={{ padding: "40px 0 60px", backgroundColor: "var(--bg-secondary)" }}>
                <div className="theme_container">
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 24,
                        flexWrap: "wrap",
                    }}>
                        <div>
                            <h2 style={{ fontSize: "1.6rem", marginBottom: 4, color: "var(--text-color)" }}>
                                Welcome, Admin
                            </h2>
                            <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.95rem" }}>
                                Use the cards below to manage site content.
                            </p>
                        </div>
                        <button onClick={handleLogout} className="admin-secondary-btn">
                            <i className="fas fa-sign-out-alt me-2"></i>
                            Logout
                        </button>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "24px"
                    }}>
                        {cards.map((card) => (
                            <Link href={card.href} key={card.title}>
                                <a style={{
                                    display: "block",
                                    backgroundColor: "var(--bg-color)",
                                    borderRadius: "12px",
                                    padding: "24px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                    border: "1px solid var(--border-color)",
                                    borderTop: `4px solid ${card.color}`,
                                    textDecoration: "none",
                                    transition: "transform 0.2s, box-shadow 0.2s"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                                }}
                                >
                                    <div style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "12px",
                                        backgroundColor: `${card.color}20`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "16px"
                                    }}>
                                        <i className={card.icon} style={{ fontSize: "1.5rem", color: card.color }}></i>
                                    </div>
                                    <h3 style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "600",
                                        color: "var(--text-color)",
                                        marginBottom: "8px"
                                    }}>
                                        {card.title}
                                    </h3>
                                    <p style={{
                                        margin: 0,
                                        color: "var(--text-muted)",
                                        fontSize: "0.9rem",
                                        lineHeight: "1.5"
                                    }}>
                                        {card.description}
                                    </p>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
