import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

export default function FamilyMinistry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        familySize: "",
        childrenAges: "",
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
                familySize: "",
                childrenAges: "",
                interests: [],
                message: "",
            });
        }, 1000);
    };

    const teamMembers = [
        {
            name: "Pastor Mark & Lisa",
            role: "Family Ministry Directors",
            bio: "30+ years of marriage and ministry"
        },
        {
            name: "Brother Thomas",
            role: "Children's Coordinator",
            bio: "Passionate about raising godly kids"
        },
        {
            name: "Sister Grace",
            role: "Parenting Resources Leader",
            bio: "Mother of 4, counselor, mentor"
        },
        {
            name: "Brother Daniel",
            role: "Family Events Coordinator",
            bio: "Creating memorable family experiences"
        }
    ];

    const programs = [
        {
            icon: "👨‍👩‍👧‍👦",
            title: "Family Worship",
            description: "Special family-focused services and activities designed for all generations to worship together"
        },
        {
            icon: "📚",
            title: "Parenting Classes",
            description: "Biblical parenting workshops, marriage enrichment, and family devotional resources"
        },
        {
            icon: "🎉",
            title: "Family Events",
            description: "Regular family fun nights, picnics, game nights, and seasonal celebrations"
        },
        {
            icon: "🤝",
            title: "Marriage Ministry",
            description: "Premarital counseling, marriage retreats, and ongoing support for couples"
        }
    ];

    const upcomingEvents = [
        {
            title: "Family Movie Night",
            date: "December 15, 2024",
            time: "6:00 PM - 9:00 PM",
            location: "Fellowship Hall",
            description: "Popcorn, games, and a family-friendly film"
        },
        {
            title: "Marriage Enrichment Retreat",
            date: "January 20-22, 2025",
            time: "Weekend Getaway",
            location: "Mountain View Resort",
            description: "Invest in your marriage with teaching, fellowship, and relaxation"
        },
        {
            title: "Parent-Child Dedication",
            date: "February 2, 2025",
            time: "During Sunday Service",
            location: "Main Sanctuary",
            description: "Dedicate your children to the Lord in a special ceremony"
        },
        {
            title: "Spring Family Picnic",
            date: "March 15, 2025",
            time: "12:00 PM - 4:00 PM",
            location: "Community Park",
            description: "Food, games, fellowship, and fun for the whole family"
        },
        {
            title: "Vacation Bible School",
            date: "June 10-14, 2025",
            time: "9:00 AM - 12:00 PM",
            location: "Church Campus",
            description: "Summer program for kids with Bible stories, crafts, and activities"
        },
        {
            title: "Back to School Blessing",
            date: "August 20, 2025",
            time: "After Sunday Service",
            location: "Main Sanctuary",
            description: "Praying over students, teachers, and families for the new school year"
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

    const eventCardStyle = {
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
                <title>Family Ministry / የቤተሰብ አገልግሎት — Tsega Church</title>
            </Head>
            <Header />
            <PageBanner
                pageName="Family Ministry"
                pageTitle="Family Ministry / የቤተሰብ አገልግሎት"

            />



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
                                    The Family Ministry exists to strengthen and support families at every stage of
                                    life. We believe that God designed the family to be the primary place where faith
                                    is nurtured, love is expressed, and biblical values are lived out daily.
                                </p>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                    Through teaching, resources, events, and community, we help parents raise godly
                                    children, strengthen marriages, and create homes where Christ is at the center.
                                    Whether you're newlyweds, parents of young children, or empty nesters, we're here
                                    to walk alongside you.
                                </p>
                                <p style={{ fontSize: "1rem", lineHeight: "1.8", fontStyle: "italic", color: "#667eea" }}>
                                    "As for me and my household, we will serve the Lord." — Joshua 24:15
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="family-card" style={cardStyle}>
                                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>❤️</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                                    Family First
                                </h3>
                                <p style={{ fontSize: "1rem" }}>
                                    We believe strong families create strong churches and strong communities.
                                    Investing in your family is investing in the next generation of faith.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Programs
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Supporting families through every season of life
                        </p>
                    </div>

                    <div className="row">
                        {programs.map((program, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="family-card" style={cardStyle}>
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

            {/* Team Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Meet Our Team
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Experienced leaders committed to family wellness
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

            {/* Upcoming Events Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Upcoming Family Events
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Mark your calendars for these exciting family activities
                        </p>
                    </div>

                    <div className="row">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="event-card" style={eventCardStyle}>
                                    <h4 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#667eea" }}>
                                        {event.title}
                                    </h4>
                                    <div style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>📅 Date:</strong> {event.date}
                                        </p>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>🕐 Time:</strong> {event.time}
                                        </p>
                                        <p style={{ marginBottom: "12px" }}>
                                            <strong>📍 Location:</strong> {event.location}
                                        </p>
                                        <p style={{ fontSize: "0.9rem", color: "#666" }}>
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Family Resources
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Tools and materials to strengthen your family
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="family-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📖</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Devotional Guides
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Age-appropriate devotionals and prayer guides for family worship at home
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="family-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎓</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Parenting Library
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Books, videos, and articles on biblical parenting for different ages and stages
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="family-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>💑</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Marriage Resources
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Counseling referrals, retreat information, and materials for marriage enrichment
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="family-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🏠</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Home Worship Ideas
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Creative ways to incorporate worship, prayer, and Scripture into daily family life
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="family-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🤱</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    New Parent Support
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Mentorship programs, baby dedications, and resources for new and expecting parents
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="family-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>👨‍👩‍👧‍👦</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Family Counseling
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Professional Christian counseling services for families facing challenges
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Involved Form */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ textAlign: "center", marginBottom: "50px" }}>
                                <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                                    Get Involved
                                </h2>
                                <p style={{ fontSize: "1.1rem" }}>
                                    Connect your family with our ministry and community
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
                                    ✅ Thank you! We'll be in touch with more information about family ministry opportunities.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} style={formContainerStyle}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Your Name *
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
                                            Family Size
                                        </label>
                                        <select
                                            name="familySize"
                                            value={formData.familySize}
                                            onChange={handleChange}
                                            style={inputStyle}
                                        >
                                            <option value="">Select...</option>
                                            <option value="2">Just Married / 2 people</option>
                                            <option value="3">3 people</option>
                                            <option value="4">4 people</option>
                                            <option value="5+">5 or more people</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Children's Ages (if applicable)
                                        </label>
                                        <input
                                            type="text"
                                            name="childrenAges"
                                            value={formData.childrenAges}
                                            onChange={handleChange}
                                            placeholder="e.g., 5, 8, 12"
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "12px", fontWeight: "600" }}>
                                            What are you interested in? (check all that apply)
                                        </label>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                                            {["Family Events", "Parenting Classes", "Marriage Ministry", "Children's Programs", "Family Counseling", "Volunteer Opportunities"].map(interest => (
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
                                            Tell us about your family or any specific needs
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            style={{...inputStyle, resize: "vertical"}}
                                            placeholder="Share about your family, prayer requests, or questions you have..."
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
                                    {submitting ? "Submitting..." : "Submit Registration"}
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
                        Questions About Family Ministry?
                    </h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
                        We're here to support your family's spiritual journey!
                    </p>
                    <div style={{ fontSize: "1.2rem" }}>
                        <p style={{ marginBottom: "10px" }}>
                            📧 Email: <a href="mailto:family@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>family@tsegachurch.org</a>
                        </p>
                        <p>
                            📞 Phone: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>(123) 456-7890</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        .family-card,
        .event-card {
          transition: transform 0.3s;
        }
        
        .family-card:hover,
        .event-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .family-card,
        .dark-mode .event-card {
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
        
        
        
        .dark-mode section[style*="background: #f9f9f9"] {
          background: #1a1a1a !important;
        }
      `}</style>
        </>
    );
}