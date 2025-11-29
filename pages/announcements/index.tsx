import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

type Announcement = {
    id: string;
    title: string;
    message: string;
    category: string;
    isPinned: boolean;
    scheduledFor?: string;
    createdAt: string;
};

export default function AnnouncementsPage() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        loadAnnouncements();
    }, []);

    async function loadAnnouncements() {
        try {
            const res = await fetch("/api/public/announcements");
            if (!res.ok) throw new Error("Failed to load announcements");
            const data = await res.json();
            setAnnouncements(data.announcements || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const filteredAnnouncements = filter
        ? announcements.filter((a) => a.category === filter)
        : announcements;

    const categories = [...new Set(announcements.map((a) => a.category))];

    return (
        <>
            <Head>
                <title>Announcements | GEECN</title>
                <meta name="description" content="Stay updated with the latest announcements from Grace Ethiopian Evangelical Church of Nashville" />
            </Head>

            <Header />

            <PageBanner pageName="Announcements" pageTitle="Church Announcements" />

            <main style={{ padding: "60px 0", backgroundColor: "var(--bg-secondary)" }}>
                <div className="theme_container">
                    {/* Filter */}
                    {categories.length > 1 && (
                        <div style={{ marginBottom: "30px", textAlign: "center" }}>
                            <button
                                onClick={() => setFilter("")}
                                style={{
                                    padding: "8px 20px",
                                    margin: "5px",
                                    border: "none",
                                    borderRadius: "20px",
                                    backgroundColor: filter === "" ? "#6432c8" : "var(--bg-color)",
                                    color: filter === "" ? "white" : "var(--text-color)",
                                    cursor: "pointer",
                                    fontWeight: "500",
                                    transition: "all 0.3s"
                                }}
                            >
                                All
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    style={{
                                        padding: "8px 20px",
                                        margin: "5px",
                                        border: "none",
                                        borderRadius: "20px",
                                        backgroundColor: filter === cat ? "#6432c8" : "var(--bg-color)",
                                        color: filter === cat ? "white" : "var(--text-color)",
                                        cursor: "pointer",
                                        fontWeight: "500",
                                        transition: "all 0.3s"
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Announcements List */}
                    {loading ? (
                        <div style={{ textAlign: "center", padding: "60px 0" }}>
                            <p style={{ color: "var(--text-color)", fontSize: "18px" }}>Loading announcements...</p>
                        </div>
                    ) : filteredAnnouncements.length === 0 ? (
                        <div style={{ textAlign: "center", padding: "60px 0" }}>
                            <p style={{ color: "var(--text-muted)", fontSize: "18px" }}>No announcements at this time.</p>
                        </div>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            {filteredAnnouncements.map((announcement) => (
                                <div
                                    key={announcement.id}
                                    style={{
                                        backgroundColor: "var(--bg-color)",
                                        borderRadius: "12px",
                                        padding: "30px",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                                        border: announcement.isPinned ? "2px solid #6432c8" : "1px solid var(--border-color)",
                                        position: "relative"
                                    }}
                                >
                                    {announcement.isPinned && (
                                        <span style={{
                                            position: "absolute",
                                            top: "-10px",
                                            right: "20px",
                                            backgroundColor: "#6432c8",
                                            color: "white",
                                            padding: "4px 12px",
                                            borderRadius: "12px",
                                            fontSize: "12px",
                                            fontWeight: "600"
                                        }}>
                                            📌 Pinned
                                        </span>
                                    )}

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "15px", flexWrap: "wrap", gap: "10px" }}>
                                        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--text-color)", margin: 0 }}>
                                            {announcement.title}
                                        </h2>
                                        <span style={{
                                            backgroundColor: "#e0e7ff",
                                            color: "#4338ca",
                                            padding: "4px 12px",
                                            borderRadius: "8px",
                                            fontSize: "13px",
                                            fontWeight: "500"
                                        }}>
                                            {announcement.category}
                                        </span>
                                    </div>

                                    <p style={{ 
                                        color: "var(--text-color)", 
                                        fontSize: "16px", 
                                        lineHeight: "1.7",
                                        marginBottom: "15px",
                                        whiteSpace: "pre-wrap"
                                    }}>
                                        {announcement.message}
                                    </p>

                                    <div style={{ 
                                        display: "flex", 
                                        justifyContent: "space-between", 
                                        alignItems: "center",
                                        borderTop: "1px solid var(--border-color)",
                                        paddingTop: "15px",
                                        marginTop: "10px"
                                    }}>
                                        <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                                            Posted: {new Date(announcement.createdAt).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric' 
                                            })}
                                        </span>
                                        {announcement.scheduledFor && (
                                            <span style={{ 
                                                color: "#f97316", 
                                                fontSize: "14px",
                                                fontWeight: "500"
                                            }}>
                                                📅 Event: {new Date(announcement.scheduledFor).toLocaleDateString()}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
