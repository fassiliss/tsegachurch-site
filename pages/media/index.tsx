// pages/media/index.tsx
import Head from "next/head";
import { useMemo, useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

type MediaType = "image" | "audio" | "video" | "document";
type MediaCategory = "Sermon" | "Event" | "Kids" | "Youth" | "Worship" | "General";

type MediaItem = {
    id: number;
    title: string;
    type: MediaType;
    category: MediaCategory;
    url: string;
    createdAt: string;
    published: boolean;
};

// 🔹 For now, same seed data as admin page (later we’ll connect a real DB)
const sampleMedia: MediaItem[] = [
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
        published: false, // this one won't show
    },
];

export default function MediaPage() {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState<"" | MediaType>("");
    const [categoryFilter, setCategoryFilter] = useState<"" | MediaCategory>("");

    const visibleMedia = useMemo(() => {
        return sampleMedia
            .filter((m) => m.published) // only published items are public
            .filter((m) => {
                const matchesSearch = `${m.title} ${m.url}`
                    .toLowerCase()
                    .includes(search.toLowerCase());

                const matchesType = typeFilter ? m.type === typeFilter : true;
                const matchesCategory = categoryFilter
                    ? m.category === categoryFilter
                    : true;

                return matchesSearch && matchesType && matchesCategory;
            })
            .sort(
                (a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
    }, [search, typeFilter, categoryFilter]);

    return (
        <>
            <Head>
                <title>Media / Sermons & Messages — Tsega Church</title>
            </Head>
            <Header />

            {/* Banner */}
            <section
                className="page-title"
                style={{
                    backgroundImage: "url(/assets/images/resource/bg-page-title2.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "110px 0 70px",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <div className="theme_container">
                    <h1 style={{ fontSize: "2.4rem", fontWeight: 700, marginBottom: 8 }}>
                        Media Library
                    </h1>
                    <p style={{ fontSize: "1.05rem", opacity: 0.9 }}>
                        Listen, watch, and catch up on what God is doing at Tsega Church.
                    </p>
                </div>
            </section>

            <main style={{ padding: "50px 0" }}>
                <div className="theme_container">
                    {/* Filters */}
                    <div
                        className="media-filters admin-card"
                        style={{
                            marginBottom: "30px",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.4rem",
                                margin: 0,
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <i className="fas fa-photo-video" /> Latest Media
                        </h2>

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
                                placeholder="Search title..."
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
                                style={{ maxWidth: "160px" }}
                            >
                                <option value="">All Types</option>
                                <option value="audio">Audio</option>
                                <option value="video">Video</option>
                                <option value="image">Images</option>
                                <option value="document">Documents</option>
                            </select>

                            <select
                                value={categoryFilter}
                                onChange={(e) =>
                                    setCategoryFilter(e.target.value as "" | MediaCategory)
                                }
                                className="admin-input"
                                style={{ maxWidth: "160px" }}
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

                    {/* Media Grid */}
                    <div className="row">
                        {visibleMedia.length === 0 && (
                            <div className="col-12">
                                <div className="admin-card" style={{ textAlign: "center" }}>
                                    <p style={{ marginBottom: 0 }}>
                                        No media found. Please check back soon!
                                    </p>
                                </div>
                            </div>
                        )}

                        {visibleMedia.map((m) => (
                            <div key={m.id} className="col-md-4 mb-4">
                                <div className="admin-card h-100">
                                    <div
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "#9ca3af",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {new Date(m.createdAt).toLocaleDateString("en-US")} ·{" "}
                                        <span style={{ textTransform: "capitalize" }}>{m.type}</span>{" "}
                                        · {m.category}
                                    </div>
                                    <h3 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
                                        {m.title}
                                    </h3>

                                    <p
                                        style={{
                                            fontSize: "0.9rem",
                                            color: "#6b7280",
                                            marginBottom: "14px",
                                        }}
                                    >
                                        {/* Short description based on type */}
                                        {m.type === "audio" && "Audio sermon message"}
                                        {m.type === "video" && "Video highlight or sermon"}
                                        {m.type === "image" && "Photo or gallery file"}
                                        {m.type === "document" && "Downloadable resource"}
                                    </p>

                                    {/* In a real app, these would be real URLs / players */}
                                    <a
                                        href="#"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        <i className="fas fa-download" />
                                        <span>Download / Open: {m.url}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
