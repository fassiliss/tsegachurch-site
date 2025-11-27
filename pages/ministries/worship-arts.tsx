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

    const cardStyle = {
        background: "white",
        padding: "40px 30px",
        borderRadius: "12px",
        textAlign: "center" as const,
        height: "100%",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        transition: "transform 0.3s"
    };

    const teamCardStyle = {
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
                <title>Worship Ministry / የአምልኮ አገልግሎት — Tsega Church</title>
            </Head>
            <Header />

            <PageBanner
                pageName="Worship Ministry "
                pageTitle="Worship Ministry / የአምልኮ አገልግሎት"

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
                                    The Worship Ministry exists to create an atmosphere where God's presence is welcomed
                                    and His people can encounter Him freely. We believe worship is more than music—it's
                                    a lifestyle of honoring God with our whole hearts, both on stage and off.
                                </p>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "20px" }}>
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
                            <div className="worship-card" style={cardStyle}>
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
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Worship Teams
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Multiple expressions of worship for every generation
                        </p>
                    </div>

                    <div className="row">
                        {worshipPrograms.map((program, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="worship-card" style={cardStyle}>
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
            {/* Team Leaders Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Meet Our Leaders
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
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

            {/* Worship Schedule Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Worship Schedule
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Join us for worship services and team practices
                        </p>
                    </div>

                    <div className="row">
                        {worshipTeams.map((team, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="team-schedule-card" style={teamCardStyle}>
                                    <h4 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#667eea" }}>
                                        {team.name}
                                    </h4>
                                    <div style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>🎵 Service:</strong> {team.schedule}
                                        </p>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>🎯 Focus:</strong> {team.focus}
                                        </p>
                                        <p style={{ marginBottom: "0" }}>
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
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4">
                            <h2 style={{ fontSize: "2.5rem", marginBottom: "25px" }}>
                                Instruments We Need
                            </h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "25px" }}>
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
                                    <div key={index} style={{
                                        background: "#f9f9f9",
                                        padding: "15px 20px",
                                        borderRadius: "8px",
                                        fontSize: "1rem",
                                        fontWeight: "500"
                                    }}>
                                        🎸 {instrument}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="worship-card" style={{
                                ...cardStyle,
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white"
                            }}>
                                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎹</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "white" }}>
                                    Join Our Band
                                </h3>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "20px" }}>
                                    We provide training, mentorship, and opportunities to grow in your musical gifts
                                    while serving God and His people.
                                </p>
                                <ul style={{
                                    listStyle: "none",
                                    padding: 0,
                                    textAlign: "left",
                                    fontSize: "0.95rem",
                                    lineHeight: "2"
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
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Worship Resources
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Tools to help you grow as a worshipper and worship leader
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="worship-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📚</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Song Library
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Access our complete catalog of worship songs with chord charts, lyrics, and recordings
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="worship-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎓</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Training Materials
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Video tutorials, technique guides, and spiritual development resources for worship leaders
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="worship-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎼</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Sheet Music
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Professional arrangements and charts for various instruments and skill levels
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="worship-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎧</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Practice Tracks
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Downloadable backing tracks and click tracks for personal practice sessions
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="worship-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📖</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Devotionals
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Daily devotions and readings specifically for worship leaders and team members
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="worship-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>💬</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Team Community
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Connect with other worship team members through our online community platform
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
                                    Join the Worship Team
                                </h2>
                                <p style={{ fontSize: "1.1rem" }}>
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
                                            Experience Level
                                        </label>
                                        <select
                                            name="experience"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            style={inputStyle}
                                        >
                                            <option value="">Select...</option>
                                            <option value="beginner">Beginner - Learning and growing</option>
                                            <option value="intermediate">Intermediate - Some experience</option>
                                            <option value="advanced">Advanced - Professional level</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Primary Instrument/Role (if applicable)
                                        </label>
                                        <input
                                            type="text"
                                            name="instrument"
                                            value={formData.instrument}
                                            onChange={handleChange}
                                            placeholder="e.g., Guitar, Vocals, Keyboard, Dance, etc."
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "12px", fontWeight: "600" }}>
                                            Areas of Interest (check all that apply)
                                        </label>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                                            {["Vocals/Singing", "Instruments", "Choir", "Dance", "Worship Leading", "Songwriting"].map(interest => (
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
                                            Tell us about your worship experience and why you want to join
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            style={{...inputStyle, resize: "vertical"}}
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
                    <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
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
        .worship-card,
        .team-schedule-card {
          transition: transform 0.3s;
        }
        
        .worship-card:hover,
        .team-schedule-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .worship-card,
        .dark-mode .team-schedule-card {
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
        
        .dark-mode div[style*="background: #f9f9f9"] {
          background: #2a2a2a !important;
        }
      `}</style>
        </>
    );
}