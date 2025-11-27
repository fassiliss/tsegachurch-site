// pages/admin/announcements/index.tsx
import Head from "next/head";
import { useMemo, useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";
import { useAdminGuard } from "src/hooks/useAdminGuard";

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
    id: number;
    title: string;
    category: AnnouncementCategory;
    status: AnnouncementStatus;
    isPinned: boolean;
    scheduledFor?: string; // ISO date string (optional)
    createdAt: string; // ISO date string
    message: string;
};

const initialAnnouncements: Announcement[] = [
    {
        id: 1,
        title: "Sunday Worship Service & Communion",
        category: "General",
        status: "published",
        isPinned: true,
        createdAt: "2024-11-15",
        scheduledFor: "2024-11-24",
        message:
            "Join us this Sunday for our worship service at 10:00 AM. Communion will be served. Please arrive early for prayer.",
    },
    {
        id: 2,
        title: "Youth Night – Friday Fellowship",
        category: "Youth",
        status: "published",
        isPinned: false,
        createdAt: "2024-11-10",
        scheduledFor: "2024-11-29",
        message:
            "All youth and young adults are invited to our Friday night fellowship with worship, games, and a short message.",
    },
    {
        id: 3,
        title: "Prayer & Fasting Week",
        category: "Prayer",
        status: "draft",
        isPinned: false,
        createdAt: "2024-11-05",
        scheduledFor: "2024-12-01",
        message:
            "Church-wide prayer and fasting week is coming soon. Details will be finalized and shared with the congregation.",
    },
];

export default function AdminAnnouncementsPage() {
    useAdminGuard();
    const [announcements, setAnnouncements] =
        useState<Announcement[]>(initialAnnouncements);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<"" | AnnouncementStatus>("");
    const [categoryFilter, setCategoryFilter] =
        useState<"" | AnnouncementCategory>("");

    const [editing, setEditing] = useState<Announcement | null>(null);

    const [form, setForm] = useState<{
        id?: number;
        title: string;
        category: AnnouncementCategory;
        status: AnnouncementStatus;
        isPinned: boolean;
        scheduledFor: string;
        message: string;
    }>({
        title: "",
        category: "General",
        status: "draft",
        isPinned: false,
        scheduledFor: "",
        message: "",
    });

    const resetForm = () => {
        setEditing(null);
        setForm({
            title: "",
            category: "General",
            status: "draft",
            isPinned: false,
            scheduledFor: "",
            message: "",
        });
    };

    const handleFormChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;

        const fieldValue =
            type === "checkbox" ? target.checked : value;

        setForm((prev) => ({
            ...prev,
            [name]: fieldValue,
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.title.trim() || !form.message.trim()) {
            alert("Title and message are required.");
            return;
        }

        if (editing) {
            // update
            setAnnouncements((prev) =>
                prev.map((a) =>
                    a.id === editing.id
                        ? {
                            ...a,
                            title: form.title.trim(),
                            category: form.category,
                            status: form.status,
                            isPinned: form.isPinned,
                            scheduledFor: form.scheduledFor || undefined,
                            message: form.message.trim(),
                        }
                        : a
                )
            );
        } else {
            // create
            const nextId = announcements.length
                ? Math.max(...announcements.map((a) => a.id)) + 1
                : 1;

            const newAnnouncement: Announcement = {
                id: nextId,
                title: form.title.trim(),
                category: form.category,
                status: form.status,
                isPinned: form.isPinned,
                scheduledFor: form.scheduledFor || undefined,
                createdAt: new Date().toISOString().slice(0, 10),
                message: form.message.trim(),
            };

            setAnnouncements((prev) => [newAnnouncement, ...prev]);
        }

        resetForm();
    };

    const handleEdit = (announcement: Announcement) => {
        setEditing(announcement);
        setForm({
            id: announcement.id,
            title: announcement.title,
            category: announcement.category,
            status: announcement.status,
            isPinned: announcement.isPinned,
            scheduledFor: announcement.scheduledFor || "",
            message: announcement.message,
        });

        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleDelete = (id: number) => {
        if (!confirm("Delete this announcement?")) return;
        setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    };

    const togglePublish = (id: number) => {
        setAnnouncements((prev) =>
            prev.map((a) =>
                a.id === id
                    ? { ...a, status: a.status === "draft" ? "published" : "draft" }
                    : a
            )
        );
    };

    const filteredAnnouncements = useMemo(() => {
        return announcements
            .slice()
            .sort((a, b) => {
                // Pinned first
                if (a.isPinned && !b.isPinned) return -1;
                if (!a.isPinned && b.isPinned) return 1;
                // Recent createdAt next
                return (
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
            })
            .filter((a) => {
                const matchesSearch =
                    `${a.title} ${a.message}`
                        .toLowerCase()
                        .includes(search.toLowerCase());

                const matchesStatus = statusFilter ? a.status === statusFilter : true;
                const matchesCategory = categoryFilter
                    ? a.category === categoryFilter
                    : true;

                return matchesSearch && matchesStatus && matchesCategory;
            });
    }, [announcements, search, statusFilter, categoryFilter]);

    const stats = useMemo(() => {
        const total = announcements.length;
        const published = announcements.filter(
            (a) => a.status === "published"
        ).length;
        const drafts = announcements.filter((a) => a.status === "draft").length;
        const pinned = announcements.filter((a) => a.isPinned).length;
        return { total, published, drafts, pinned };
    }, [announcements]);

    return (
        <>
            <Head>
                <title>Admin — Announcements | Tsega Church</title>
            </Head>
            <Header />

            <PageBanner
                pageName="Announcements"
                pageTitle="Announcements"

            />

            {/* Banner */}


            <main style={{ padding: "50px 0" }}>
                <div className="theme_container">
                    {/* Stats */}
                    <div className="row mb-4">
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Total Announcements</h4>
                                <p>{stats.total}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Published</h4>
                                <p>{stats.published}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Drafts</h4>
                                <p>{stats.drafts}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Pinned</h4>
                                <p>{stats.pinned}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Form */}
                        <div className="col-lg-4 mb-4">
                            <div className="admin-card">
                                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                                    {editing ? "Edit Announcement" : "New Announcement"}
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                                    {editing
                                        ? "Update the existing announcement."
                                        : "Create a new announcement to show on the site."}
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <label className="admin-label">Title *</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={form.title}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                            required
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label className="admin-label">Category</label>
                                        <select
                                            name="category"
                                            value={form.category}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                        >
                                            <option value="General">General</option>
                                            <option value="Event">Event</option>
                                            <option value="Prayer">Prayer</option>
                                            <option value="Youth">Youth</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Women">Women</option>
                                            <option value="Men">Men</option>
                                        </select>
                                    </div>

                                    <div className="mb-2">
                                        <label className="admin-label">Status</label>
                                        <select
                                            name="status"
                                            value={form.status}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                        >
                                            <option value="draft">Draft</option>
                                            <option value="published">Published</option>
                                        </select>
                                    </div>

                                    <div className="mb-2">
                                        <label className="admin-label">Scheduled Date</label>
                                        <input
                                            type="date"
                                            name="scheduledFor"
                                            value={form.scheduledFor}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                        />
                                        <small style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                                            Optional. For events or upcoming notices.
                                        </small>
                                    </div>

                                    <div className="mb-2" style={{ display: "flex", gap: 8 }}>
                                        <input
                                            type="checkbox"
                                            id="isPinned"
                                            name="isPinned"
                                            checked={form.isPinned}
                                            onChange={handleFormChange}
                                        />
                                        <label
                                            htmlFor="isPinned"
                                            className="admin-label"
                                            style={{ marginBottom: 0 }}
                                        >
                                            Pin to the top
                                        </label>
                                    </div>

                                    <div className="mb-3">
                                        <label className="admin-label">Message *</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                            rows={4}
                                            required
                                        />
                                    </div>

                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <button type="submit" className="primary_btn-two">
                                            {editing ? "Update Announcement" : "Create Announcement"}
                                        </button>
                                        {editing && (
                                            <button
                                                type="button"
                                                onClick={resetForm}
                                                className="admin-secondary-btn"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>

                                    <p
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "#9ca3af",
                                            marginTop: "8px",
                                        }}
                                    >
                                        Demo only: data is stored in browser memory. Refreshing the
                                        page will reset this list.
                                    </p>
                                </form>
                            </div>
                        </div>

                        {/* List */}
                        <div className="col-lg-8 mb-4">
                            <div className="admin-card">
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "10px",
                                        justifyContent: "space-between",
                                        marginBottom: "15px",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.3rem",
                                            margin: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <i className="fas fa-bullhorn" /> Announcements List
                                    </h3>

                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "10px",
                                            flexWrap: "wrap",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Search title or message..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="admin-input"
                                            style={{ maxWidth: "230px" }}
                                        />

                                        <select
                                            value={categoryFilter}
                                            onChange={(e) =>
                                                setCategoryFilter(
                                                    e.target.value as "" | AnnouncementCategory
                                                )
                                            }
                                            className="admin-input"
                                            style={{ maxWidth: "150px" }}
                                        >
                                            <option value="">All Categories</option>
                                            <option value="General">General</option>
                                            <option value="Event">Event</option>
                                            <option value="Prayer">Prayer</option>
                                            <option value="Youth">Youth</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Women">Women</option>
                                            <option value="Men">Men</option>
                                        </select>

                                        <select
                                            value={statusFilter}
                                            onChange={(e) =>
                                                setStatusFilter(
                                                    e.target.value as "" | AnnouncementStatus
                                                )
                                            }
                                            className="admin-input"
                                            style={{ maxWidth: "150px" }}
                                        >
                                            <option value="">All Status</option>
                                            <option value="published">Published</option>
                                            <option value="draft">Draft</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table admin-table">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                            <th>Pinned</th>
                                            <th>Scheduled</th>
                                            <th>Created</th>
                                            <th style={{ width: "180px" }}>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {filteredAnnouncements.length === 0 && (
                                            <tr>
                                                <td colSpan={7} style={{ textAlign: "center" }}>
                                                    No announcements found.
                                                </td>
                                            </tr>
                                        )}

                                        {filteredAnnouncements.map((a) => (
                                            <tr key={a.id}>
                                                <td>
                                                    <strong>{a.title}</strong>
                                                    <div
                                                        style={{
                                                            fontSize: "0.8rem",
                                                            color: "#6b7280",
                                                            marginTop: 4,
                                                            maxWidth: 320,
                                                            whiteSpace: "nowrap",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                        }}
                                                    >
                                                        {a.message}
                                                    </div>
                                                </td>
                                                <td>{a.category}</td>
                                                <td>
                            <span
                                className={`badge ${
                                    a.status === "published"
                                        ? "badge-active"
                                        : "badge-inactive"
                                }`}
                                style={{ textTransform: "capitalize" }}
                            >
                              {a.status}
                            </span>
                                                </td>
                                                <td>{a.isPinned ? "⭐ Yes" : "—"}</td>
                                                <td>
                                                    {a.scheduledFor
                                                        ? new Date(
                                                            a.scheduledFor
                                                        ).toLocaleDateString("en-US")
                                                        : "-"}
                                                </td>
                                                <td>
                                                    {new Date(a.createdAt).toLocaleDateString("en-US")}
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-outline-primary me-1 mb-1"
                                                        type="button"
                                                        onClick={() => togglePublish(a.id)}
                                                    >
                                                        {a.status === "published"
                                                            ? "Set Draft"
                                                            : "Publish"}
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-outline-secondary me-1 mb-1"
                                                        type="button"
                                                        onClick={() => handleEdit(a)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-outline-danger mb-1"
                                                        type="button"
                                                        onClick={() => handleDelete(a.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx global>{`
        .admin-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 20px 20px 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
        }

        .admin-stat-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 16px 18px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
        }

        .admin-stat-card h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .admin-stat-card p {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .admin-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: #4b5563;
        }

        .admin-input {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          padding: 8px 10px;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .admin-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }

        .admin-secondary-btn {
          border-radius: 999px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
          padding: 8px 16px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
        }

        .admin-secondary-btn:hover {
          background: #e5e7eb;
        }

        .admin-table th {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #6b7280;
          border-bottom: 1px solid #e5e7eb;
        }

        .admin-table td {
          vertical-align: middle;
          font-size: 0.92rem;
        }

        .badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .badge-active {
          background: #dcfce7;
          color: #166534;
        }

        .badge-inactive {
          background: #fef3c7;
          color: #92400e;
        }

        /* Dark mode support */
        .dark-mode .admin-card,
        .dark-mode .admin-stat-card {
          background: #111827 !important;
          color: #e5e7eb !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7) !important;
        }

        .dark-mode .admin-input {
          background: #111827 !important;
          border-color: #374151 !important;
          color: #e5e7eb !important;
        }

        .dark-mode .admin-input:focus {
          border-color: #4f46e5 !important;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.4) !important;
        }

        .dark-mode .admin-table th {
          border-bottom-color: #374151 !important;
          color: #9ca3af !important;
        }

        .dark-mode .admin-table td {
          border-color: #1f2937 !important;
        }
      `}</style>
        </>
    );
}
