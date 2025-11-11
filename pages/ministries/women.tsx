import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function WomensMinistry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
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
        age: "",
        interests: [],
        message: "",
      });
    }, 1000);
  };

  const leaders = [
    {
      name: "Grace Thompson",
      role: "Ministry Director",
      bio: "Leading women to discover their identity in Christ"
    },
    {
      name: "Rachel Kim",
      role: "Bible Study Coordinator",
      bio: "Passionate about teaching God's Word"
    },
    {
      name: "Mary Johnson",
      role: "Prayer Team Leader",
      bio: "Devoted to intercession and spiritual growth"
    },
    {
      name: "Ruth Abebe",
      role: "Events Coordinator",
      bio: "Creating spaces for connection and fellowship"
    }
  ];

  const ministries = [
    {
      icon: "📖",
      title: "Bible Studies",
      description: "Weekly gatherings to study Scripture and grow in biblical wisdom together"
    },
    {
      icon: "🙏",
      title: "Prayer Groups",
      description: "Interceding for one another, our families, and our community with power"
    },
    {
      icon: "💝",
      title: "Mentorship",
      description: "Connecting seasoned women of faith with those seeking guidance and support"
    },
    {
      icon: "☕",
      title: "Fellowship Events",
      description: "Monthly gatherings, retreats, and social events to build lasting friendships"
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
        <title>Women's Ministry / የሴቶች አገልግሎት — Tsega Church</title>
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
              Women's Ministry
            </h1>
            <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "10px" }}>
              የሴቶች አገልግሎት
            </p>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Empowered by Faith, United in Purpose
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
                  Our Heart
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                  The Women's Ministry at Tsega Church is dedicated to inspiring and equipping 
                  women to grow spiritually, build meaningful friendships, and live out their 
                  God-given purpose with strength and grace.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  Through Bible studies, prayer gatherings, mentorship, and community events, 
                  we create a welcoming space where women of all ages can find encouragement 
                  and support. Together, we seek to follow Christ, love one another, and make 
                  an impact in our homes, church, and community.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wm-card" style={cardStyle}>
                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>💐</div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                  Strength & Grace
                </h3>
                <p style={{ fontSize: "1rem" }}>
                  "She is clothed with strength and dignity; she can laugh at the days 
                  to come. She speaks with wisdom, and faithful instruction is on her 
                  tongue." - Proverbs 31:25-26
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              How We Gather
            </h2>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Opportunities to connect, grow, and serve together
            </p>
          </div>
          
          <div className="row">
            {ministries.map((ministry, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="wm-card" style={cardStyle}>
                  <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{ministry.icon}</div>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>
                    {ministry.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {ministry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              Our Leadership
            </h2>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Women devoted to serving and shepherding our community
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
                    background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
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
                    color: "#fa709a", 
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

      {/* Monthly Schedule */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              Monthly Gatherings
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Join us throughout the month
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="wm-card" style={{...cardStyle, textAlign: "left"}}>
                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#fa709a" }}>
                    📖 Tuesday Morning Bible Study
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 10:00 AM - 11:30 AM (Weekly)
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Childcare provided • Coffee and light refreshments
                  </p>
                </div>

                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#fa709a" }}>
                    🙏 First Saturday Prayer Gathering
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 9:00 AM - 10:30 AM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    A powerful time of intercession and worship
                  </p>
                </div>

                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#fa709a" }}>
                    ☕ Third Saturday Coffee & Connection
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 10:00 AM - 12:00 PM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Casual fellowship, testimonies, and encouragement
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#fa709a" }}>
                    💝 Monthly Service Project
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> Varies by project
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Serving our community with hands and hearts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              Special Events
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Mark your calendar for these annual highlights
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="wm-card" style={cardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#fa709a" }}>
                  🌸 Spring Retreat
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                  A weekend away for rest, renewal, and deeper connection with God and one another
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="wm-card" style={cardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#fa709a" }}>
                  👩‍👧 Mother-Daughter Tea
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                  An elegant afternoon celebrating the special bond between mothers and daughters
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="wm-card" style={cardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#fa709a" }}>
                  🎄 Christmas Celebration
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                  A festive evening of worship, testimonies, and celebrating the birth of Christ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Form */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{ textAlign: "center", marginBottom: "50px" }}>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                  Join Our Community
                </h2>
                <p style={{ fontSize: "1.1rem" }}>
                  We'd love to welcome you!
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
                  ✅ Thank you! We'll be in touch soon.
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
                      Age Range
                    </label>
                    <select
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select...</option>
                      <option value="18-29">18-29</option>
                      <option value="30-39">30-39</option>
                      <option value="40-49">40-49</option>
                      <option value="50-59">50-59</option>
                      <option value="60+">60+</option>
                    </select>
                  </div>

                  <div className="col-12 mb-3">
                    <label style={{ display: "block", marginBottom: "12px", fontWeight: "600" }}>
                      I'm interested in (check all that apply)
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                      {["Bible Studies", "Prayer Groups", "Mentorship", "Fellowship Events", "Service Projects"].map(interest => (
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
                      Prayer requests or questions
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      style={{...inputStyle, resize: "vertical"}}
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
                  {submitting ? "Submitting..." : "Connect With Us"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        padding: "60px 0", 
        background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div className="theme_container">
          <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
            Connect With Us
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
            We'd love to hear from you!
          </p>
          <div style={{ fontSize: "1.2rem" }}>
            <p style={{ marginBottom: "10px" }}>
              📧 Email: <a href="mailto:women@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>women@tsegachurch.org</a>
            </p>
            <p>
              📞 Phone: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>(123) 456-7890</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        .wm-card {
          transition: transform 0.3s;
        }
        
        .wm-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .wm-card {
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
      `}</style>
    </>
  );
}