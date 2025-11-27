import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

export default function EvangelismMinistry() {
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
            name: "Pastor Samuel",
            role: "Evangelism Director",
            bio: "Leading souls to Christ for 20+ years"
        },
        {
            name: "Sister Martha",
            role: "Community Outreach Coordinator",
            bio: "Passionate about serving the community"
        },
        {
            name: "Brother Paul",
            role: "Mission Trips Leader",
            bio: "Organizing global mission opportunities"
        },
        {
            name: "Sister Esther",
            role: "Evangelism Training Coordinator",
            bio: "Equipping believers to share their faith"
        }
    ];

    const outreachPrograms = [
        {
            icon: "🌍",
            title: "Community Outreach",
            description: "Serving our local community through food banks, shelter support, and neighborhood ministry"
        },
        {
            icon: "✈️",
            title: "Mission Trips",
            description: "Short-term and long-term mission opportunities to spread the Gospel locally and globally"
        },
        {
            icon: "🚪",
            title: "Door-to-Door Ministry",
            description: "Personal evangelism reaching neighbors with the good news of Jesus Christ"
        },
        {
            icon: "🏥",
            title: "Hospital & Prison Ministry",
            description: "Bringing hope and the Gospel to those in hospitals, nursing homes, and correctional facilities"
        }
    ];

    const outreachActivities = [
        {
            name: "Weekly Street Evangelism",
            schedule: "Saturdays, 10:00 AM",
            focus: "Downtown Outreach",
            location: "Meet at Church Parking Lot"
        },
        {
            name: "Community Food Distribution",
            schedule: "2nd Saturday, 9:00 AM",
            focus: "Serving Families in Need",
            location: "Church Fellowship Hall"
        },
        {
            name: "Prison Ministry Visit",
            schedule: "1st Sunday, 2:00 PM",
            focus: "Worship & Bible Study",
            location: "Local Correctional Facility"
        },
        {
            name: "Hospital Visitation Team",
            schedule: "Wednesdays, 3:00 PM",
            focus: "Prayer & Encouragement",
            location: "Area Hospitals"
        },
        {
            name: "Neighborhood Canvassing",
            schedule: "Monthly, Various Times",
            focus: "Door-to-Door Gospel Sharing",
            location: "Different Neighborhoods"
        },
        {
            name: "Evangelism Training",
            schedule: "1st & 3rd Thursdays, 7:00 PM",
            focus: "Equipping for Effective Witnessing",
            location: "Church Training Room"
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

    const activityCardStyle = {
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
                <title>Evangelism Ministry / የወንጌል ስርጭት አገልግሎት — Tsega Church</title>
            </Head>
            <Header />

            <PageBanner
                pageName="Evangelism Ministry"
                pageTitle="Evangelism Ministry / የወንጌል ስርጭት አገልግሎት"

            />

            {/* Hero Section */}


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
                                    The Evangelism Ministry exists to fulfill the Great Commission—to go and make
                                    disciples of all nations. We are passionate about sharing the love of Jesus Christ
                                    with our neighbors, our community, and the world through practical service and
                                    bold proclamation of the Gospel.
                                </p>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                    Whether through street evangelism, community outreach, mission trips, or personal
                                    witnessing, we believe every believer is called to be a witness for Christ. We
                                    equip, train, and mobilize our members to share their faith effectively.
                                </p>
                                <p style={{ fontSize: "1rem", lineHeight: "1.8", fontStyle: "italic", color: "#667eea" }}>
                                    "Go into all the world and preach the gospel to all creation." — Mark 16:15
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="evangelism-card" style={cardStyle}>
                                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>📣</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                                    The Great Commission
                                </h3>
                                <p style={{ fontSize: "1rem" }}>
                                    We are not just called to come to church—we are sent to go into the world.
                                    Every Christian is a missionary, and every neighborhood is a mission field.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outreach Programs Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Outreach Programs
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Multiple ways to share the Gospel and serve our community
                        </p>
                    </div>

                    <div className="row">
                        {outreachPrograms.map((program, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="evangelism-card" style={cardStyle}>
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
                            Passionate about reaching the lost for Christ
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

            {/* Activities Schedule Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Outreach Activities
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Join us in reaching our community with the Gospel
                        </p>
                    </div>

                    <div className="row">
                        {outreachActivities.map((activity, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="activity-card" style={activityCardStyle}>
                                    <h4 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#667eea" }}>
                                        {activity.name}
                                    </h4>
                                    <div style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>📅 Schedule:</strong> {activity.schedule}
                                        </p>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>🎯 Focus:</strong> {activity.focus}
                                        </p>
                                        <p style={{ marginBottom: "0" }}>
                                            <strong>📍 Location:</strong> {activity.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Trips Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <h2 style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                Mission Trips
                            </h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "25px" }}>
                                Experience the joy of serving God beyond borders. Our church organizes short-term
                                mission trips to partner with ministries both domestically and internationally,
                                bringing the Gospel to unreached areas.
                            </p>
                            <div style={{
                                background: "#f9f9f9",
                                padding: "30px",
                                borderRadius: "12px",
                                marginBottom: "20px"
                            }}>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Upcoming Mission Opportunities
                                </h4>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem" }}>
                                    <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✈️</span>
                                        <strong>Ethiopia Mission:</strong> Medical outreach and church planting
                                    </li>
                                    <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✈️</span>
                                        <strong>Local Mission:</strong> Community service in underserved neighborhoods
                                    </li>
                                    <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✈️</span>
                                        <strong>Youth Mission Trip:</strong> Summer missions for teens and young adults
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="evangelism-card" style={{
                                ...cardStyle,
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white",
                                textAlign: "left" as const
                            }}>
                                <div style={{ fontSize: "4rem", marginBottom: "20px", textAlign: "center" }}>🌍</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "white", textAlign: "center" }}>
                                    Go and Make Disciples
                                </h3>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
                                    Mission trips are life-changing experiences that deepen your faith, broaden
                                    your perspective, and allow you to be the hands and feet of Jesus.
                                </p>
                                <ul style={{
                                    listStyle: "none",
                                    padding: 0,
                                    fontSize: "0.95rem",
                                    lineHeight: "2"
                                }}>
                                    <li>✓ Training and preparation provided</li>
                                    <li>✓ Team support and mentorship</li>
                                    <li>✓ Cultural immersion experiences</li>
                                    <li>✓ Life-changing impact</li>
                                    <li>✓ Financial support available</li>
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
                            Evangelism Resources
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Tools to help you share your faith effectively
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="evangelism-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📖</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Training Materials
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Comprehensive guides on personal evangelism, apologetics, and sharing your testimony
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="evangelism-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📋</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Gospel Tracts
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Multi-language tracts and literature to share the Gospel message clearly
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="evangelism-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎓</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Training Classes
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Regular evangelism training sessions to equip you for effective witnessing
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
                                    Join Our Evangelism Team
                                </h2>
                                <p style={{ fontSize: "1.1rem" }}>
                                    Be part of reaching your community and the world for Christ
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
                                    ✅ Thank you! We'll contact you soon with more information.
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
                                            <option value="weekdays">Weekdays</option>
                                            <option value="weekends">Weekends Only</option>
                                            <option value="flexible">Flexible Schedule</option>
                                            <option value="occasional">Occasional Events</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "12px", fontWeight: "600" }}>
                                            Areas of Interest (check all that apply)
                                        </label>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                                            {["Street Evangelism", "Door-to-Door", "Hospital Ministry", "Prison Ministry", "Community Service", "Mission Trips"].map(interest => (
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
                                            Tell us about your heart for evangelism
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            style={{...inputStyle, resize: "vertical"}}
                                            placeholder="Share your testimony, evangelism experience, or why you want to join..."
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
                        Questions About Evangelism?
                    </h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
                        We'd love to help you get started in sharing your faith!
                    </p>
                    <div style={{ fontSize: "1.2rem" }}>
                        <p style={{ marginBottom: "10px" }}>
                            📧 Email: <a href="mailto:evangelism@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>evangelism@tsegachurch.org</a>
                        </p>
                        <p>
                            📞 Phone: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>(123) 456-7890</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        .evangelism-card,
        .activity-card {
          transition: transform 0.3s;
        }
        
        .evangelism-card:hover,
        .activity-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .evangelism-card,
        .dark-mode .activity-card {
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
        

        .dark-mode input,
        .dark-mode select,
        .dark-mode textarea {
            background: #2a2a2a !important;
            border-color: #444 !important;
            color: #fff !important;
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