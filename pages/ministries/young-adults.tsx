import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function YoungAdultsMinistry() {
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
      name: "TBD",
      role: "Ministry Leader",
      bio: "Passionate about mentoring young adults"
    },
    {
      name: "TBD",
      role: "Worship Leader",
      bio: "Leading worship with authenticity"
    },
    {
      name: "TBD",
      role: "Small Groups Coordinator",
      bio: "Building community through connection"
    },
    {
      name: "TBD",
      role: "Events Coordinator",
      bio: "Creating meaningful experiences"
    }
  ];

  const activities = [
    {
      icon: "📖",
      title: "Bible Studies",
      description: "Deep dive into Scripture together, exploring how God's Word applies to our daily lives"
    },
    {
      icon: "🤝",
      title: "Small Groups",
      description: "Weekly gatherings in homes for fellowship, prayer, and authentic community"
    },
    {
      icon: "🎵",
      title: "Worship Nights",
      description: "Monthly worship and prayer gatherings focused on encountering God's presence"
    },
    {
      icon: "❤️",
      title: "Service Projects",
      description: "Hands-on opportunities to serve our community and share Christ's love"
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
        <title>Young Adults Ministry / የወጣቶች አገልግሎት — Tsega Church</title>
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
              Young Adults Ministry
            </h1>
            <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "10px" }}>
              የወጣቶች አገልግሎት
            </p>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Growing in Faith, Building Community, Living on Purpose
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
                  Who We Are
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "20px" }}>
                  The Young Adults Ministry at Tsega Church is a vibrant community of believers 
                  in their 20s and 30s pursuing Christ together. We exist to help young adults 
                  grow in faith, build authentic relationships, and live purposefully in every 
                  area of life.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  Through small groups, worship nights, service projects, and social gatherings, 
                  we create a space where faith meets real life. Whether you're a student, working 
                  professional, or newly married, you'll find belonging, encouragement, and 
                  opportunities to serve.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ya-card" style={cardStyle}>
                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🌟</div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                  Faith for Real Life
                </h3>
                <p style={{ fontSize: "1rem" }}>
                  We believe that following Jesus isn't just about Sunday mornings—it's about 
                  every moment of every day. Join us as we navigate careers, relationships, 
                  purpose, and calling together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              What We Do
            </h2>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Opportunities to connect, grow, and serve together
            </p>
          </div>
          
          <div className="row">
            {activities.map((activity, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="ya-card" style={cardStyle}>
                  <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{activity.icon}</div>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>
                    {activity.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {activity.description}
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
              Our Leadership Team
            </h2>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Dedicated leaders serving and guiding our community
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
                    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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
                    color: "#f5576c", 
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

      {/* Weekly Schedule */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              Weekly Schedule
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Join us throughout the week
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="ya-card" style={{...cardStyle, textAlign: "left"}}>
                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#f5576c" }}>
                    📅 Wednesday Night Bible Study
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 7:00 PM - 8:30 PM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Deep dive into Scripture with practical application for everyday life
                  </p>
                </div>

                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#f5576c" }}>
                    🏠 Friday Night Small Groups
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 7:30 PM - 9:00 PM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Gathering in homes across the city for fellowship and prayer
                  </p>
                </div>

                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#f5576c" }}>
                    🎵 Last Friday Worship Night
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 8:00 PM - 10:00 PM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Monthly worship gathering at the church
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#f5576c" }}>
                    ☕ Sunday Morning Meetup
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 9:00 AM (Before Service)
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Coffee and connection before the main service
                  </p>
                </div>
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
                  Get Connected
                </h2>
                <p style={{ fontSize: "1.1rem" }}>
                  We'd love to have you join our community!
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
                  ✅ Thanks! We'll reach out to you soon.
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
                      <option value="18-24">18-24</option>
                      <option value="25-29">25-29</option>
                      <option value="30-35">30-35</option>
                      <option value="36+">36+</option>
                    </select>
                  </div>

                  <div className="col-12 mb-3">
                    <label style={{ display: "block", marginBottom: "12px", fontWeight: "600" }}>
                      I'm interested in (check all that apply)
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                      {["Bible Studies", "Small Groups", "Worship Nights", "Service Projects", "Social Events"].map(interest => (
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
                      Tell us a bit about yourself
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
                  {submitting ? "Submitting..." : "Join the Community"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        padding: "60px 0", 
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div className="theme_container">
          <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
            Have Questions?
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
            We'd love to connect with you!
          </p>
          <div style={{ fontSize: "1.2rem" }}>
            <p style={{ marginBottom: "10px" }}>
              📧 Email: <a href="mailto:youngadults@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>youngadults@tsegachurch.org</a>
            </p>
            <p>
              📞 Phone: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>(123) 456-7890</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        .ya-card {
          transition: transform 0.3s;
        }
        
        .ya-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .ya-card {
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