import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

export default function AudioVisualMinistry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
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
        experience: "",
        interests: [],
        message: "",
      });
    }, 1000);
  };

  const teamMembers = [
    {
      name: "Sileshi Tesfaye",
      role: "Audio Director",
      bio: "10+ years of sound engineering experience"
    },
    {
      name: "TBD",
      role: "Video Production Lead",
      bio: "Professional videographer and editor"
    },
    {
      name: "Dawit Mekonnen ",
      role: "Livestream Coordinator",
      bio: "Specialist in live streaming technology"
    },
    {
      name: "TBD",
      role: "Lighting Designer",
      bio: "Creative lighting for worship environments"
    }
  ];

  const services = [
    {
      icon: "🎤",
      title: "Sound Engineering",
      description: "Professional audio mixing for services, ensuring crystal-clear sound quality"
    },
    {
      icon: "🎥",
      title: "Video Production",
      description: "Multi-camera recording and live streaming to reach our online congregation"
    },
    {
      icon: "💡",
      title: "Lighting Design",
      description: "Dynamic lighting that enhances worship and creates the right atmosphere"
    },
    {
      icon: "📺",
      title: "Presentation Media",
      description: "Worship lyrics, sermon notes, and announcements displayed seamlessly"
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

  const equipmentCardStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
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
        <title>Audio-Visual Ministry / የድምጽ እና ቪዲዮ አገልግሎት — Tsega Church</title>
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
              Audio-Visual Ministry
            </h1>
            <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "10px" }}>
              የድምጽ እና ቪዲዮ አገልግሎት
            </p>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Serving Behind the Scenes to Create Excellence in Worship
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
                  The Audio-Visual Ministry serves faithfully behind the scenes to create a worship 
                  environment where sound, lighting, and media all come together to glorify God. Our 
                  team ensures every song, sermon, and announcement is experienced with clarity and 
                  excellence—both in-person and online.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  From operating soundboards and cameras to managing livestreams and presentations, 
                  this ministry plays a vital role in communicating the gospel through technology.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="av-card" style={cardStyle}>
                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎬</div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                  Technology Meets Faith
                </h3>
                <p style={{ fontSize: "1rem" }}>
                  We believe that excellence in production helps eliminate distractions, 
                  allowing people to focus on worship and hearing God's Word clearly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              What We Do
            </h2>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Our ministry covers every technical aspect of worship services
            </p>
          </div>
          
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="av-card" style={cardStyle}>
                  <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{service.icon}</div>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "15px" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {service.description}
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
              Dedicated volunteers serving with excellence
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

      {/* Equipment Section */}
      <section style={{ padding: "80px 0" }}>
        <div className="theme_container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              Our Equipment
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Professional tools for professional service
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="equipment-card" style={equipmentCardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                  🎛️ Audio System
                </h4>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "0.95rem" }}>
                  <li style={{ marginBottom: "8px" }}>• Digital mixing console</li>
                  <li style={{ marginBottom: "8px" }}>• Wireless microphone systems</li>
                  <li style={{ marginBottom: "8px" }}>• Professional monitor speakers</li>
                  <li style={{ marginBottom: "8px" }}>• Recording equipment</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="equipment-card" style={equipmentCardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                  📹 Video Production
                </h4>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "0.95rem" }}>
                  <li style={{ marginBottom: "8px" }}>• HD broadcast cameras</li>
                  <li style={{ marginBottom: "8px" }}>• Video switcher</li>
                  <li style={{ marginBottom: "8px" }}>• Livestream encoder</li>
                  <li style={{ marginBottom: "8px" }}>• Video editing suite</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="equipment-card" style={equipmentCardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px" }}>
                  💡 Lighting & Display
                </h4>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "0.95rem" }}>
                  <li style={{ marginBottom: "8px" }}>• LED stage lighting</li>
                  <li style={{ marginBottom: "8px" }}>• DMX control system</li>
                  <li style={{ marginBottom: "8px" }}>• Large projection screens</li>
                  <li style={{ marginBottom: "8px" }}>• Presentation software</li>
                </ul>
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
                  Join Our Team
                </h2>
                <p style={{ fontSize: "1.1rem" }}>
                  We're always looking for passionate volunteers who want to serve through technology
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
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select...</option>
                      <option value="beginner">Beginner - Willing to learn</option>
                      <option value="intermediate">Intermediate - Some experience</option>
                      <option value="advanced">Advanced - Professional level</option>
                    </select>
                  </div>

                  <div className="col-12 mb-3">
                    <label style={{ display: "block", marginBottom: "12px", fontWeight: "600" }}>
                      Areas of Interest (check all that apply)
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                      {["Sound Engineering", "Video Production", "Lighting", "Livestreaming", "Presentation/Graphics"].map(interest => (
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
                      Tell us about yourself and why you want to join
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
            Questions About Joining?
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
            We'd love to hear from you! Reach out to our ministry coordinator.
          </p>
          <div style={{ fontSize: "1.2rem" }}>
            <p style={{ marginBottom: "10px" }}>
              📧 Email: <a href="mailto:av@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>av@tsegachurch.org</a>
            </p>
            <p>
              📞 Phone: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>(123) 456-7890</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        .av-card,
        .equipment-card {
          transition: transform 0.3s;
        }
        
        .av-card:hover,
        .equipment-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .av-card,
        .dark-mode .equipment-card {
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