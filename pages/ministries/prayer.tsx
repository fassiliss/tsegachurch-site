import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function PrayerMinistry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        availability: "",
        interests: [] as string[],
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (interest: string) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSuccess(true);
            setSubmitting(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                availability: "",
                interests: [],
                message: "",
            });
        }, 1000);
    };

    const teamMembers = [
        {
            name: "TBD",
            role: "Prayer Ministry Director",
            bio: "Leading prayer warriors for 15+ years"
        },
        {
            name: "TBD",
            role: "Intercessory Prayer Coordinator",
            bio: "Passionate about intercession and fasting"
        },
        {
            name: "TBD",
            role: "Prayer Chain Leader",
            bio: "Mobilizing prayer networks effectively"
        },
        {
            name: "TBD",
            role: "Prayer Room Coordinator",
            bio: "Creating spaces for encountering God"
        }
    ];

    const prayerPrograms = [
        {
            icon: "🙏",
            title: "Corporate Prayer",
            description: "Weekly prayer gatherings where we unite in intercession for our church, community, and nation"
        },
        {
            icon: "⛓️",
            title: "Prayer Chain",
            description: "24/7 prayer network responding to urgent needs and standing in the gap for others"
        },
        {
            icon: "🌅",
            title: "Early Morning Prayer",
            description: "Starting the day in God's presence through powerful morning prayer sessions"
        },
        {
            icon: "🛐",
            title: "Prayer Room",
            description: "Dedicated space for personal prayer, meditation, and seeking God's face"
        }
    ];

    const prayerSchedule = [
        {
            name: "Sunday Morning Prayer",
            schedule: "Sundays, 9:00 AM",
            focus: "Pre-Service Intercession",
            location: "Prayer Room"
        },
        {
            name: "Wednesday Night Prayer",
            schedule: "Wednesdays, 7:00 PM",
            focus: "Corporate Prayer & Worship",
            location: "Main Sanctuary"
        },
        {
            name: "Early Morning Prayer",
            schedule: "Daily, 5:30 AM",
            focus: "Personal Devotion Time",
            location: "Prayer Chapel"
        },
        {
            name: "Friday Night Vigil",
            schedule: "1st Friday, 10:00 PM",
            focus: "All-Night Prayer & Fasting",
            location: "Main Sanctuary"
        },
        {
            name: "Prayer Walk",
            schedule: "Saturdays, 7:00 AM",
            focus: "Neighborhood Intercession",
            location: "Community Routes"
        },
        {
            name: "Intercessory Prayer Team",
            schedule: "Tuesdays, 6:00 PM",
            focus: "Strategic Spiritual Warfare",
            location: "Conference Room"
        }
    ];

    const cardStyle = {
        background: "white",
        padding: "40px 30px",
        borderRadius: "12px",
        textAlign: "center" as const,
        height: "100%",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        transition: "transform 0.3s"
    };

    const scheduleCardStyle = {
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        height: "100%",
        textAlign: "left" as const
    };

    const formContainerStyle = {
        background: "#f9f9f9",
        padding: "40px",
        borderRadius: "12px"
    };

    const inputStyle = {
        width: "100%",
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        fontSize: "1rem"
    };

    return (
        <>
            <Head>
                <title>Prayer Ministry / የጸሎት አገልግሎት — Tsega Church</title>
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
                            Prayer Ministry
                        </h1>
                        <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "10px" }}>
                            የጸሎት አገልግሎት
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Connecting Heaven and Earth Through Powerful Intercession
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div style={{ paddingRight: "30px" }}>
                                <h2 style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                    Our Mission
                                </h2>
                                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                    The Prayer Ministry exists to create a culture of prayer in our church and
                                    community. We believe prayer is not just a religious activity—it's the lifeline
                                    of our relationship with God and the foundation of everything we do as a church.
                                </p>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                    Through corporate prayer gatherings, intercessory teams, prayer chains, and
                                    teaching on prayer, we equip believers to develop powerful prayer lives and
                                    see God move in miraculous ways.
                                </p>
                                <p style={{ fontSize: "1rem", lineHeight: "1.8", fontStyle: "italic", color: "#667eea" }}>
                                    "The prayer of a righteous person is powerful and effective." — James 5:16
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="prayer-card" style={cardStyle}>
                                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🕊️</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                                    The Power of Prayer
                                </h3>
                                <p style={{ fontSize: "1rem" }}>
                                    Prayer changes things. It moves the hand of God, defeats the enemy,
                                    transforms hearts, heals bodies, and ushers in God's presence and power.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prayer Programs Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Prayer Programs
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Multiple ways to connect with God through prayer
                        </p>
                    </div>

                    <div className="row">
                        {prayerPrograms.map((program, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="prayer-card" style={cardStyle}>
                                    <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{program.icon}</div>
                                    <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>
                                        {program.title}
                                    </h3>
                                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                        {program.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Leaders Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Meet Our Leaders
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Dedicated prayer warriors leading intercession
                        </p>
                    </div>

                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div style={{ textAlign: "center", padding: "20px" }}>
                                    <div style={{
                                        width: "180px",
                                        height: "180px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        margin: "0 auto 20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "4rem",
                                        color: "white"
                                    }}>
                                        👤
                                    </div>
                                    <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
                                        {member.name}
                                    </h3>
                                    <p style={{
                                        fontSize: "1rem",
                                        color: "#667eea",
                                        fontWeight: "600",
                                        marginBottom: "10px"
                                    }}>
                                        {member.role}
                                    </p>
                                    <p style={{ fontSize: "0.9rem" }}>
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prayer Schedule Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Prayer Schedule
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Join us for regular prayer gatherings throughout the week
                        </p>
                    </div>

                    <div className="row">
                        {prayerSchedule.map((prayer, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="schedule-card" style={scheduleCardStyle}>
                                    <h4 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#667eea" }}>
                                        {prayer.name}
                                    </h4>
                                    <div style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>🕐 Schedule:</strong> {prayer.schedule}
                                        </p>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>🎯 Focus:</strong> {prayer.focus}
                                        </p>
                                        <p style={{ marginBottom: "0" }}>
                                            <strong>📍 Location:</strong> {prayer.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prayer Requests Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <h2 style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                Submit a Prayer Request
                            </h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "25px" }}>
                                We believe in the power of united prayer. Share your prayer needs with us,
                                and our prayer team will stand with you in faith, believing God for breakthrough,
                                healing, provision, and miracles.
                            </p>
                            <div style={{
                                background: "#f9f9f9",
                                padding: "30px",
                                borderRadius: "12px",
                                marginBottom: "20px"
                            }}>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    How We Pray for You
                                </h4>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem" }}>
                                    <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✓</span>
                                        Your request goes to our intercessory prayer team
                                    </li>
                                    <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✓</span>
                                        We pray daily for all submitted requests
                                    </li>
                                    <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✓</span>
                                        All requests are kept confidential
                                    </li>
                                    <li style={{ marginBottom: "0", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✓</span>
                                        We stand in faith believing God for answers
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="prayer-card" style={{
                                ...cardStyle,
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white",
                                textAlign: "left" as const
                            }}>
                                <div style={{ fontSize: "4rem", marginBottom: "20px", textAlign: "center" }}>🙏</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "white", textAlign: "center" }}>
                                    We're Here to Pray
                                </h3>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
                                    No request is too big or too small for God. Whether you need healing, breakthrough,
                                    wisdom, or encouragement, we want to pray with you.
                                </p>
                                <ul style={{
                                    listStyle: "none",
                                    padding: 0,
                                    fontSize: "0.95rem",
                                    lineHeight: "2"
                                }}>
                                    <li>✓ Healing & Health</li>
                                    <li>✓ Financial Breakthrough</li>
                                    <li>✓ Relationship Restoration</li>
                                    <li>✓ Guidance & Direction</li>
                                    <li>✓ Deliverance & Freedom</li>
                                    <li>✓ Salvation of Loved Ones</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Prayer Resources
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Tools to help you grow in your prayer life
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="prayer-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📖</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Prayer Guides
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Downloadable guides for different types of prayer: intercession, spiritual warfare, thanksgiving
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="prayer-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📝</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Prayer Journal
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Templates and tools to help you track your prayers and see God's faithfulness
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="prayer-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎓</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Prayer School
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Monthly classes teaching biblical principles of effective, fervent prayer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join the Team Form */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ textAlign: "center", marginBottom: "50px" }}>
                                <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                                    Join the Prayer Team
                                </h2>
                                <p style={{ fontSize: "1.1rem" }}>
                                    Be part of our intercessory prayer ministry
                                </p>
                            </div>

                            {success && (
                                <div style={{
                                    background: "#d4edda",
                                    border: "1px solid #c3e6cb",
                                    color: "#155724",
                                    padding: "15px",
                                    borderRadius: "8px",
                                    marginBottom: "30px",
                                    textAlign: "center"
                                }}>
                                    ✅ Thank you! We'll contact you soon about joining the prayer team.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} style={formContainerStyle}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Availability
                                        </label>
                                        <select
                                            name="availability"
                                            value={formData.availability}
                                            onChange={handleChange}
                                            style={inputStyle}
                                        >
                                            <option value="">Select...</option>
                                            <option value="mornings">Early Mornings</option>
                                            <option value="evenings">Evenings</option>
                                            <option value="weekends">Weekends</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "12px", fontWeight: "600" }}>
                                            Areas of Interest (check all that apply)
                                        </label>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                                            {["Intercessory Prayer", "Prayer Chain", "Early Morning Prayer", "Corporate Prayer", "Prayer Room Ministry", "Prayer Counseling"].map(interest => (
                                                <label key={interest} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.interests.includes(interest)}
                                                        onChange={() => handleCheckbox(interest)}
                                                        style={{ marginRight: "8px", width: "18px", height: "18px" }}
                                                    />
                                                    <span>{interest}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Tell us about your prayer life and why you want to join
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            style={{...inputStyle, resize: "vertical"}}
                                            placeholder="Share your testimony, prayer experience, or heart for intercession..."
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="primary_btn-two"
                                    style={{
                                        padding: "14px 40px",
                                        fontSize: "1.1rem",
                                        marginTop: "10px"
                                    }}
                                >
                                    {submitting ? "Submitting..." : "Submit Application"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section style={{
                padding: "60px 0",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                textAlign: "center"
            }}>
                <div className="theme_container">
                    <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
                        Questions About Prayer Ministry?
                    </h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
                        We'd love to pray with you and help you grow in your prayer life!
                    </p>
                    <div style={{ fontSize: "1.2rem" }}>
                        <p style={{ marginBottom: "10px" }}>
                            📧 Email: <a href="mailto:prayer@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>prayer@tsegachurch.org</a>
                        </p>
                        <p>
                            📞 Phone: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>(123) 456-7890</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        .prayer-card,
        .schedule-card {
          transition: transform 0.3s;
        }
        
        .prayer-card:hover,
        .schedule-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .prayer-card,
        .dark-mode .schedule-card {
          background: #1a1a1a !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
        }
        
        .dark-mode form {
          background: #1a1a1a !important;
        }
        
        .dark-mode input,
        .dark-mode select,
        .dark-mode textarea {
          background: #2a2a2a !important;
          border-color: #444 !important;
          color: #fff !important;
        }
        
        .dark-mode h1,
        .dark-mode h2,
        .dark-mode h3,
        .dark-mode h4 {
          color: #fff !important;
        }
        
        .dark-mode p,
        .dark-mode li {
          color: #ccc !important;
        }
        
        .dark-mode label {
          color: #fff !important;
        }
        
        .dark-mode section {
          background: #0d0d0d !important;
        }
        
        .dark-mode section[style*="background: #f9f9f9"] {
          background: #1a1a1a !important;
        }
        
        .dark-mode div[style*="background: #f9f9f9"] {
          background: #2a2a2a !important;
        }
      `}</style>
        </>
    );
}