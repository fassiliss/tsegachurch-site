import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

type Event = {
    id: string;
    title: string;
    description: string;
    eventDate: string;
    eventTime: string;
    location: string;
    icon: string;
    category: string;
    isFeatured: boolean;
};

export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        loadEvents();
    }, []);

    async function loadEvents() {
        try {
            const res = await fetch("/api/public/events");
            if (!res.ok) throw new Error("Failed to load events");
            const data = await res.json();
            setEvents(data.events || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const categories = [...new Set(events.map((e) => e.category))];
    const filteredEvents = filter ? events.filter((e) => e.category === filter) : events;

    const formatDate = (dateStr: string) => {
        if (!dateStr) return "TBA";
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <>
            <Head>
                <title>Events | GEECN</title>
                <meta name="description" content="Upcoming events at Grace Ethiopian Evangelical Church of Nashville" />
            </Head>

            <Header />

            <PageBanner pageName="Events" pageTitle="Upcoming Events" />

            <main style={{ padding: "60px 0", backgroundColor: "var(--bg-secondary)" }}>
                <div className="theme_container">
                    
                    {/* Filter Buttons */}
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
                                All Events
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

                    {/* Events Grid */}
                    {loading ? (
                        <div style={{ textAlign: "center", padding: "60px 0" }}>
                            <p style={{ color: "var(--text-color)", fontSize: "18px" }}>Loading events...</p>
                        </div>
                    ) : filteredEvents.length === 0 ? (
                        <div style={{ textAlign: "center", padding: "60px 0" }}>
                            <p style={{ color: "var(--text-muted)", fontSize: "18px" }}>No upcoming events at this time. Check back soon!</p>
                        </div>
                    ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "25px" }}>
                            {filteredEvents.map((event) => (
                                <div
                                    key={event.id}
                                    style={{
                                        backgroundColor: "var(--bg-color)",
                                        borderRadius: "16px",
                                        overflow: "hidden",
                                        boxShadow: event.isFeatured 
                                            ? "0 8px 30px rgba(100, 50, 200, 0.2)" 
                                            : "0 4px 15px rgba(0,0,0,0.08)",
                                        border: event.isFeatured 
                                            ? "2px solid #6432c8" 
                                            : "1px solid var(--border-color)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                        position: "relative"
                                    }}
                                >
                                    {/* Featured Badge */}
                                    {event.isFeatured && (
                                        <div style={{
                                            position: "absolute",
                                            top: "15px",
                                            right: "15px",
                                            backgroundColor: "#6432c8",
                                            color: "white",
                                            padding: "4px 12px",
                                            borderRadius: "20px",
                                            fontSize: "12px",
                                            fontWeight: "600"
                                        }}>
                                            ⭐ Featured
                                        </div>
                                    )}

                                    {/* Icon Header */}
                                    <div style={{
                                        background: "linear-gradient(135deg, #6432c8 0%, #8b5cf6 100%)",
                                        padding: "30px",
                                        textAlign: "center"
                                    }}>
                                        <span style={{ fontSize: "4rem" }}>{event.icon}</span>
                                    </div>

                                    {/* Event Details */}
                                    <div style={{ padding: "25px" }}>
                                        <span style={{
                                            backgroundColor: "#e0e7ff",
                                            color: "#4338ca",
                                            padding: "4px 12px",
                                            borderRadius: "12px",
                                            fontSize: "12px",
                                            fontWeight: "500"
                                        }}>
                                            {event.category}
                                        </span>

                                        <h3 style={{
                                            fontSize: "1.4rem",
                                            fontWeight: "700",
                                            color: "var(--text-color)",
                                            margin: "15px 0 10px",
                                            lineHeight: "1.3"
                                        }}>
                                            {event.title}
                                        </h3>

                                        {event.description && (
                                            <p style={{
                                                color: "var(--text-muted)",
                                                fontSize: "15px",
                                                lineHeight: "1.6",
                                                marginBottom: "20px"
                                            }}>
                                                {event.description}
                                            </p>
                                        )}

                                        <div style={{
                                            borderTop: "1px solid var(--border-color)",
                                            paddingTop: "15px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "8px"
                                        }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-color)" }}>
                                                <span style={{ fontSize: "1.2rem" }}>📅</span>
                                                <span style={{ fontWeight: "600" }}>{formatDate(event.eventDate)}</span>
                                            </div>
                                            
                                            {event.eventTime && (
                                                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)" }}>
                                                    <span style={{ fontSize: "1.2rem" }}>⏰</span>
                                                    <span>{event.eventTime}</span>
                                                </div>
                                            )}
                                            
                                            {event.location && (
                                                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)" }}>
                                                    <span style={{ fontSize: "1.2rem" }}>📍</span>
                                                    <span>{event.location}</span>
                                                </div>
                                            )}
                                        </div>
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
