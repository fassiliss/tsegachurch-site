import Head from "next/head";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
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
    status: string;
    createdAt: string;
};

export default function AdminEventsPage() {
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
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editing, setEditing] = useState<Event | null>(null);
    const [form, setForm] = useState({
        title: "",
        description: "",
        eventDate: "",
        eventTime: "",
        location: "",
        icon: "📅",
        category: "General",
        isFeatured: false,
        status: "draft",
    });

    const icons = ["📅", "🎉", "📖", "👶", "💑", "🙏", "🎵", "⛪", "🍽️", "🏃"];

    useEffect(() => {
        loadEvents();
    }, []);

    async function loadEvents() {
        try {
            setLoading(true);
            const res = await fetch("/api/events");
            if (!res.ok) throw new Error("Failed to load events");
            const data = await res.json();
            setEvents(data.events || []);
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
                const res = await fetch(`/api/events/${editing.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
                if (!res.ok) throw new Error("Failed to update event");
                setEditing(null);
            } else {
                const res = await fetch("/api/events", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
                if (!res.ok) throw new Error("Failed to create event");
            }

            setForm({
                title: "",
                description: "",
                eventDate: "",
                eventTime: "",
                location: "",
                icon: "📅",
                category: "General",
                isFeatured: false,
                status: "draft",
            });
            loadEvents();
        } catch (err: any) {
            setError(err.message);
        }
    }

    function handleEdit(event: Event) {
        setEditing(event);
        setForm({
            title: event.title,
            description: event.description,
            eventDate: event.eventDate || "",
            eventTime: event.eventTime,
            location: event.location,
            icon: event.icon,
            category: event.category,
            isFeatured: event.isFeatured,
            status: event.status,
        });
    }

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this event?")) return;

        try {
            const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete event");
            loadEvents();
        } catch (err: any) {
            setError(err.message);
        }
    }

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
                <title>Events Manager — Admin</title>
            </Head>
            <Header />
            <PageBanner pageName="Events" pageTitle="Manage Events" />

            <main style={{ padding: "40px 0 60px", backgroundColor: "var(--bg-secondary)" }}>
                <div className="theme_container">
                    {error && (
                        <div style={{ padding: "12px 16px", backgroundColor: "#fee", color: "#c33", borderRadius: "8px", marginBottom: "20px" }}>
                            {error}
                        </div>
                    )}

                    <div style={{ backgroundColor: "var(--bg-color)", borderRadius: "12px", padding: "30px", marginBottom: "30px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", border: "1px solid var(--border-color)" }}>
                        <h2 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
                            {editing ? "Edit Event" : "Create Event"}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <label style={labelStyle}>Title *</label>
                                    <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} style={inputStyle} />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Icon</label>
                                    <select value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} style={inputStyle}>
                                        {icons.map((icon) => (
                                            <option key={icon} value={icon}>{icon}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-12 mb-3">
                                    <label style={labelStyle}>Description</label>
                                    <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} style={inputStyle} />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Date</label>
                                    <input type="date" value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })} style={inputStyle} />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Time</label>
                                    <input type="text" placeholder="e.g. 6:00 PM - 9:00 PM" value={form.eventTime} onChange={(e) => setForm({ ...form, eventTime: e.target.value })} style={inputStyle} />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Location</label>
                                    <input type="text" placeholder="e.g. Fellowship Hall" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} style={inputStyle} />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Category</label>
                                    <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={inputStyle}>
                                        <option>General</option>
                                        <option>Worship</option>
                                        <option>Youth</option>
                                        <option>Kids</option>
                                        <option>Women</option>
                                        <option>Men</option>
                                        <option>Family</option>
                                        <option>Outreach</option>
                                    </select>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label style={labelStyle}>Status</label>
                                    <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} style={inputStyle}>
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>

                                <div className="col-md-4 mb-3 d-flex align-items-end">
                                    <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-color)" }}>
                                        <input type="checkbox" checked={form.isFeatured} onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })} />
                                        <span>Featured Event</span>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="primary_btn-two">
                                {editing ? "Update Event" : "Create Event"}
                            </button>
                            {editing && (
                                <button type="button" className="admin-secondary-btn" style={{ marginLeft: 12 }} onClick={() => {
                                    setEditing(null);
                                    setForm({ title: "", description: "", eventDate: "", eventTime: "", location: "", icon: "📅", category: "General", isFeatured: false, status: "draft" });
                                }}>
                                    Cancel
                                </button>
                            )}
                        </form>
                    </div>

                    <div style={{ backgroundColor: "var(--bg-color)", borderRadius: "12px", padding: "30px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", border: "1px solid var(--border-color)" }}>
                        <h2 style={{ fontSize: "1.5rem", marginBottom: 16, color: "var(--text-color)" }}>
                            All Events ({events.length})
                        </h2>

                        {loading ? (
                            <p style={{ color: "var(--text-color)", textAlign: "center", padding: "40px 0" }}>Loading events...</p>
                        ) : events.length === 0 ? (
                            <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "40px 0" }}>No events yet. Create one above!</p>
                        ) : (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
                                {events.map((event) => (
                                    <div key={event.id} style={{ border: "1px solid var(--border-color)", borderRadius: 8, padding: 16, backgroundColor: event.isFeatured ? "#fef3c7" : "var(--bg-color)" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                                <span style={{ fontSize: "2rem" }}>{event.icon}</span>
                                                <div>
                                                    <h3 style={{ fontSize: "1.1rem", marginBottom: 4, color: "var(--text-color)" }}>
                                                        {event.isFeatured && "⭐ "}{event.title}
                                                    </h3>
                                                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                                        <span style={{ background: "#e0e7ff", padding: "2px 8px", borderRadius: 4, marginRight: 8 }}>{event.category}</span>
                                                        <span style={{ background: event.status === "published" ? "#d1fae5" : "#f3f4f6", padding: "2px 8px", borderRadius: 4 }}>{event.status}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {event.description && (
                                            <p style={{ margin: "8px 0", color: "var(--text-color)", fontSize: "0.9rem" }}>{event.description}</p>
                                        )}
                                        
                                        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 12 }}>
                                            {event.eventDate && <div>📅 {new Date(event.eventDate).toLocaleDateString()}</div>}
                                            {event.eventTime && <div>⏰ {event.eventTime}</div>}
                                            {event.location && <div>📍 {event.location}</div>}
                                        </div>

                                        <div style={{ display: "flex", gap: 8 }}>
                                            <button className="admin-secondary-btn" onClick={() => handleEdit(event)}>Edit</button>
                                            <button className="admin-secondary-btn" style={{ background: "#dc2626", color: "white" }} onClick={() => handleDelete(event.id)}>Delete</button>
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
