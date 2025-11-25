import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function BibleStudy() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        ageGroup: "",
        studyInterests: [] as string[],
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
            studyInterests: prev.studyInterests.includes(interest)
                ? prev.studyInterests.filter(i => i !== interest)
                : [...prev.studyInterests, interest]
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
                ageGroup: "",
                studyInterests: [],
                message: "",
            });
        }, 1000);
    };

    const leaders = [
        {
            name: "Pastor David",
            role: "Bible Study Director",
            bio: "20+ years teaching God's Word"
        },
        {
            name: "Sister Ruth",
            role: "Women's Study Leader",
            bio: "Passionate about discipleship"
        },
        {
            name: "Brother Samuel",
            role: "Men's Study Coordinator",
            bio: "Building strong men of faith"
        },
        {
            name: "Sister Hannah",
            role: "Youth Study Leader",
            bio: "Connecting young people to Scripture"
        }
    ];

    const studyPrograms = [
        {
            icon: "📖",
            title: "Sunday School",
            description: "In-depth biblical teaching for all ages every Sunday morning before service"
        },
        {
            icon: "👥",
            title: "Midweek Bible Study",
            description: "Wednesday evening studies diving deep into God's Word together"
        },
        {
            icon: "🏠",
            title: "Home Groups",
            description: "Small group studies meeting in homes throughout the week for fellowship and growth"
        },
        {
            icon: "🎓",
            title: "Discipleship Classes",
            description: "Structured courses for new believers and those seeking deeper understanding"
        }
    ];

    const studyGroups = [
        {
            name: "Men's Bible Study",
            schedule: "Saturdays, 7:00 AM",
            focus: "Building Godly Character",
            location: "Main Building, Room 101"
        },
        {
            name: "Women's Bible Study",
            schedule: "Tuesdays, 10:00 AM",
            focus: "Proverbs 31 Women",
            location: "Fellowship Hall"
        },
        {
            name: "Youth Bible Study",
            schedule: "Fridays, 6:00 PM",
            focus: "Living Faith in Modern World",
            location: "Youth Center"
        },
        {
            name: "Young Adults Study",
            schedule: "Thursdays, 7:00 PM",
            focus: "Purpose & Identity in Christ",
            location: "Coffee Shop Area"
        },
        {
            name: "Seniors Bible Study",
            schedule: "Wednesdays, 2:00 PM",
            focus: "Wisdom from the Word",
            location: "Senior Center"
        },
        {
            name: "New Believers Class",
            schedule: "Sundays, 9:00 AM",
            focus: "Foundations of Faith",
            location: "Classroom A"
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

    const groupCardStyle = {
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        height: "100%"
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
                <title>Bible Study / የመጽሐፍ ቅዱስ ጥናት — Tsega Church</title>
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
                            Bible Study Ministry
                        </h1>
                        <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "10px" }}>
                            የመጽሐፍ ቅዱስ ጥናት አገልግሎት
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Growing in God's Word Together
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
                                    The Bible Study Ministry is committed to helping every member of our church family
                                    grow in their knowledge and understanding of God's Word. We believe that Scripture
                                    is alive and active, transforming hearts and minds as we study it together in
                                    community.
                                </p>
                                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                                    Through various study groups, classes, and teaching opportunities, we create spaces
                                    where people can ask questions, share insights, and apply biblical truths to their
                                    daily lives. Whether you're new to the Bible or have studied it for years, there's
                                    a place for you here.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bible-card" style={cardStyle}>
                                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>📚</div>
                                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                                    The Word is Living
                                </h3>
                                <p style={{ fontSize: "1rem", fontStyle: "italic", marginBottom: "15px" }}>
                                    "For the word of God is alive and active. Sharper than any double-edged sword..."
                                </p>
                                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                                    — Hebrews 4:12
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Study Programs Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Study Programs
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Multiple opportunities to dive deep into Scripture
                        </p>
                    </div>

                    <div className="row">
                        {studyPrograms.map((program, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="bible-card" style={cardStyle}>
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

            {/* Leaders Section */}
            <section style={{ padding: "80px 0" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Our Study Leaders
                        </h2>
                        <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Experienced teachers passionate about God's Word
                        </p>
                    </div>

                    <div className="row">
                        {leaders.map((leader, index) => (
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
                                        {leader.name}
                                    </h3>
                                    <p style={{
                                        fontSize: "1rem",
                                        color: "#667eea",
                                        fontWeight: "600",
                                        marginBottom: "10px"
                                    }}>
                                        {leader.role}
                                    </p>
                                    <p style={{ fontSize: "0.9rem" }}>
                                        {leader.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Study Groups Section */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                            Weekly Study Groups
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Find a group that fits your schedule and season of life
                        </p>
                    </div>

                    <div className="row">
                        {studyGroups.map((group, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="group-card" style={groupCardStyle}>
                                    <h4 style={{ fontSize: "1.4rem", marginBottom: "15px", color: "#667eea" }}>
                                        {group.name}
                                    </h4>
                                    <div style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>📅 Schedule:</strong> {group.schedule}
                                        </p>
                                        <p style={{ marginBottom: "8px" }}>
                                            <strong>🎯 Focus:</strong> {group.focus}
                                        </p>
                                        <p style={{ marginBottom: "0" }}>
                                            <strong>📍 Location:</strong> {group.location}
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
                            Study Resources
                        </h2>
                        <p style={{ fontSize: "1.1rem" }}>
                            Tools to help you grow in your understanding
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="bible-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📝</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Study Guides
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Downloadable guides for personal and group study with discussion questions
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="bible-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎧</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Teaching Audio
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Listen to previous teachings and sermons on our podcast platform
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="bible-card" style={cardStyle}>
                                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>💬</div>
                                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                                    Online Community
                                </h4>
                                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Join our online discussion groups to continue conversations throughout the week
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Form */}
            <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
                <div className="theme_container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{ textAlign: "center", marginBottom: "50px" }}>
                                <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                                    Join a Bible Study
                                </h2>
                                <p style={{ fontSize: "1.1rem" }}>
                                    Take the next step in your spiritual growth
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
                                    ✅ Thank you! We'll contact you with more information about your selected study group.
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
                                            Age Group
                                        </label>
                                        <select
                                            name="ageGroup"
                                            value={formData.ageGroup}
                                            onChange={handleChange}
                                            style={inputStyle}
                                        >
                                            <option value="">Select...</option>
                                            <option value="youth">Youth (13-18)</option>
                                            <option value="youngadult">Young Adult (19-30)</option>
                                            <option value="adult">Adult (31-60)</option>
                                            <option value="senior">Senior (60+)</option>
                                        </select>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "12px", fontWeight: "600" }}>
                                            Which study groups interest you? (check all that apply)
                                        </label>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                                            {studyGroups.map(group => (
                                                <label key={group.name} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.studyInterests.includes(group.name)}
                                                        onChange={() => handleCheckbox(group.name)}
                                                        style={{ marginRight: "8px", width: "18px", height: "18px" }}
                                                    />
                                                    <span>{group.name}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                                            Prayer requests or questions about Bible study
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            style={{...inputStyle, resize: "vertical"}}
                                            placeholder="Share any prayer requests or questions you have about joining a study group..."
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
                        Questions About Bible Study?
                    </h2>
                    <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
                        We're here to help you get connected and growing in God's Word!
                    </p>
                    <div style={{ fontSize: "1.2rem" }}>
                        <p style={{ marginBottom: "10px" }}>
                            📧 Email: <a href="mailto:biblestudy@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>biblestudy@tsegachurch.org</a>
                        </p>
                        <p>
                            📞 Phone: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>(123) 456-7890</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        .bible-card,
        .group-card {
          transition: transform 0.3s;
        }
        
        .bible-card:hover,
        .group-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .bible-card,
        .dark-mode .group-card {
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
      `}</style>
        </>
    );
}