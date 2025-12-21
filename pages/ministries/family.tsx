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
            name: "TBD",
            role: "Family Ministry Directors",
            bio: "30+ years of marriage and ministry"
        },
        {
            name: "TBD",
            role: "Children's Coordinator",
            bio: "Passionate about raising godly kids"
        },
        {
            name: "TBD",
            role: "Parenting Resources Leader",
            bio: "Mother of 4, counselor, mentor"
        },
        {
            name: "TBD",
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
            <section className="family-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div style={{ paddingRight: "30px" }}>
                                <h2 className="family-title" style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                    Our Mission
                                </h2>
                                <p className="family-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                    The Family Ministry exists to strengthen and support families at every stage of
                                    life. We believe that God designed the family to be the primary place where faith
                                    is nurtured, love is expressed, and biblical values are lived out daily.
                                </p>
                                <p className="family-text" style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "20px" }}>
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
                            <div className="family-card">
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
            <section className="family-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="family-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Programs
                        </h2>
                        <p className="family-text" style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Supporting families through every season of life
                        </p>
                    </div>

                    <div className="row">
                        {programs.map((program, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="family-card">
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
            <section className="family-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="family-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Meet Our Team
                        </h2>
                        <p className="family-text" style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
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
                                    <h3 className="family-title" style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
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
                                    <p className="family-text" style={{ fontSize: "0.9rem" }}>
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="family-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="family-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Upcoming Family Events
                        </h2>
                        <p className="family-text" style={{ fontSize: "1.1rem" }}>
                            Mark your calendars for these exciting family activities
                        </p>
                    </div>

                    <div className="row">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="event-card">
                                    <h4 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#667eea" }}>
                                        {event.title}
                                    </h4>
                                    <div style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                                        <p className="family-text" style={{ marginBottom: "8px" }}>
                                            <strong>📅 Date:</strong> {event.date}
                                        </p>
                                        <p className="family-text" style={{ marginBottom: "8px" }}>
                                            <strong>🕐 Time:</strong> {event.time}
                                        </p>
                                        <p className="family-text" style={{ marginBottom: "12px" }}>
                                            <strong>📍 Location:</strong> {event.location}
                                        </p>
                                        <p className="family-text-muted" style={{ fontSize: "0.9rem" }}>
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
            <section className="family-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="family-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Family Resources
                        </h2>
                        <p className="family-text" style={{ fontSize: "1.1rem" }}>
                            Tools and materials to strengthen your family
                        </p>
                    </div>

                    <div className="row">
                        {[
                            { icon: "📖", title: "Devotional Guides", desc: "Age-appropriate devotionals and prayer guides for family worship at home" },
                            { icon: "🎓", title: "Parenting Library", desc: "Books, videos, and articles on biblical parenting for different ages and stages" },
                            { icon: "💑", title: "Marriage Resources", desc: "Counseling referrals, retreat information, and materials for marriage enrichment" },
                            { icon: "🏠", title: "Home Worship Ideas", desc: "Creative ways to incorporate worship, prayer, and Scripture into daily family life" },
                            { icon: "🤱", title: "New Parent Support", desc: "Mentorship programs, baby dedications, and resources for new and expecting parents" },
                            { icon: "👨‍👩‍👧‍👦", title: "Family Counseling", desc: "Professional Christian counseling services for families facing challenges" }
                        ].map((resource, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="family-card">
                                    <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{resource.icon}</div>
                                    <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                        {resource.title}
                                    </h4>
                                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                        {resource.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Involved Form */}
            <section className="family-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ textAlign: "center", marginBottom: "50px" }}>
                                <h2 className="family-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                                    Get Involved
                                </h2>
                                <p className="family-text" style={{ fontSize: "1.1rem" }}>
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

                            <form onSubmit={handleSubmit} className="family-form">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="family-label">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="family-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="family-label">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="family-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="family-label">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="family-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="family-label">
                                            Family Size
                                        </label>
                                        <select
                                            name="familySize"
                                            value={formData.familySize}
                                            onChange={handleChange}
                                            className="family-input"
                                        >
                                            <option value="">Select...</option>
                                            <option value="2">Just Married / 2 people</option>
                                            <option value="3">3 people</option>
                                            <option value="4">4 people</option>
                                            <option value="5+">5 or more people</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label className="family-label">
                                            Children's Ages (if applicable)
                                        </label>
                                        <input
                                            type="text"
                                            name="childrenAges"
                                            value={formData.childrenAges}
                                            onChange={handleChange}
                                            placeholder="e.g., 5, 8, 12"
                                            className="family-input"
                                        />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label className="family-label" style={{ marginBottom: "12px" }}>
                                            What are you interested in? (check all that apply)
                                        </label>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                                            {["Family Events", "Parenting Classes", "Marriage Ministry", "Children's Programs", "Family Counseling", "Volunteer Opportunities"].map(interest => (
                                                <label key={interest} className="family-checkbox-label">
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
                                        <label className="family-label">
                                            Tell us about your family or any specific needs
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="family-input"
                                            style={{ resize: "vertical" }}
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
                    <h2 style={{ fontSize: "2.2rem", marginBottom: "20px", color: "white" }}>
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
                /* Light Mode Defaults */
                .family-section {
                    background: #ffffff;
                }

                .family-section-alt {
                    background: #f9f9f9;
                }

                .family-title {
                    color: #333;
                }

                .family-text {
                    color: #666;
                }

                .family-text-muted {
                    color: #666;
                }

                .family-card {
                    background: white;
                    padding: 40px 30px;
                    border-radius: 12px;
                    text-align: center;
                    height: 100%;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                    transition: transform 0.3s;
                }

                .family-card:hover {
                    transform: translateY(-5px);
                }

                .family-card h3,
                .family-card h4 {
                    color: #333;
                }

                .family-card p {
                    color: #666;
                }

                .event-card {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    height: 100%;
                    text-align: left;
                    transition: transform 0.3s;
                }

                .event-card:hover {
                    transform: translateY(-5px);
                }

                .family-form {
                    background: #f9f9f9;
                    padding: 40px;
                    border-radius: 12px;
                }

                .family-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: #333;
                }

                .family-input {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 1rem;
                    background: white;
                    color: #333;
                }

                .family-checkbox-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    color: #333;
                }

                /* Dark Mode Styles */
                .dark-mode .family-section {
                    background: #121212 !important;
                }

                .dark-mode .family-section-alt {
                    background: #1a1a1a !important;
                }

                .dark-mode .family-title {
                    color: #ffffff !important;
                }

                .dark-mode .family-text {
                    color: #cccccc !important;
                }

                .dark-mode .family-text-muted {
                    color: #999999 !important;
                }

                .dark-mode .family-card {
                    background: #2a2a2a !important;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
                }

                .dark-mode .family-card h3,
                .dark-mode .family-card h4 {
                    color: #ffffff !important;
                }

                .dark-mode .family-card p {
                    color: #cccccc !important;
                }

                .dark-mode .event-card {
                    background: #2a2a2a !important;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
                }

                .dark-mode .event-card h4 {
                    color: #667eea !important;
                }

                .dark-mode .family-form {
                    background: #2a2a2a !important;
                }

                .dark-mode .family-label {
                    color: #ffffff !important;
                }

                .dark-mode .family-input {
                    background: #3a3a3a !important;
                    border-color: #444 !important;
                    color: #ffffff !important;
                }

                .dark-mode .family-input::placeholder {
                    color: #888 !important;
                }

                .dark-mode .family-checkbox-label {
                    color: #ffffff !important;
                }

                .dark-mode .family-checkbox-label span {
                    color: #cccccc !important;
                }
            `}</style>
        </>
    );
}