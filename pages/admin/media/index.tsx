import Head from "next/head";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

type Media = {
    id: string;
    title: string;
    type: string;
    category: string;
    url: string;
    published: boolean;
    createdAt: string;
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
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p>Loading...</p>
            </div>
        );
    }

    return <AuthenticatedContent />;
}

function AuthenticatedContent() {
    const [media, setMedia] = useState<Media[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editing, setEditing] = useState<Media | null>(null);
    const [typeFilter, setTypeFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [form, setForm] = useState({
        title: "",
        type: "image",
        category: "General",
        url: "",
        published: true,
    });

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
                const res = await fetch(`/api/media/${editing.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
                if (!res.ok) throw new Error("Failed to update media");
                setEditing(null);
            } else {
                const res = await fetch("/api/media", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
                if (!res.ok) throw new Error("Failed to create media");
            }

            setForm({ title: "", type: "image", category: "General", url: "", published: true });
            loadMedia();
        } catch (err: any) {
            setError(err.message);
        }
    }

    function handleEdit(item: Media) {
        setEditing(item);
        setForm({
            title: item.title,
            type: item.type,
            category: item.category,
            url: item.url || "",
            published: item.published,
        });
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this media?")) return;

        try {
            const res = await fetch(`/api/media/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete media");
            loadMedia();
        } catch (err: any) {
            setError(err.message);
        }
    }

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "image": return "🖼️";
            case "video": return "🎬";
            case "audio": return "🎵";
            case "document": return "📄";
            default: return "📁";
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case "image": return "#10b981";
            case "video": return "#f43f5e";
            case "audio": return "#8b5cf6";
            case "document": return "#f59e0b";
            default: return "#6b7280";
        }
    };

    const isYouTube = (url: string) => {
        return url && (url.includes("youtube.com") || url.includes("youtu.be"));
    };

    const getYouTubeThumbnail = (url: string) => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/);
        return match ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg` : null;
    };

    const isValidImageUrl = (url: string) => {
        return url && (url.startsWith("http://") || url.startsWith("https://"));
    };

    const filteredMedia = media.filter((item) => {
        const matchesType = typeFilter ? item.type === typeFilter : true;
        const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        return matchesType && matchesCategory;
    });

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
            <PageBanner pageName="Media" pageTitle="Manage Media" />

            <main style={{ padding: "40px 0 60px", backgroundColor: "var(--bg-secondary)" }}>
                <div className="theme_container">
                    {error && (
                        <div style={{ padding: "12px 16px", backgroundColor: "#fee", color: "#c33", borderRadius: "8px", marginBottom: "20px" }}>
                            {error}
                        </div>
                    )}

                    {/* Upload Form */}
                    <div style={{ backgroundColor: "var(--bg-color)", borderRadius: "12px", padding: "30px", marginBottom: "30px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", border: "1px solid var(--border-color)" }}>
                        <h2 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
                            {editing ? "Edit Media" : "Add New Media"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label style={labelStyle}>Title *</label>
                                    <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} style={inputStyle} />
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label style={labelStyle}>Type *</label>
                                    <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} style={inputStyle}>
                                        <option value="image">Image</option>
                                        <option value="audio">Audio</option>
                                        <option value="video">Video</option>
                                        <option value="document">Document</option>
                                    </select>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label style={labelStyle}>Category</label>
                                    <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={inputStyle}>
                                        <option>General</option>
                                        <option>Sermon</option>
                                        <option>Event</option>
                                        <option>Kids</option>
                                        <option>Youth</option>
                                        <option>Worship</option>
                                    </select>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label style={labelStyle}>Media URL *</label>
                                    <input 
                                        type="url" 
                                        required 
                                        value={form.url} 
                                        onChange={(e) => setForm({ ...form, url: e.target.value })} 
                                        style={inputStyle}
                                        placeholder="https://example.com/image.jpg or YouTube link"
                                    />
                                    <small style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                                        Paste image URL, YouTube link, Google Drive link, or any media URL
                                    </small>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-color)" }}>
                                        <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
                                        <span>Publish immediately</span>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="primary_btn-two">
                                {editing ? "Update Media" : "Add Media"}
                            </button>
                            {editing && (
                                <button type="button" className="admin-secondary-btn" style={{ marginLeft: 12 }} onClick={() => {
                                    setEditing(null);
                                    setForm({ title: "", type: "image", category: "General", url: "", published: true });
                                }}>
                                    Cancel
                                </button>
                            )}
                        </form>
                    </div>

                    {/* Media Library */}
                    <div style={{ backgroundColor: "var(--bg-color)", borderRadius: "12px", padding: "30px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", border: "1px solid var(--border-color)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px", marginBottom: "20px" }}>
                            <h2 style={{ fontSize: "1.5rem", margin: 0, color: "var(--text-color)" }}>
                                Media Library ({filteredMedia.length})
                            </h2>
                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} style={{ ...inputStyle, width: "auto", minWidth: "120px" }}>
                                    <option value="">All Types</option>
                                    <option value="image">Images</option>
                                    <option value="audio">Audio</option>
                                    <option value="video">Videos</option>
                                    <option value="document">Documents</option>
                                </select>
                                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} style={{ ...inputStyle, width: "auto", minWidth: "120px" }}>
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

                        {loading ? (
                            <p style={{ color: "var(--text-color)", textAlign: "center", padding: "40px 0" }}>Loading media...</p>
                        ) : filteredMedia.length === 0 ? (
                            <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "40px 0" }}>No media found. Add some above!</p>
                        ) : (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 }}>
                                {filteredMedia.map((item) => (
                                    <MediaCard 
                                        key={item.id} 
                                        item={item} 
                                        onEdit={handleEdit} 
                                        onDelete={handleDelete}
                                        getTypeIcon={getTypeIcon}
                                        getTypeColor={getTypeColor}
                                        isYouTube={isYouTube}
                                        getYouTubeThumbnail={getYouTubeThumbnail}
                                        isValidImageUrl={isValidImageUrl}
                                    />
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

function MediaCard({ item, onEdit, onDelete, getTypeIcon, getTypeColor, isYouTube, getYouTubeThumbnail, isValidImageUrl }: any) {
    const [imgError, setImgError] = useState(false);

    const showImage = item.type === "image" && isValidImageUrl(item.url) && !imgError;
    const showYouTube = item.type === "video" && isYouTube(item.url);
    const youtubeThumbnail = showYouTube ? getYouTubeThumbnail(item.url) : null;

    return (
        <div style={{ 
            border: "1px solid var(--border-color)", 
            borderRadius: 12, 
            overflow: "hidden",
            backgroundColor: "var(--bg-color)"
        }}>
            {/* Thumbnail Area */}
            <div style={{ 
                height: "140px", 
                backgroundColor: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden"
            }}>
                {showImage ? (
                    <img 
                        src={item.url} 
                        alt={item.title}
                        onError={() => setImgError(true)}
                        style={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "cover" 
                        }}
                    />
                ) : showYouTube && youtubeThumbnail ? (
                    <>
                        <img 
                            src={youtubeThumbnail} 
                            alt={item.title}
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover" 
                            }}
                        />
                        {/* Play button overlay */}
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50px",
                            height: "50px",
                            backgroundColor: "rgba(255, 0, 0, 0.9)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <span style={{ color: "white", fontSize: "20px", marginLeft: "3px" }}>▶</span>
                        </div>
                    </>
                ) : (
                    <span style={{ fontSize: "3rem" }}>{getTypeIcon(item.type)}</span>
                )}

                {/* Type Badge */}
                <span style={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: getTypeColor(item.type),
                    color: "white",
                    padding: "3px 10px",
                    borderRadius: 12,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase"
                }}>
                    {item.type}
                </span>

                {/* Published Badge */}
                <span style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: item.published ? "#10b981" : "#6b7280",
                    color: "white",
                    padding: "3px 10px",
                    borderRadius: 12,
                    fontSize: "0.7rem",
                    fontWeight: 600
                }}>
                    {item.published ? "Published" : "Draft"}
                </span>
            </div>

            {/* Info Area */}
            <div style={{ padding: 16 }}>
                <h4 style={{ 
                    fontSize: "1rem", 
                    marginBottom: 6, 
                    color: "var(--text-color)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}>
                    {item.title}
                </h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 12 }}>
                    {item.category} • {new Date(item.createdAt).toLocaleDateString()}
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                    <button 
                        className="admin-secondary-btn" 
                        style={{ fontSize: "0.85rem", padding: "6px 14px" }}
                        onClick={() => onEdit(item)}
                    >
                        Edit
                    </button>
                    <button 
                        className="admin-secondary-btn" 
                        style={{ fontSize: "0.85rem", padding: "6px 14px", background: "#dc2626", color: "white" }}
                        onClick={() => onDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
