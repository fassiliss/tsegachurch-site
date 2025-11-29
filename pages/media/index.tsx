import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

type MediaItem = {
    id: string;
    title: string;
    type: string;
    category: string;
    url: string;
    createdAt: string;
};

export default function MediaGalleryPage() {
    const [media, setMedia] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [typeFilter, setTypeFilter] = useState<string>("");
    const [categoryFilter, setCategoryFilter] = useState<string>("");

    useEffect(() => {
        loadMedia();
    }, []);

    async function loadMedia() {
        try {
            const res = await fetch("/api/public/media");
            if (!res.ok) throw new Error("Failed to load media");
            const data = await res.json();
            setMedia(data.media || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const filteredMedia = media.filter((item) => {
        const matchesType = typeFilter ? item.type === typeFilter : true;
        const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        return matchesType && matchesCategory;
    });

    const types = [...new Set(media.map((m) => m.type))];
    const categories = [...new Set(media.map((m) => m.category))];

    return (
        <>
            <Head>
                <title>Media Gallery | GEECN</title>
                <meta name="description" content="Browse sermons, photos, videos, and more from Grace Ethiopian Evangelical Church of Nashville" />
            </Head>

            <Header />

            <PageBanner pageName="Media" pageTitle="Media Gallery" />

            <main style={{ padding: "60px 0", backgroundColor: "var(--bg-secondary)" }}>
                <div className="theme_container">
                    {/* Filters */}
                    <div style={{ 
                        display: "flex", 
                        gap: "20px", 
                        marginBottom: "30px", 
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}>
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "1px solid var(--border-color)",
                                backgroundColor: "var(--input-bg)",
                                color: "var(--text-color)",
                                fontSize: "15px",
                                cursor: "pointer",
                                minWidth: "150px"
                            }}
                        >
                            <option value="">All Types</option>
                            {types.map((type) => (
                                <option key={type} value={type}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}s
                                </option>
                            ))}
                        </select>

                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "8px",
                                border: "1px solid var(--border-color)",
                                backgroundColor: "var(--input-bg)",
                                color: "var(--text-color)",
                                fontSize: "15px",
                                cursor: "pointer",
                                minWidth: "150px"
                            }}
                        >
                            <option value="">All Categories</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                        {(typeFilter || categoryFilter) && (
                            <button
                                onClick={() => { setTypeFilter(""); setCategoryFilter(""); }}
                                style={{
                                    padding: "10px 20px",
                                    borderRadius: "8px",
                                    border: "none",
                                    backgroundColor: "#dc2626",
                                    color: "white",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    fontWeight: "500"
                                }}
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>

                    <p style={{ textAlign: "center", marginBottom: "20px", color: "var(--text-muted)" }}>
                        Showing {filteredMedia.length} {filteredMedia.length === 1 ? 'item' : 'items'}
                    </p>

                    {loading ? (
                        <div style={{ textAlign: "center", padding: "60px 0" }}>
                            <p style={{ color: "var(--text-color)", fontSize: "18px" }}>Loading media...</p>
                        </div>
                    ) : filteredMedia.length === 0 ? (
                        <div style={{ textAlign: "center", padding: "60px 0" }}>
                            <p style={{ color: "var(--text-muted)", fontSize: "18px" }}>No media found.</p>
                        </div>
                    ) : (
                        <div style={{ 
                            display: "grid", 
                            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
                            gap: "25px" 
                        }}>
                            {filteredMedia.map((item) => (
                                <MediaCard key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}

function MediaCard({ item }: { item: MediaItem }) {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'image': return '🖼️';
            case 'video': return '🎬';
            case 'audio': return '🎵';
            case 'document': return '📄';
            default: return '📁';
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'image': return '#10b981';
            case 'video': return '#f43f5e';
            case 'audio': return '#8b5cf6';
            case 'document': return '#f59e0b';
            default: return '#6b7280';
        }
    };

    const isYouTube = (url: string) => {
        return url && (url.includes('youtube.com') || url.includes('youtu.be'));
    };

    const getYouTubeVideoId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/);
        return match ? match[1] : null;
    };

    const getYouTubeThumbnail = (url: string) => {
        const videoId = getYouTubeVideoId(url);
        return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
    };

    const isValidUrl = (url: string) => {
        return url && (url.startsWith('http://') || url.startsWith('https://'));
    };

    const showImage = item.type === "image" && isValidUrl(item.url) && !imageError;
    const showYouTube = item.type === "video" && isYouTube(item.url);
    const youtubeThumbnail = showYouTube ? getYouTubeThumbnail(item.url) : null;

    return (
        <div
            style={{
                backgroundColor: "var(--bg-color)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "1px solid var(--border-color)",
                transition: "transform 0.3s, box-shadow 0.3s"
            }}
        >
            {/* Media Preview */}
            <div style={{
                height: "220px",
                backgroundColor: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative"
            }}>
                {showImage ? (
                    <>
                        {!imageLoaded && (
                            <span style={{ fontSize: "40px", position: "absolute" }}>⏳</span>
                        )}
                        <img 
                            src={item.url} 
                            alt={item.title}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover",
                                display: imageLoaded ? "block" : "none"
                            }}
                        />
                    </>
                ) : showYouTube && youtubeThumbnail ? (
                    <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            display: "block"
                        }}
                    >
                        <img 
                            src={youtubeThumbnail}
                            alt={item.title}
                            style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover"
                            }}
                        />
                        {/* Play Button Overlay */}
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "70px",
                            height: "70px",
                            backgroundColor: "rgba(255, 0, 0, 0.9)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
                        }}>
                            <span style={{ 
                                fontSize: "30px", 
                                color: "white",
                                marginLeft: "5px"
                            }}>▶</span>
                        </div>
                    </a>
                ) : item.type === "audio" && isValidUrl(item.url) ? (
                    <div style={{ textAlign: "center", padding: "20px", width: "100%" }}>
                        <span style={{ fontSize: "50px", display: "block", marginBottom: "10px" }}>🎵</span>
                        <audio controls style={{ width: "90%" }}>
                            <source src={item.url} />
                        </audio>
                    </div>
                ) : (
                    <span style={{ fontSize: "60px" }}>{getTypeIcon(item.type)}</span>
                )}

                {/* Type Badge */}
                <span style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: getTypeColor(item.type),
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    zIndex: 10
                }}>
                    {item.type}
                </span>
            </div>

            {/* Media Info */}
            <div style={{ padding: "20px" }}>
                <span style={{
                    backgroundColor: "#e0e7ff",
                    color: "#4338ca",
                    padding: "3px 10px",
                    borderRadius: "12px",
                    fontSize: "11px",
                    fontWeight: "500"
                }}>
                    {item.category}
                </span>

                <h3 style={{ 
                    fontSize: "1.15rem", 
                    fontWeight: "600", 
                    color: "var(--text-color)",
                    margin: "12px 0 8px",
                    lineHeight: "1.4"
                }}>
                    {item.title}
                </h3>

                <p style={{ 
                    color: "var(--text-muted)", 
                    fontSize: "13px",
                    marginBottom: "15px"
                }}>
                    {new Date(item.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}
                </p>

                {isValidUrl(item.url) && (
                    <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            padding: "8px 20px",
                            backgroundColor: showYouTube ? "#ff0000" : "#6432c8",
                            color: "white",
                            borderRadius: "6px",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "500"
                        }}
                    >
                        {item.type === "image" ? "View Full Size" : 
                         item.type === "video" ? "▶ Watch Video" :
                         item.type === "audio" ? "Download Audio" :
                         item.type === "document" ? "Download" : "Open"}
                    </a>
                )}
            </div>
        </div>
    );
}
