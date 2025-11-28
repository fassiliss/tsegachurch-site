import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

type AnnouncementStatus = "draft" | "published";
type AnnouncementCategory =
    | "General"
    | "Event"
    | "Prayer"
    | "Youth"
    | "Kids"
    | "Women"
    | "Men";

type Announcement = {
    id: string;
    title: string;
    category: AnnouncementCategory;
    status: AnnouncementStatus;
    isPinned: boolean;
    scheduledFor?: string;
    createdAt: string;
    message: string;
};

export default function AdminAnnouncements() {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login");
        }
    }, [status, router]);

    if (status === "loading" || status === "unauthenticated") {
        return (
            <div style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <p>Loading...</p>
            </div>
        );
    }

    return <AuthenticatedContent />;
}

function AuthenticatedContent() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState({
        title: "",
        category: "General" as AnnouncementCategory,
        status: "draft" as AnnouncementStatus,
        isPinned: false,
        scheduledFor: "",
        message: "",
    });

    // Load announcements on mount
    useEffect(() => {
        loadAnnouncements();
    }, []);

    async function loadAnnouncements() {
        try {
            setLoading(true);
            const res = await fetch("/api/announcements");
            if (!res.ok) throw new Error("Failed to load announcements");
            const data = await res.json();
            setAnnouncements(data.announcements || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        try {
            if (editingId) {
                // Update existing
                const res = await fetch(`/api/announcements/${editingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });

                if (!res.ok) throw new Error("Failed to update announcement");
                setEditingId(null);
            } else {
                // Create new
                const res = await fetch("/api/announcements", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });

                if (!res.ok) throw new Error("Failed to create announcement");
            }

            // Reset form
            setForm({
                title: "",
                category: "General",
                status: "draft",
                isPinned: false,
                scheduledFor: "",
                message: "",
            });

            // Reload announcements
            loadAnnouncements();
        } catch (err: any) {
            setError(err.message);
        }
    }

    function handleEdit(announcement: Announcement) {
        setEditingId(announcement.id);
        setForm({
            title: announcement.title,
            category: announcement.category,
            status: announcement.status,
            isPinned: announcement.isPinned,
            scheduledFor: announcement.scheduledFor || "",
            message: announcement.message,
        });
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this announcement?")) {
            return;
        }

        try {
            const res = await fetch(`/api/announcements/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete announcement");

            loadAnnouncements();
        } catch (err: any) {
            setError(err.message);
        }
    }

    const filteredAnnouncements = useMemo(() => {
        return announcements.sort((a, b) => {
            if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
    }, [announcements]);

    const inputStyle = {
        width: "100%",
        padding: "10px 12px",
        border: "1px solid var(--border-color)",
        borderRadius: "6px",
        fontSize: "15px",
        backgroundColor: "var(--input-bg)",
        color: "var(--text-color)"
    };

    const labelStyle = {
        display: "block" as const,
        marginBottom: "6px",
        fontWeight: "500" as const,
        color: "var(--text-color)"
    };

    return (
        <>
            <Head>
                <title>Announcements Manager — Admin</title>
            </Head>
            <Header />
            <PageBanner pageName="Announcements" pageTitle="Manage Announcements" />

            <main style={{ padding: "40px 0 60px", backgroundColor: "var(--bg-secondary)" }}>
                <div className="theme_container">
                    {error && (
                        <div style={{
                            padding: "12px 16px",
                            backgroundColor: "#fee",
                            color: "#c33",
                            borderRadius: "8px",
                            marginBottom: "20px"
                        }}>
                            {error}
                        </div>
                    )}

                    <div style={{
                        backgroundColor: "var(--bg-color)",
                        borderRadius: "12px",
                        padding: "30px",
                        marginBottom: "30px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        border: "1px solid var(--border-color)"
                    }}>
                        <h2 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
                            {editingId ? "Edit Announcement" : "Create Announcement"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <label style={labelStyle}>Title *</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.title}
                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        style={inputStyle}
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Category</label>
                                    <select
                                        value={form.category}
                                        onChange={(e) =>
                                            setForm({ ...form, category: e.target.value as AnnouncementCategory })
                                        }
                                        style={inputStyle}
                                    >
                                        <option>General</option>
                                        <option>Event</option>
                                        <option>Prayer</option>
                                        <option>Youth</option>
                                        <option>Kids</option>
                                        <option>Women</option>
                                        <option>Men</option>
                                    </select>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label style={labelStyle}>Message *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        style={inputStyle}
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Status</label>
                                    <select
                                        value={form.status}
                                        onChange={(e) =>
                                            setForm({ ...form, status: e.target.value as AnnouncementStatus })
                                        }
                                        style={inputStyle}
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Schedule For (optional)</label>
                                    <input
                                        type="date"
                                        value={form.scheduledFor}
                                        onChange={(e) => setForm({ ...form, scheduledFor: e.target.value })}
                                        style={inputStyle}
                                    />
                                </div>

                                <div className="col-md-4 mb-3 d-flex align-items-end">
                                    <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-color)" }}>
                                        <input
                                            type="checkbox"
                                            checked={form.isPinned}
                                            onChange={(e) => setForm({ ...form, isPinned: e.target.checked })}
                                        />
                                        <span>Pin this announcement</span>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="primary_btn-two">
                                {editingId ? "Update Announcement" : "Create Announcement"}
                            </button>
                            {editingId && (
                                <button
                                    type="button"
                                    className="admin-secondary-btn"
                                    style={{ marginLeft: 12 }}
                                    onClick={() => {
                                        setEditingId(null);
                                        setForm({
                                            title: "",
                                            category: "General",
                                            status: "draft",
                                            isPinned: false,
                                            scheduledFor: "",
                                            message: "",
                                        });
                                    }}
                                >
                                    Cancel
                                </button>
                            )}
                        </form>
                    </div>

                    <div style={{
                        backgroundColor: "var(--bg-color)",
                        borderRadius: "12px",
                        padding: "30px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        border: "1px solid var(--border-color)"
                    }}>
                        <h2 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
                            All Announcements ({announcements.length})
                        </h2>

                        {loading ? (
                            <p style={{ color: "var(--text-color)", textAlign: "center", padding: "40px 0" }}>
                                Loading announcements...
                            </p>
                        ) : filteredAnnouncements.length === 0 ? (
                            <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "40px 0" }}>
                                No announcements yet. Create one above!
                            </p>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {filteredAnnouncements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        style={{
                                            border: "1px solid var(--border-color)",
                                            borderRadius: 8,
                                            padding: 16,
                                            backgroundColor: announcement.isPinned ? "#fef3c7" : "var(--bg-color)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "start",
                                                marginBottom: 8,
                                            }}
                                        >
                                            <div>
                                                <h3 style={{ fontSize: "1.1rem", marginBottom: 4, color: "var(--text-color)" }}>
                                                    {announcement.isPinned && "📌 "}
                                                    {announcement.title}
                                                </h3>
                                                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                                    <span
                                                        style={{
                                                            background: "#e0e7ff",
                                                            padding: "2px 8px",
                                                            borderRadius: 4,
                                                            marginRight: 8,
                                                        }}
                                                    >
                                                        {announcement.category}
                                                    </span>
                                                    <span
                                                        style={{
                                                            background:
                                                                announcement.status === "published" ? "#d1fae5" : "#f3f4f6",
                                                            padding: "2px 8px",
                                                            borderRadius: 4,
                                                        }}
                                                    >
                                                        {announcement.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", gap: 8 }}>
                                                <button
                                                    className="admin-secondary-btn"
                                                    onClick={() => handleEdit(announcement)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="admin-secondary-btn"
                                                    style={{ background: "#dc2626", color: "white" }}
                                                    onClick={() => handleDelete(announcement.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                        <p style={{ margin: "8px 0 0", color: "var(--text-color)" }}>{announcement.message}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
