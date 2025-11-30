import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

export default function WorshipMinistry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        interests: [] as string[],
        instrument: "",
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
                experience: "",
                interests: [],
                instrument: "",
                message: "",
            });
        }, 1000);
    };

    const teamMembers = [
        {
            name: " Esayas Fanta",
            role: "Worship Director",
            bio: "Leading worship for 15+ years",
            image: "/assets/images/worship/eso3.png"
        },
        {
            name: " Fikru Befekadu",
            role: "Choir Director",
            bio: " worship leader",
            image: "/assets/images/worship/fikru2.png"
        },
        {
            name: "TBD",
            role: "Music Coordinator",
            bio: "Multi-instrumentalist and arranger"
        },
        {
            name: "TBD",
            role: " Ministry Leader",
            bio: "Expressing worship through movement"
        }
    ];

    const worshipPrograms = [
        {
            icon: "🎤",
            title: "Praise & Worship Team",
            description: "Lead the congregation in contemporary worship songs and traditional hymns every Sunday"
        },
        {
            icon: "🎵",
            title: "Church Choir",
            description: "Multi-generational choir ministering through powerful vocal harmonies and special presentations"
        },
        {
            icon: "🎸",
            title: "Instrumental Team",
            description: "Skilled musicians playing guitars, keyboards, drums, and various instruments in worship"
        },
        {
            icon: "💃",
            title: "Dance Ministry",
            description: "Worship through creative movement, liturgical dance, and choreographed expressions of praise"
        }
    ];

    const worshipTeams = [
        {
            name: "Sunday Morning Worship",
            schedule: "Sundays, 10:00 AM",
            focus: "Contemporary Worship",
            practice: "Saturdays, 4:00 PM"
        },
        {
            name: "Traditional Choir",
            schedule: "Sundays, 10:00 AM (2nd & 4th)",
            focus: "Hymns & Gospel",
            practice: "Wednesdays, 7:00 PM"
        },
        {
            name: "Youth Worship Band",
            schedule: "Fridays, 6:00 PM",
            focus: "Modern Christian Music",
            practice: "Thursdays, 6:30 PM"
        },
        {
            name: "Prayer & Worship Night",
            schedule: "First Friday, 7:00 PM",
            focus: "Intimate Worship",
            practice: "As needed"
        },
        {
            name: "Ethiopian Worship Team",
            schedule: "Sundays, 12:30 PM",
            focus: "Traditional Ethiopian Songs",
            practice: "Saturdays, 2:00 PM"
        },
        {
            name: "Special Events Team",
            schedule: "Various occasions",
            focus: "Concerts & Outreach",
            practice: "As scheduled"
        }
    ];

    const instrumentsNeeded = [
        "Keyboards/Piano",
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Drums/Percussion",
        "Violin/Strings",
        "Saxophone",
        "Trumpet",
        "Traditional Instruments"
    ];

    return (
        <>
            <Head>
                <title>Worship Ministry / የአምልኮ አገልግሎት — Tsega Church</title>
            </Head>
            <Header />

            <PageBanner
                pageName="Worship Ministry "
                pageTitle="Worship Ministry / የአምልኮ አገልግሎት"
            />

            {/* Overview Section */}
            <section className="worship-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div style={{ paddingRight: "30px" }}>
                                <h2 className="worship-title" style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                    Our Mission
                                </h2>
                                <p className="worship-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                    The Worship Ministry exists to create an atmosphere where God's presence is welcomed
                                    and His people can encounter Him freely. We believe worship is more than music—it's
                                    a lifestyle of honoring God with our whole hearts, both on stage and off.
                                </p>
                                <p className="worship-text" style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "20px" }}>
                                    Through song, dance, instruments, and creative expression, we aim to lead our
                                    congregation into genuine encounters with the living God. Every note, every lyric,
                                    and every movement is offered as an act of devotion and praise.
                                </p>
                                <p style={{ fontSize: "1rem", lineHeight: "1.8", fontStyle: "italic", color: "#667eea" }}>
                                    "Worship the Lord in the splendor of his holiness; tremble before him, all the earth."
                                    — Psalm 96:9
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="worship-card">
                                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🙌</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                                    Worship in Spirit & Truth
                                </h3>
                                <p style={{ fontSize: "1rem" }}>
                                    We pursue excellence in our craft while maintaining humble hearts that seek to
                                    glorify God above all else. Every rehearsal, every service, every song is an
                                    offering to Him.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Worship Programs Section */}
            <section className="worship-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="worship-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Worship Teams
                        </h2>
                        <p className="worship-text" style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Multiple expressions of worship for every generation
                        </p>
                    </div>

                    <div className="row">
                        {worshipPrograms.map((program, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="worship-card">
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
            <section className="worship-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="worship-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Meet Our Leaders
                        </h2>
                        <p className="worship-text" style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Passionate worship leaders serving with excellence
                        </p>
                    </div>

                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div style={{ textAlign: "center", padding: "20px" }}>
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={{
                                                width: "180px",
                                                height: "180px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                margin: "0 auto 20px",
                                                display: "block",
                                                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                                            }}
                                        />
                                    ) : (
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
                                    )}
                                    <h3 className="worship-title" style={{ fontSize: "1.3rem", marginBottom: "8px" }}>
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
                                    <p className="worship-text" style={{ fontSize: "0.9rem" }}>
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Worship Schedule Section */}
            <section className="worship-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="worship-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Worship Schedule
                        </h2>
                        <p className="worship-text" style={{ fontSize: "1.1rem" }}>
                            Join us for worship services and team practices
                        </p>
                    </div>

                    <div className="row">
                        {worshipTeams.map((team, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="team-schedule-card">
                                    <h4 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#667eea" }}>
                                        {team.name}
                                    </h4>
                                    <div style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                                        <p className="worship-text" style={{ marginBottom: "8px" }}>
                                            <strong>🎵 Service:</strong> {team.schedule}
                                        </p>
                                        <p className="worship-text" style={{ marginBottom: "8px" }}>
                                            <strong>🎯 Focus:</strong> {team.focus}
                                        </p>
                                        <p className="worship-text" style={{ marginBottom: "0" }}>
                                            <strong>🎼 Practice:</strong> {team.practice}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instruments Needed Section */}
            <section className="worship-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <h2 className="worship-title" style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                Instruments We Need
                            </h2>
                            <p className="worship-text" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "25px" }}>
                                Are you a musician? We're always looking for skilled instrumentalists to join our
                                worship teams. Whether you're a seasoned professional or an enthusiastic beginner
                                willing to grow, there's a place for you in our ministry.
                            </p>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "15px"
                            }}>
                                {instrumentsNeeded.map((instrument, index) => (
                                    <div key={index} className="instrument-item">
                                        🎸 {instrument}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="worship-card-gradient">
                                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎹</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "white" }}>
                                    Join Our Band
                                </h3>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px", color: "rgba(255,255,255,0.9)" }}>
                                    We provide training, mentorship, and opportunities to grow in your musical gifts
                                    while serving God and His people.
                                </p>
                                <ul style={{
                                    listStyle: "none",
                                    padding: 0,
                                    textAlign: "left",
                                    fontSize: "0.95rem",
                                    lineHeight: "2",
                                    color: "rgba(255,255,255,0.9)"
                                }}>
                                    <li>✓ Weekly rehearsals and coaching</li>
                                    <li>✓ Opportunities to lead worship</li>
                                    <li>✓ Access to quality equipment</li>
                                    <li>✓ Spiritual development and community</li>
                                    <li>✓ Performance opportunities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="worship-section-alt" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 className="worship-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Worship Resources
                        </h2>
                        <p className="worship-text" style={{ fontSize: "1.1rem" }}>
                            Tools to help you grow as a worshipper and worship leader
                        </p>
                    </div>

                    <div className="row">
                        {[
                            { icon: "📚", title: "Song Library", desc: "Access our complete catalog of worship songs with chord charts, lyrics, and recordings" },
                            { icon: "🎓", title: "Training Materials", desc: "Video tutorials, technique guides, and spiritual development resources for worship leaders" },
                            { icon: "🎼", title: "Sheet Music", desc: "Professional arrangements and charts for various instruments and skill levels" },
                            { icon: "🎧", title: "Practice Tracks", desc: "Downloadable backing tracks and click tracks for personal practice sessions" },
                            { icon: "📖", title: "Devotionals", desc: "Daily devotions and readings specifically for worship leaders and team members" },
                            { icon: "💬", title: "Team Community", desc: "Connect with other worship team members through our online community platform" }
                        ].map((resource, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="worship-card">
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
            <section className="worship-section" style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ textAlign: "center", marginBottom: "50px" }}>
                                <h2 className="worship-title" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                                    Join the Worship Team
                                </h2>
                                <p className="worship-text" style={{ fontSize: "1.1rem" }}>
                                    Use your gifts to lead others into God's presence
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
                                    ✅ Thank you! A worship team leader will contact you soon to schedule an audition.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="worship-form">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="worship-label">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="worship-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="worship-label">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="worship-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="worship-label">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="worship-input"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="worship-label">
                                            Experience Level
                                        </label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="worship-input"
                                        >
                                            <option value="">Select...</option>
                                            <option value="beginner">Beginner - Learning and growing</option>
                                            <option value="intermediate">Intermediate - Some experience</option>
                                            <option value="advanced">Advanced - Professional level</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label className="worship-label">
                                            Primary Instrument/Role (if applicable)
                                        </label>
                                        <input
                                            type="text"
                                            name="instrument"
                                            value={formData.instrument}
                                            onChange={handleChange}
                                            placeholder="e.g., Guitar, Vocals, Keyboard, Dance, etc."
                                            className="worship-input"
                                        />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label className="worship-label" style={{ marginBottom: "12px" }}>
                                            Areas of Interest (check all that apply)
                                        </label>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                                            {["Vocals/Singing", "Instruments", "Choir", "Dance", "Worship Leading", "Songwriting"].map(interest => (
                                                <label key={interest} className="worship-checkbox-label">
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
                                        <label className="worship-label">
                                            Tell us about your worship experience and why you want to join
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="worship-input"
                                            style={{ resize: "vertical" }}
                                            placeholder="Share your musical background, favorite worship songs, and what worship means to you..."
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
                        Questions About Worship Ministry?
                    </h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
                        We'd love to help you discover your place in worship!
                    </p>
                    <div style={{ fontSize: "1.2rem" }}>
                        <p style={{ marginBottom: "10px" }}>
                            📧 Email: <a href="mailto:worship@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>worship@tsegachurch.org</a>
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
                .worship-section {
                    background: #ffffff;
                }
                
                .worship-section-alt {
                    background: #f9f9f9;
                }
                
                .worship-title {
                    color: #333;
                }
                
                .worship-text {
                    color: #666;
                }
                
                .worship-card {
                    background: white;
                    padding: 40px 30px;
                    border-radius: 12px;
                    text-align: center;
                    height: 100%;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                    transition: transform 0.3s;
                }
                
                .worship-card:hover {
                    transform: translateY(-5px);
                }
                
                .worship-card h3,
                .worship-card h4 {
                    color: #333;
                }
                
                .worship-card p {
                    color: #666;
                }
                
                .worship-card-gradient {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 40px 30px;
                    border-radius: 12px;
                    text-align: center;
                    color: white;
                    height: 100%;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                    transition: transform 0.3s;
                }
                
                .worship-card-gradient:hover {
                    transform: translateY(-5px);
                }
                
                .team-schedule-card {
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
                    height: 100%;
                    text-align: left;
                    transition: transform 0.3s;
                }
                
                .team-schedule-card:hover {
                    transform: translateY(-5px);
                }
                
                .instrument-item {
                    background: #f9f9f9;
                    padding: 15px 20px;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #333;
                }
                
                .worship-form {
                    background: #f9f9f9;
                    padding: 40px;
                    border-radius: 12px;
                }
                
                .worship-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: #333;
                }
                
                .worship-input {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 1rem;
                    background: white;
                    color: #333;
                }
                
                .worship-checkbox-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    color: #333;
                }
                
                /* Dark Mode Styles */
                .dark-mode .worship-section {
                    background: #121212 !important;
                }
                
                .dark-mode .worship-section-alt {
                    background: #1a1a1a !important;
                }
                
                .dark-mode .worship-title {
                    color: #ffffff !important;
                }
                
                .dark-mode .worship-text {
                    color: #cccccc !important;
                }
                
                .dark-mode .worship-card {
                    background: #2a2a2a !important;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
                }
                
                .dark-mode .worship-card h3,
                .dark-mode .worship-card h4 {
                    color: #ffffff !important;
                }
                
                .dark-mode .worship-card p {
                    color: #cccccc !important;
                }
                
                .dark-mode .team-schedule-card {
                    background: #2a2a2a !important;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
                }
                
                .dark-mode .team-schedule-card h4 {
                    color: #667eea !important;
                }
                
                .dark-mode .instrument-item {
                    background: #2a2a2a !important;
                    color: #ffffff !important;
                }
                
                .dark-mode .worship-form {
                    background: #1a1a1a !important;
                }
                
                .dark-mode .worship-label {
                    color: #ffffff !important;
                }
                
                .dark-mode .worship-input {
                    background: #2a2a2a !important;
                    border-color: #444 !important;
                    color: #ffffff !important;
                }
                
                .dark-mode .worship-input::placeholder {
                    color: #888 !important;
                }
                
                .dark-mode .worship-checkbox-label {
                    color: #ffffff !important;
                }
                
                .dark-mode .worship-checkbox-label span {
                    color: #cccccc !important;
                }
            `}</style>
        </>
    );
}