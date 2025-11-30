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

            {/* Overview Section */}
            <section className="evangelism-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div style={{ paddingRight: "30px" }}>
                                <h2 className="evangelism-title" style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                    Our Mission
                                </h2>
                                <p className="evangelism-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                    The Evangelism Ministry exists to fulfill the Great Commission—to go and make
                                    disciples of all nations. We are passionate about sharing the love of Jesus Christ
                                    with our neighbors, our community, and the world through practical service and
                                    bold proclamation of the Gospel.
                                </p>
                                <p className="evangelism-text" style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "20px" }}>
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
                            <div className="evangelism-card">
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
            <section className="evangelism-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="evangelism-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Outreach Programs
                        </h2>
                        <p className="evangelism-text" style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Multiple ways to share the Gospel and serve our community
                        </p>
                    </div>

                    <div className="row">
                        {outreachPrograms.map((program, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="evangelism-card">
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
            <section className="evangelism-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="evangelism-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Meet Our Leaders
                        </h2>
                        <p className="evangelism-text" style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
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
                                    <h3 className="evangelism-title" style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
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
                                    <p className="evangelism-text" style={{ fontSize: "0.9rem" }}>
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activities Schedule Section */}
            <section className="evangelism-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="evangelism-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Outreach Activities
                        </h2>
                        <p className="evangelism-text" style={{ fontSize: "1.1rem" }}>
                            Join us in reaching our community with the Gospel
                        </p>
                    </div>

                    <div className="row">
                        {outreachActivities.map((activity, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="activity-card">
                                    <h4 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#667eea" }}>
                                        {activity.name}
                                    </h4>
                                    <div style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                                        <p className="evangelism-text" style={{ marginBottom: "8px" }}>
                                            <strong>📅 Schedule:</strong> {activity.schedule}
                                        </p>
                                        <p className="evangelism-text" style={{ marginBottom: "8px" }}>
                                            <strong>🎯 Focus:</strong> {activity.focus}
                                        </p>
                                        <p className="evangelism-text" style={{ marginBottom: "0" }}>
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
            <section className="evangelism-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <h2 className="evangelism-title" style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                Mission Trips
                            </h2>
                            <p className="evangelism-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "25px" }}>
                                Experience the joy of serving God beyond borders. Our church organizes short-term
                                mission trips to partner with ministries both domestically and internationally,
                                bringing the Gospel to unreached areas.
                            </p>
                            <div className="info-box">
                                <h4 className="evangelism-title" style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Upcoming Mission Opportunities
                                </h4>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem" }}>
                                    <li className="evangelism-text" style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✈️</span>
                                        <strong>Ethiopia Mission:</strong> Medical outreach and church planting
                                    </li>
                                    <li className="evangelism-text" style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✈️</span>
                                        <strong>Local Mission:</strong> Community service in underserved neighborhoods
                                    </li>
                                    <li className="evangelism-text" style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                                        <span style={{ position: "absolute", left: 0 }}>✈️</span>
                                        <strong>Youth Mission Trip:</strong> Summer missions for teens and young adults
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="evangelism-card-gradient">
                                <div style={{ fontSize: "4rem", marginBottom: "20px", textAlign: "center" }}>🌍</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "white", textAlign: "center" }}>
                                    Go and Make Disciples
                                </h3>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px", color: "rgba(255,255,255,0.9)" }}>
                                    Mission trips are life-changing experiences that deepen your faith, broaden
                                    your perspective, and allow you to be the hands and feet of Jesus.
                                </p>
                                <ul style={{
                                    listStyle: "none",
                                    padding: 0,
                                    fontSize: "0.95rem",
                                    lineHeight: "2",
                                    color: "rgba(255,255,255,0.9)"
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
            <section className="evangelism-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="evangelism-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Evangelism Resources
                        </h2>
                        <p className="evangelism-text" style={{ fontSize: "1.1rem" }}>
                            Tools to help you share your faith effectively
                        </p>
                    </div>

                    <div className="row">
                        {[
                            { icon: "📖", title: "Training Materials", desc: "Comprehensive guides on personal evangelism, apologetics, and sharing your testimony" },
                            { icon: "📋", title: "Gospel Tracts", desc: "Multi-language tracts and literature to share the Gospel message clearly" },
                            { icon: "🎓", title: "Training Classes", desc: "Regular evangelism training sessions to equip you for effective witnessing" }
                        ].map((resource, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="evangelism-card">
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

            {/* Join the Team Form */}
            <section className="evangelism-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ textAlign: "center", marginBottom: "50px" }}>
                                <h2 className="evangelism-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                                    Join Our Evangelism Team
                                </h2>
                                <p className="evangelism-text" style={{ fontSize: "1.1rem" }}>
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

                            <form onSubmit={handleSubmit} className="evangelism-form">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="evangelism-label">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="evangelism-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="evangelism-label">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="evangelism-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="evangelism-label">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="evangelism-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="evangelism-label">
                                            Availability
                                        </label>
                                        <select
                                            name="availability"
                                            value={formData.availability}
                                            onChange={handleChange}
                                            className="evangelism-input"
                                        >
                                            <option value="">Select...</option>
                                            <option value="weekdays">Weekdays</option>
                                            <option value="weekends">Weekends Only</option>
                                            <option value="flexible">Flexible Schedule</option>
                                            <option value="occasional">Occasional Events</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label className="evangelism-label" style={{ marginBottom: "12px" }}>
                                            Areas of Interest (check all that apply)
                                        </label>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                                            {["Street Evangelism", "Door-to-Door", "Hospital Ministry", "Prison Ministry", "Community Service", "Mission Trips"].map(interest => (
                                                <label key={interest} className="evangelism-checkbox-label">
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
                                        <label className="evangelism-label">
                                            Tell us about your heart for evangelism
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="evangelism-input"
                                            style={{ resize: "vertical" }}
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
                    <h2 style={{ fontSize: "2.2rem", marginBottom: "20px", color: "white" }}>
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
                /* Light Mode Defaults */
                .evangelism-section {
                    background: #ffffff;
                }
                
                .evangelism-section-alt {
                    background: #f9f9f9;
                }
                
                .evangelism-title {
                    color: #333;
                }
                
                .evangelism-text {
                    color: #666;
                }
                
                .evangelism-card {
                    background: white;
                    padding: 40px 30px;
                    border-radius: 12px;
                    text-align: center;
                    height: 100%;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                    transition: transform 0.3s;
                }
                
                .evangelism-card:hover {
                    transform: translateY(-5px);
                }
                
                .evangelism-card h3,
                .evangelism-card h4 {
                    color: #333;
                }
                
                .evangelism-card p {
                    color: #666;
                }
                
                .evangelism-card-gradient {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 40px 30px;
                    border-radius: 12px;
                    text-align: left;
                    color: white;
                    height: 100%;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                    transition: transform 0.3s;
                }
                
                .evangelism-card-gradient:hover {
                    transform: translateY(-5px);
                }
                
                .activity-card {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    height: 100%;
                    text-align: left;
                    transition: transform 0.3s;
                }
                
                .activity-card:hover {
                    transform: translateY(-5px);
                }
                
                .info-box {
                    background: #f9f9f9;
                    padding: 30px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                }
                
                .evangelism-form {
                    background: #f9f9f9;
                    padding: 40px;
                    border-radius: 12px;
                }
                
                .evangelism-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: #333;
                }
                
                .evangelism-input {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 1rem;
                    background: white;
                    color: #333;
                }
                
                .evangelism-checkbox-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    color: #333;
                }
                
                /* Dark Mode Styles */
                .dark-mode .evangelism-section {
                    background: #121212 !important;
                }
                
                .dark-mode .evangelism-section-alt {
                    background: #1a1a1a !important;
                }
                
                .dark-mode .evangelism-title {
                    color: #ffffff !important;
                }
                
                .dark-mode .evangelism-text {
                    color: #cccccc !important;
                }
                
                .dark-mode .evangelism-card {
                    background: #2a2a2a !important;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
                }
                
                .dark-mode .evangelism-card h3,
                .dark-mode .evangelism-card h4 {
                    color: #ffffff !important;
                }
                
                .dark-mode .evangelism-card p {
                    color: #cccccc !important;
                }
                
                .dark-mode .activity-card {
                    background: #2a2a2a !important;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
                }
                
                .dark-mode .activity-card h4 {
                    color: #667eea !important;
                }
                
                .dark-mode .info-box {
                    background: #2a2a2a !important;
                }
                
                .dark-mode .info-box h4 {
                    color: #ffffff !important;
                }
                
                .dark-mode .evangelism-form {
                    background: #1a1a1a !important;
                }
                
                .dark-mode .evangelism-label {
                    color: #ffffff !important;
                }
                
                .dark-mode .evangelism-input {
                    background: #2a2a2a !important;
                    border-color: #444 !important;
                    color: #ffffff !important;
                }
                
                .dark-mode .evangelism-input::placeholder {
                    color: #888 !important;
                }
                
                .dark-mode .evangelism-checkbox-label {
                    color: #ffffff !important;
                }
                
                .dark-mode .evangelism-checkbox-label span {
                    color: #cccccc !important;
                }
            `}</style>
        </>
    );
}