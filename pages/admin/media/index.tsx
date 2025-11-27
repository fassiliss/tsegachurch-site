// pages/admin/media/index.tsx
import Head from "next/head";
import { useMemo, useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";
import { useAdminGuard } from "src/hooks/useAdminGuard";

type MediaType = "image" | "audio" | "video" | "document";

type MediaCategory =
    | "Sermon"
    | "Event"
    | "Kids"
    | "Youth"
    | "Worship"
    | "General";

type MediaItem = {
    id: number;
    title: string;
    type: MediaType;
    category: MediaCategory;
    url: string;
    createdAt: string;
    published: boolean;
};

const initialMedia: MediaItem[] = [
    {
        id: 1,
        title: "Sunday Sermon – Faith in Action",
        type: "audio",
        category: "Sermon",
        url: "faith-in-action-sermon.mp3",
        createdAt: "2024-11-01",
        published: true,
    },
    {
        id: 2,
        title: "Youth Night Highlights",
        type: "video",
        category: "Youth",
        url: "youth-night-2024.mp4",
        createdAt: "2024-10-20",
        published: true,
    },
    {
        id: 3,
        title: "Kids Ministry Photo Set",
        type: "image",
        category: "Kids",
        url: "kids-ministry-photos.zip",
        createdAt: "2024-09-10",
        published: false,
    },
];

export default function AdminMediaPage() {
    useAdminGuard();
    const [media, setMedia] = useState<MediaItem[]>(initialMedia);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState<"" | MediaType>("");
    const [categoryFilter, setCategoryFilter] =
        useState<"" | MediaCategory>("");
    const [editing, setEditing] = useState<MediaItem | null>(null);

    const [file, setFile] = useState<File | null>(null);

    const [form, setForm] = useState<{
        id?: number;
        title: string;
        type: MediaType;
        category: MediaCategory;
        published: boolean;
    }>({
        title: "",
        type: "image",
        category: "General",
        published: false,
    });

    const resetForm = () => {
        setEditing(null);
        setFile(null);
        setForm({
            title: "",
            type: "image",
            category: "General",
            published: false,
        });
    };

    const handleFormChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0] || null;
        setFile(f);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.title.trim()) {
            alert("Title is required.");
            return;
        }

        const fileUrl = file ? file.name : editing?.url || "uploaded-file";

        if (editing) {
            setMedia((prev) =>
                prev.map((m) =>
                    m.id === editing.id
                        ? {
                            ...m,
                            title: form.title.trim(),
                            type: form.type,
                            category: form.category,
                            published: form.published,
                            url: file ? fileUrl : m.url,
                        }
                        : m
                )
            );
        } else {
            const nextId = media.length
                ? Math.max(...media.map((m) => m.id)) + 1
                : 1;

            const newMedia: MediaItem = {
                id: nextId,
                title: form.title.trim(),
                type: form.type,
                category: form.category,
                url: fileUrl,
                createdAt: new Date().toISOString().slice(0, 10),
                published: form.published,
            };

            setMedia((prev) => [newMedia, ...prev]);
        }

        resetForm();
    };

    const handleEdit = (item: MediaItem) => {
        setEditing(item);
        setFile(null);
        setForm({
            id: item.id,
            title: item.title,
            type: item.type,
            category: item.category,
            published: item.published,
        });

        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleDelete = (id: number) => {
        if (!confirm("Delete this media item?")) return;
        setMedia((prev) => prev.filter((m) => m.id !== id));
    };

    const togglePublish = (id: number) => {
        setMedia((prev) =>
            prev.map((m) =>
                m.id === id ? { ...m, published: !m.published } : m
            )
        );
    };

    const filteredMedia = useMemo(() => {
        return media
            .slice()
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
            .filter((m) => {
                const matchesSearch = `${m.title} ${m.url}`
                    .toLowerCase()
                    .includes(search.toLowerCase());

                const matchesType = typeFilter ? m.type === typeFilter : true;
                const matchesCategory = categoryFilter
                    ? m.category === categoryFilter
                    : true;

                return matchesSearch && matchesType && matchesCategory;
            });
    }, [media, search, typeFilter, categoryFilter]);

    const stats = useMemo(() => {
        const total = media.length;
        const images = media.filter((m) => m.type === "image").length;
        const audio = media.filter((m) => m.type === "audio").length;
        const video = media.filter((m) => m.type === "video").length;
        return { total, images, audio, video };
    }, [media]);

    return (
        <>
            <Head>
                <title>Admin — Media Uploads | Tsega Church</title>
            </Head>
            <Header />

            <PageBanner
                pageName="Media "
                pageTitle="Media Uploads"

            />




            {/* MAIN CONTENT */}
            <main style={{ padding: "50px 0" }}>
                <div className="theme_container">
                    {/* Stats */}
                    <div className="row mb-4">
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Total Media</h4>
                                <p>{stats.total}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Images</h4>
                                <p>{stats.images}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Audio</h4>
                                <p>{stats.audio}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Videos</h4>
                                <p>{stats.video}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Upload Form */}
                        <div className="col-lg-4 mb-4">
                            <div className="admin-card">
                                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                                    {editing ? "Edit Media Item" : "Upload New Media"}
                                </h3>

                                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                                    {editing
                                        ? "Update the selected media item."
                                        : "Upload a photo, audio, or video for church use."}
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
                                        <label className="admin-label">Type</label>
                                        <select
                                            name="type"
                                            value={form.type}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                        >
                                            <option value="image">Image</option>
                                            <option value="audio">Audio</option>
                                            <option value="video">Video</option>
                                            <option value="document">Document</option>
                                        </select>
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
                                            <option value="Sermon">Sermon</option>
                                            <option value="Event">Event</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Youth">Youth</option>
                                            <option value="Worship">Worship</option>
                                        </select>
                                    </div>

                                    <div className="mb-2">
                                        <label className="admin-label">File</label>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="admin-input"
                                            style={{ padding: "6px 8px" }}
                                        />
                                        {editing && !file && (
                                            <small style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                                                Current file: {editing.url}
                                            </small>
                                        )}
                                    </div>

                                    <div className="mb-3" style={{ display: "flex", gap: 8 }}>
                                        <input
                                            type="checkbox"
                                            id="published"
                                            name="published"
                                            checked={form.published}
                                            onChange={handleFormChange}
                                        />
                                        <label
                                            htmlFor="published"
                                            className="admin-label"
                                            style={{ marginBottom: 0 }}
                                        >
                                            Mark as published (visible on site)
                                        </label>
                                    </div>

                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <button type="submit" className="primary_btn-two">
                                            {editing ? "Update Media" : "Upload Media"}
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
                                        Demo only: files are not uploaded.
                                        We just store the file name in browser memory.
                                    </p>
                                </form>
                            </div>
                        </div>

                        {/* Media List */}
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
                                        <i className="fas fa-photo-video" /> Media Library
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
                                            placeholder="Search title or file..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="admin-input"
                                            style={{ maxWidth: "230px" }}
                                        />

                                        <select
                                            value={typeFilter}
                                            onChange={(e) =>
                                                setTypeFilter(e.target.value as "" | MediaType)
                                            }
                                            className="admin-input"
                                            style={{ maxWidth: "150px" }}
                                        >
                                            <option value="">All Types</option>
                                            <option value="image">Image</option>
                                            <option value="audio">Audio</option>
                                            <option value="video">Video</option>
                                            <option value="document">Document</option>
                                        </select>

                                        <select
                                            value={categoryFilter}
                                            onChange={(e) =>
                                                setCategoryFilter(
                                                    e.target.value as "" | MediaCategory
                                                )
                                            }
                                            className="admin-input"
                                            style={{ maxWidth: "150px" }}
                                        >
                                            <option value="">All Categories</option>
                                            <option value="General">General</option>
                                            <option value="Sermon">Sermon</option>
                                            <option value="Event">Event</option>
                                            <option value="Kids">Kids</option>
                                            <option value="Youth">Youth</option>
                                            <option value="Worship">Worship</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table admin-table">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Category</th>
                                            <th>File</th>
                                            <th>Created</th>
                                            <th>Published</th>
                                            <th style={{ width: "180px" }}>Actions</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {filteredMedia.length === 0 && (
                                            <tr>
                                                <td colSpan={7} style={{ textAlign: "center" }}>
                                                    No media items found.
                                                </td>
                                            </tr>
                                        )}

                                        {filteredMedia.map((m) => (
                                            <tr key={m.id}>
                                                <td>
                                                    <strong>{m.title}</strong>
                                                </td>
                                                <td style={{ textTransform: "capitalize" }}>
                                                    {m.type}
                                                </td>
                                                <td>{m.category}</td>
                                                <td>
                            <span
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#6b7280",
                                }}
                            >
                              {m.url}
                            </span>
                                                </td>
                                                <td>
                                                    {new Date(m.createdAt).toLocaleDateString(
                                                        "en-US"
                                                    )}
                                                </td>
                                                <td>
                                                    {m.published ? (
                                                        <span className="badge badge-active">Yes</span>
                                                    ) : (
                                                        <span className="badge badge-inactive">
                                Draft
                              </span>
                                                    )}
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-outline-primary me-1 mb-1"
                                                        type="button"
                                                        onClick={() => togglePublish(m.id)}
                                                    >
                                                        {m.published ? "Set Draft" : "Publish"}
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-outline-secondary me-1 mb-1"
                                                        type="button"
                                                        onClick={() => handleEdit(m)}
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-outline-danger mb-1"
                                                        type="button"
                                                        onClick={() => handleDelete(m.id)}
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

            {/* Reuse same admin styles */}
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
