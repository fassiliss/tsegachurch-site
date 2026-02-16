// pages/admin/dashboard.tsx
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "src/components/PageBanner";

type Card = {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
};

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const role = (session?.user as any)?.role;

  const router = useRouter();

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/admin/login");
    }
  }, [status, router]);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/admin/login" });
  };

  // Don’t render the dashboard until we know session status
  if (status === "loading") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--bg-secondary)",
        }}
      >
        <p style={{ color: "var(--text-color)" }}>Loading...</p>
      </div>
    );
  }

  // While redirecting, render nothing (prevents flicker)
  if (status === "unauthenticated") return null;

  const cards: Card[] = [
    {
      title: "Members Manager",
      description:
        "View, add, edit, and manage church members and their information.",
      icon: "fas fa-users",
      href: "/admin/members",
      color: "#6366f1",
    },
    {
      title: "Announcements",
      description: "Create and manage church announcements and news updates.",
      icon: "fas fa-bullhorn",
      href: "/admin/announcements",
      color: "#f97316",
    },
    {
      title: "Events",
      description:
        "Manage upcoming church events, dates, times, and locations.",
      icon: "fas fa-calendar-alt",
      href: "/admin/events",
      color: "#10b981",
    },
    {
      title: "Media",
      description:
        "Upload and organize photos, videos, sermons, and documents.",
      icon: "fas fa-photo-video",
      href: "/admin/media",
      color: "#14b8a6",
    },
  ];

  if (role === "super_admin") {
    cards.push({
      title: "Admin Management",
      description:
        "Add, deactivate, and manage administrator accounts and permissions.",
      icon: "fas fa-user-shield",
      href: "/admin/admins",
      color: "#8b5cf6",
    });
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard — GEECN</title>
      </Head>

      <Header />
      <PageBanner pageName="Admin Area" pageTitle="Admin Dashboard" />

      <main className="admin-dashboard">
        <div className="theme_container">
          <div className="admin-dashboard__top">
            <div>
              <h2 className="admin-dashboard__title">
                Welcome,{" "}
                {role === "super_admin"
                  ? "Super Admin"
                  : role === "admin"
                    ? "Admin"
                    : "User"}
              </h2>
              <p className="admin-dashboard__subtitle">
                Use the cards below to manage site content.
              </p>
            </div>

            <button className="admin-dashboard__logout" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt" />
              Logout
            </button>
          </div>

          <div className="admin-dashboard__grid">
            {cards.map((card) => (
              <Link href={card.href} key={card.title}>
                <div
                  className="admin-card"
                  style={{ borderTopColor: card.color }}
                >
                  <div
                    className="admin-card__icon"
                    style={{ backgroundColor: `${card.color}20` }}
                  >
                    <i className={card.icon} style={{ color: card.color }} />
                  </div>
                  <h3 className="admin-card__title">{card.title}</h3>
                  <p className="admin-card__desc">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Keep styles here so you don’t need another CSS file */}
      <style jsx>{`
        .admin-dashboard {
          padding: 40px 0 60px;
          background: var(--bg-secondary);
        }

        .admin-dashboard__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .admin-dashboard__title {
          font-size: 1.6rem;
          margin: 0 0 4px;
          color: var(--text-color);
        }

        .admin-dashboard__subtitle {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .admin-dashboard__logout {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          color: #dc2626;
          border: 2px solid #dc2626;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .admin-dashboard__logout:hover {
          background: #dc2626;
          color: white;
        }

        .admin-dashboard__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .admin-card {
          display: block;
          background: var(--bg-color);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--border-color);
          border-top: 4px solid;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .admin-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .admin-card__icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .admin-card__icon i {
          font-size: 1.5rem;
        }

        .admin-card__title {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 8px;
          color: var(--text-color);
        }

        .admin-card__desc {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}
