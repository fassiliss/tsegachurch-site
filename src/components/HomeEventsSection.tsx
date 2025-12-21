import { useState, useEffect } from "react";
import Link from "next/link";

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

export default function HomeEventsSection() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadEvents();
    }, []);

    async function loadEvents() {
        try {
            const res = await fetch("/api/public/events");
            if (!res.ok) throw new Error("Failed to load");
            const data = await res.json();
            setEvents((data.events || []).slice(0, 3));
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const formatDate = (dateStr: string) => {
        if (!dateStr) return { month: "TBA", day: "" };
        const date = new Date(dateStr);
        return {
            month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
            day: date.getDate().toString(),
        };
    };

    const fallbackEvents: Event[] = [
        {
            id: "1",
            icon: "📅",
            title: "Sunday Worship Service",
            description: "Join us every Sunday for worship and fellowship",
            eventDate: "",
            eventTime: "11:00 AM",
            location: "GEECN",
            category: "Worship",
            isFeatured: true,
        },
        {
            id: "2",
            icon: "📖",
            title: "Bible Study",
            description: "Grow deeper in God's Word with us",
            eventDate: "",
            eventTime: "Wednesday 7:00 PM",
            location: "GEECN",
            category: "Study",
            isFeatured: false,
        },
        {
            id: "3",
            icon: "🙏",
            title: "Prayer Meeting",
            description: "Come together in prayer for our church and community",
            eventDate: "",
            eventTime: "Friday 7:00 PM",
            location: "GEECN",
            category: "Prayer",
            isFeatured: false,
        },
    ];

    const displayEvents = events.length > 0 ? events : fallbackEvents;

    return (
        <section
            style={{ padding: "80px 0", background: "var(--bg-secondary, #f9f9f9)" }}
        >
            <div className="theme_container">
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
              style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  backgroundColor: "rgba(100, 50, 200, 0.1)",
                  color: "#6432c8",
                  borderRadius: "30px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "15px",
              }}
          >
            WHATS HAPPENING
          </span>

                    <h2
                        style={{
                            fontSize: "2.5rem",
                            marginBottom: "15px",
                            color: "var(--text-color, #333)",
                        }}
                    >
                        Upcoming Events
                    </h2>

                    <p
                        style={{
                            fontSize: "1.1rem",
                            color: "var(--text-muted, #666)",
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}
                    >
                        Join us for worship, fellowship, and community activities
                    </p>
                </div>

                {loading ? (
                    <div style={{ textAlign: "center", padding: "40px" }}>
                        <p style={{ color: "var(--text-muted, #666)" }}>Loading events...</p>
                    </div>
                ) : (
                    <div className="row">
                        {displayEvents.map((event) => {
                            const { month, day } = formatDate(event.eventDate);

                            return (
                                <div key={event.id} className="col-lg-4 col-md-6 mb-4">
                                    <div
                                        style={{
                                            background: "var(--bg-color, white)",
                                            borderRadius: "16px",
                                            overflow: "hidden",
                                            boxShadow: event.isFeatured
                                                ? "0 10px 40px rgba(100, 50, 200, 0.2)"
                                                : "0 4px 20px rgba(0,0,0,0.08)",
                                            transition: "transform 0.3s, box-shadow 0.3s",
                                            height: "100%",
                                            border: event.isFeatured
                                                ? "2px solid #6432c8"
                                                : "1px solid var(--border-color, #eee)",
                                            position: "relative",
                                        }}
                                    >
                                        {event.isFeatured && (
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "15px",
                                                    right: "15px",
                                                    backgroundColor: "#ff6b35",
                                                    color: "white",
                                                    padding: "4px 12px",
                                                    borderRadius: "20px",
                                                    fontSize: "11px",
                                                    fontWeight: 700,
                                                    zIndex: 10,
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                Featured
                                            </div>
                                        )}

                                        <div
                                            style={{
                                                background: event.isFeatured
                                                    ? "linear-gradient(135deg, #6432c8 0%, #8b5cf6 50%, #a78bfa 100%)"
                                                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                                padding: "25px",
                                                color: "white",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "20px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    backgroundColor: "rgba(255,255,255,0.2)",
                                                    borderRadius: "12px",
                                                    padding: "15px 20px",
                                                    textAlign: "center",
                                                    minWidth: "80px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize: "0.85rem",
                                                        fontWeight: 700,
                                                        letterSpacing: "1px",
                                                        marginBottom: "2px",
                                                    }}
                                                >
                                                    {month}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: day ? "2rem" : "1rem",
                                                        fontWeight: 800,
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    {day || "TBA"}
                                                </div>
                                            </div>

                                            <div>
                                                <div style={{ fontSize: "2.5rem", marginBottom: "5px" }}>
                                                    {event.icon}
                                                </div>
                                                <span
                                                    style={{
                                                        backgroundColor: "rgba(255,255,255,0.25)",
                                                        padding: "3px 10px",
                                                        borderRadius: "12px",
                                                        fontSize: "0.75rem",
                                                        fontWeight: 600,
                                                    }}
                                                >
                          {event.category}
                        </span>
                                            </div>
                                        </div>

                                        <div style={{ padding: "25px" }}>
                                            <h4
                                                style={{
                                                    fontSize: "1.25rem",
                                                    marginBottom: "12px",
                                                    fontWeight: 700,
                                                    color: "var(--text-color, #333)",
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {event.title}
                                            </h4>

                                            <p
                                                style={{
                                                    fontSize: "0.95rem",
                                                    color: "var(--text-muted, #666)",
                                                    marginBottom: "20px",
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {event.description}
                                            </p>

                                            <div
                                                style={{
                                                    borderTop: "1px solid var(--border-color, #eee)",
                                                    paddingTop: "15px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "8px",
                                                }}
                                            >
                                                {event.eventTime && (
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            fontSize: "0.9rem",
                                                            color: "var(--text-color, #555)",
                                                        }}
                                                    >
                            <span
                                style={{
                                    width: "28px",
                                    height: "28px",
                                    backgroundColor: "rgba(100, 50, 200, 0.1)",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                              ⏰
                            </span>
                                                        <span>{event.eventTime}</span>
                                                    </div>
                                                )}

                                                {event.location && (
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                            fontSize: "0.9rem",
                                                            color: "var(--text-color, #555)",
                                                        }}
                                                    >
                            <span
                                style={{
                                    width: "28px",
                                    height: "28px",
                                    backgroundColor: "rgba(100, 50, 200, 0.1)",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                              📍
                            </span>
                                                        <span>{event.location}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <Link href="/events">
                        <a
                            className="primary_btn-two"
                            style={{
                                padding: "16px 45px",
                                fontSize: "1.05rem",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                                borderRadius: "30px",
                            }}
                        >
                            <span>View All Events</span>
                            <span style={{ fontSize: "1.2rem" }}>→</span>
                        </a>
                    </Link>
                </div>

            </div>
        </section>
    );
}
