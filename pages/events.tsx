import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function Events() {
    const allEvents = [
        {
            date: "Dec 15",
            year: "2024",
            icon: "📅",
            title: "Family Movie Night",
            description: "Join us for popcorn, games, and a family-friendly film. A great evening for the whole family to enjoy together.",
            time: "6:00 PM - 9:00 PM",
            location: "Fellowship Hall"
        },
        {
            date: "Jan 20-22",
            year: "2025",
            icon: "💑",
            title: "Marriage Retreat",
            description: "Weekend getaway for couples to strengthen their marriage through teaching, fellowship, and relaxation.",
            time: "Weekend Getaway",
            location: "Mountain View Resort"
        },
        {
            date: "Feb 2",
            year: "2025",
            icon: "👶",
            title: "Child Dedication",
            description: "Dedicate your children to the Lord in a special ceremony during our Sunday service.",
            time: "During Sunday Service",
            location: "Main Sanctuary"
        },
        {
            date: "Mar 15",
            year: "2025",
            icon: "🎉",
            title: "Spring Family Picnic",
            description: "Food, games, fellowship, and fun for the whole family at our annual spring gathering.",
            time: "12:00 PM - 4:00 PM",
            location: "Community Park"
        },
        {
            date: "Jun 10-14",
            year: "2025",
            icon: "📖",
            title: "Vacation Bible School",
            description: "Summer program for kids with Bible stories, crafts, games, and activities.",
            time: "9:00 AM - 12:00 PM",
            location: "Church Campus"
        },
        {
            date: "Aug 20",
            year: "2025",
            icon: "🎒",
            title: "Back to School Blessing",
            description: "Praying over students, teachers, and families for the new school year.",
            time: "After Sunday Service",
            location: "Main Sanctuary"
        }
    ];

    return (
        <>
            <Head>
                <title>Events — Tsega Church</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <section
                className="page-title"
                style={{
                    backgroundImage: "url(/assets/images/resource/bg-page-title2.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "100px 0"
                }}
            >
                <div className="theme_container">
                    <div className="content-box" style={{ textAlign: "center" }}>
                        <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "15px" }}>
                            Upcoming Events
                        </h1>
                        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem" }}>
                            Join us for these exciting church activities
                        </p>
                    </div>
                </div>
            </section>

            {/* All Events Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row">
                        {allEvents.map((event, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div
                                    className="event-card"
                                    style={{
                                        background: "white",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                        transition: "transform 0.3s",
                                        height: "100%"
                                    }}
                                >
                                    <div style={{
                                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        padding: "30px",
                                        color: "white",
                                        textAlign: "center"
                                    }}>
                                        <div style={{ fontSize: "3rem", marginBottom: "10px" }}>
                                            {event.icon}
                                        </div>
                                        <h3 style={{
                                            fontSize: "1.5rem",
                                            marginBottom: "10px",
                                            color: "white",
                                            fontWeight: "600"
                                        }}>
                                            {event.date}
                                        </h3>
                                        <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                                            {event.year}
                                        </p>
                                    </div>
                                    <div style={{ padding: "30px" }}>
                                        <h4 style={{
                                            fontSize: "1.3rem",
                                            marginBottom: "15px",
                                            fontWeight: "600"
                                        }}>
                                            {event.title}
                                        </h4>
                                        <p style={{
                                            fontSize: "0.95rem",
                                            color: "#666",
                                            marginBottom: "15px",
                                            lineHeight: "1.6"
                                        }}>
                                            {event.description}
                                        </p>
                                        <div style={{ fontSize: "0.9rem", color: "#667eea" }}>
                                            <p style={{ marginBottom: "5px" }}>
                                                ⏰ {event.time}
                                            </p>
                                            <p>📍 {event.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}