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

    return (
        <>
            <Head>
                <title>Admin Dashboard — Tsega Church</title>
            </Head>

            <Header />

            <PageBanner
                pageName="Admin Area"
                pageTitle="Protected Admin Area"
            />

            <main style={{ padding: "40px 0 60px" }}>
                <div className="theme_container">
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
                            <p
                                style={{
                                    margin: 0,
                                    color: "#6b7280",
                                    fontSize: "0.95rem",
                                }}
                            >
                                Use the cards below to manage site content.
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

                    <div className="row admin-dashboard-row">
                        {/* Members */}
                        <div className="col-md-4 mb-4">
                            <Link href="/admin/members">
                                <a className="admin-dashboard-card admin-dashboard-card--members">
                                    <div className="admin-dashboard-icon">
                                        <i className="fas fa-users" />
                                    </div>
                                    <div className="admin-dashboard-body">
                                        <span className="admin-dashboard-pill">Members Manager</span>
                                        <h3>Members Manager</h3>
                                        <p>
                                            Add, update, and manage church members, visitors, and
                                            ministries in one place.
                                        </p>
                                    </div>
                                    <div className="admin-dashboard-footer">
                                        <span>Go to Members</span>
                                        <i className="far fa-arrow-right" />
                                    </div>
                                </a>
                            </Link>
                        </div>

                        {/* Announcements */}
                        <div className="col-md-4 mb-4">
                            <Link href="/admin/announcements">
                                <a className="admin-dashboard-card admin-dashboard-card--announcements">
                                    <div className="admin-dashboard-icon">
                                        <i className="fas fa-bullhorn" />
                                    </div>
                                    <div className="admin-dashboard-body">
                                        <span className="admin-dashboard-pill">Announcements</span>
                                        <h3>Announcements</h3>
                                        <p>
                                            Create, schedule, and pin important church-wide messages
                                            and event reminders.
                                        </p>
                                    </div>
                                    <div className="admin-dashboard-footer">
                                        <span>Go to Announcements</span>
                                        <i className="far fa-arrow-right" />
                                    </div>
                                </a>
                            </Link>
                        </div>

                        {/* Media */}
                        <div className="col-md-4 mb-4">
                            <Link href="/admin/media">
                                <a className="admin-dashboard-card admin-dashboard-card--media">
                                    <div className="admin-dashboard-icon">
                                        <i className="fas fa-photo-video" />
                                    </div>
                                    <div className="admin-dashboard-body">
                                        <span className="admin-dashboard-pill">Media Uploads</span>
                                        <h3>Media Uploads</h3>
                                        <p>
                                            Upload and organize photos, sermon audio, and videos for
                                            the website and ministries.
                                        </p>
                                    </div>
                                    <div className="admin-dashboard-footer">
                                        <span>Go to Media</span>
                                        <i className="far fa-arrow-right" />
                                    </div>
                                </a>
                            </Link>
                        </div>

                        {/* Admin Management */}
                        <div className="col-md-4 mb-4">
                            <Link href="/admin/admins">
                                <a className="admin-dashboard-card admin-dashboard-card--admins">
                                    <div className="admin-dashboard-icon">
                                        <i className="fas fa-user-shield" />
                                    </div>
                                    <div className="admin-dashboard-body">
                                        <span className="admin-dashboard-pill">Admin Management</span>
                                        <h3>Admin Management</h3>
                                        <p>
                                            Add, deactivate, and manage administrator accounts and permissions.
                                        </p>
                                    </div>
                                    <div className="admin-dashboard-footer">
                                        <span>Manage Admins</span>
                                        <i className="far fa-arrow-right" />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx global>{`
        .admin-dashboard-row {
          margin-top: 10px;
        }

        .admin-dashboard-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 18px;
          padding: 18px 18px 16px;
          text-decoration: none;
          background: radial-gradient(circle at top left, #eef2ff 0%, #ffffff 35%, #f9fafb 100%);
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.25);
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease,
            background 0.22s ease;
          color: #0f172a;
          cursor: pointer;
        }

        .admin-dashboard-card--members {
          border-top: 4px solid #6366f1;
        }

        .admin-dashboard-card--announcements {
          border-top: 4px solid #f97316;
        }

        .admin-dashboard-card--media {
          border-top: 4px solid #14b8a6;
        }

        .admin-dashboard-card--admins {
          border-top: 4px solid #8b5cf6;
        }

        .admin-dashboard-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
          border-color: rgba(79, 70, 229, 0.45);
        }

        .admin-dashboard-icon {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          background: rgba(15, 23, 42, 0.08);
        }

        .admin-dashboard-icon i {
          font-size: 20px;
          color: #111827;
        }

        .admin-dashboard-body h3 {
          font-size: 1.25rem;
          margin: 4px 0 6px;
          font-weight: 700;
          color: #111827;
        }

        .admin-dashboard-body p {
          margin: 0;
          font-size: 0.95rem;
          color: #6b7280;
        }

        .admin-dashboard-pill {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 999px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #4b5563;
          background: rgba(148, 163, 184, 0.15);
        }

        .admin-dashboard-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 10px;
          border-top: 1px dashed rgba(148, 163, 184, 0.5);
          font-size: 0.9rem;
          color: #4f46e5;
        }

        .admin-dashboard-footer i {
          font-size: 0.85rem;
        }

        .admin-dashboard-card:hover .admin-dashboard-footer span {
          text-decoration: underline;
        }

        .dark-mode .admin-dashboard-card {
          background: radial-gradient(
            circle at top left,
            #111827 0%,
            #020617 40%,
            #020617 100%
          );
          border-color: rgba(30, 64, 175, 0.6);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8);
          color: #e5e7eb;
        }

        .dark-mode .admin-dashboard-icon {
          background: rgba(15, 23, 42, 0.9);
        }

        .dark-mode .admin-dashboard-icon i {
          color: #e5e7eb;
        }

        .dark-mode .admin-dashboard-body h3 {
          color: #f9fafb;
        }

        .dark-mode .admin-dashboard-body p {
          color: #9ca3af;
        }

        .dark-mode .admin-dashboard-pill {
          background: rgba(55, 65, 81, 0.8);
          color: #e5e7eb;
        }

        .dark-mode .admin-dashboard-footer {
          border-top-color: rgba(55, 65, 81, 0.9);
          color: #a5b4fc;
        }
      `}</style>
        </>
    );
}
