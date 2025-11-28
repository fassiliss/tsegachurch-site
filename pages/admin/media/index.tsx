import Head from "next/head";
import { useMemo, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

type MediaType = "image" | "audio" | "video" | "document";
type MediaCategory =
    | "Sermon"
    | "Event"
    | "Kids"
    | "Youth"
    | "Worship"
    | "General";

type MediaItem = {
    id: string;
    title: string;
    type: MediaType;
    category: MediaCategory;
    url: string;
    createdAt: string;
    published: boolean;
};

export default function AdminMediaPage() {
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
    const [media, setMedia] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState<"" | MediaType>("");
    const [categoryFilter, setCategoryFilter] = useState<"" | MediaCategory>("");
    const [editing, setEditing] = useState<MediaItem | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [form, setForm] = useState<{
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

    // Load media on mount
    useEffect(() => {
        loadMedia();
    }, []);

    async function loadMedia() {
        try {
            setLoading(true);
            const res = await fetch("/api/media");
            if (!res.ok) throw new Error("Failed to load media");
            const data = await res.json();
            setMedia(data.media || []);
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
            if (editing) {
                // Update existing
                const res = await fetch(`/api/media/${editing.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });

                if (!res.ok) throw new Error("Failed to update media");
                setEditing(null);
            } else {
                // Create new (for now, just use filename as URL - file upload coming in Priority 3)
                const url = file ? file.name : "placeholder.file";
                
                const res = await fetch("/api/media", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...form, url }),
                });

                if (!res.ok) throw new Error("Failed to create media");
            }

            // Reset form
            setForm({ title: "", type: "image", category: "General", published: false });
            setFile(null);

            // Reload media
            loadMedia();
        } catch (err: any) {
            setError(err.message);
        }
    }

    function handleEdit(item: MediaItem) {
        setEditing(item);
        setForm({
            title: item.title,
            type: item.type,
            category: item.category,
            published: item.published,
        });
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this media?")) {
            return;
        }

        try {
            const res = await fetch(`/api/media/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete media");

            loadMedia();
        } catch (err: any) {
            setError(err.message);
        }
    }

    const filteredMedia = useMemo(() => {
        return media.filter((item) => {
            const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
            const matchesType = typeFilter ? item.type === typeFilter : true;
            const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
            return matchesSearch && matchesType && matchesCategory;
        });
    }, [media, search, typeFilter, categoryFilter]);

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
                <title>Media Manager — Admin</title>
            </Head>
            <Header />
            <PageBanner pageName="Media" pageTitle="Manage Media Library" />

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
                            {editing ? "Edit Media" : "Upload New Media"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label style={labelStyle}>Title *</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.title}
                                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                                        style={inputStyle}
                                    />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label style={labelStyle}>Type</label>
                                    <select
                                        value={form.type}
                                        onChange={(e) => setForm({ ...form, type: e.target.value as MediaType })}
                                        style={inputStyle}
                                    >
                                        <option value="image">Image</option>
                                        <option value="audio">Audio</option>
                                        <option value="video">Video</option>
                                        <option value="document">Document</option>
                                    </select>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label style={labelStyle}>Category</label>
                                    <select
                                        value={form.category}
                                        onChange={(e) =>
                                            setForm({ ...form, category: e.target.value as MediaCategory })
                                        }
                                        style={inputStyle}
                                    >
                                        <option>General</option>
                                        <option>Sermon</option>
                                        <option>Event</option>
                                        <option>Kids</option>
                                        <option>Youth</option>
                                        <option>Worship</option>
                                    </select>
                                </div>

                                {!editing && (
                                    <div className="col-md-12 mb-3">
                                        <label style={labelStyle}>File (Note: Actual upload coming soon - for now just saves filename)</label>
                                        <input
                                            type="file"
                                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                                            style={inputStyle}
                                        />
                                    </div>
                                )}

                                <div className="col-md-12 mb-3">
                                    <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-color)" }}>
                                        <input
                                            type="checkbox"
                                            checked={form.published}
                                            onChange={(e) => setForm({ ...form, published: e.target.checked })}
                                        />
                                        <span>Publish immediately</span>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="primary_btn-two">
                                {editing ? "Update Media" : "Upload Media"}
                            </button>
                            {editing && (
                                <button
                                    type="button"
                                    className="admin-secondary-btn"
                                    style={{ marginLeft: 12 }}
                                    onClick={() => {
                                        setEditing(null);
                                        setForm({ title: "", type: "image", category: "General", published: false });
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
                        <div style={{ marginBottom: 20 }}>
                            <h2 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
                                Media Library ({filteredMedia.length})
                            </h2>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <input
                                        type="text"
                                        placeholder="Search media..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        style={inputStyle}
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <select
                                        value={typeFilter}
                                        onChange={(e) => setTypeFilter(e.target.value as "" | MediaType)}
                                        style={inputStyle}
                                    >
                                        <option value="">All Types</option>
                                        <option value="image">Images</option>
                                        <option value="audio">Audio</option>
                                        <option value="video">Videos</option>
                                        <option value="document">Documents</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <select
                                        value={categoryFilter}
                                        onChange={(e) => setCategoryFilter(e.target.value as "" | MediaCategory)}
                                        style={inputStyle}
                                    >
                                        <option value="">All Categories</option>
                                        <option>General</option>
                                        <option>Sermon</option>
                                        <option>Event</option>
                                        <option>Kids</option>
                                        <option>Youth</option>
                                        <option>Worship</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {loading ? (
                            <p style={{ color: "var(--text-color)", textAlign: "center", padding: "40px 0" }}>
                                Loading media...
                            </p>
                        ) : filteredMedia.length === 0 ? (
                            <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "40px 0" }}>
                                No media found
                            </p>
                        ) : (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 }}>
                                {filteredMedia.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            border: "1px solid var(--border-color)",
                                            borderRadius: 8,
                                            padding: 12,
                                            backgroundColor: "var(--bg-color)",
                                        }}
                                    >
                                        <div style={{ marginBottom: 8 }}>
                                            <span
                                                style={{
                                                    background: "#e0e7ff",
                                                    padding: "2px 8px",
                                                    borderRadius: 4,
                                                    fontSize: "0.75rem",
                                                    marginRight: 8,
                                                }}
                                            >
                                                {item.type}
                                            </span>
                                            <span
                                                style={{
                                                    background: item.published ? "#d1fae5" : "#f3f4f6",
                                                    padding: "2px 8px",
                                                    borderRadius: 4,
                                                    fontSize: "0.75rem",
                                                }}
                                            >
                                                {item.published ? "Published" : "Draft"}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: "1rem", marginBottom: 4, color: "var(--text-color)" }}>{item.title}</h3>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 8 }}>
                                            {item.category} • {new Date(item.createdAt).toLocaleDateString()}
                                        </p>
                                        <div style={{ display: "flex", gap: 8 }}>
                                            <button
                                                className="admin-secondary-btn"
                                                style={{ fontSize: "0.85rem", padding: "4px 12px" }}
                                                onClick={() => handleEdit(item)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="admin-secondary-btn"
                                                style={{ fontSize: "0.85rem", padding: "4px 12px", background: "#dc2626", color: "white" }}
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
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
