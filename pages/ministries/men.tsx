import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

export default function MensMinistry() {
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
      role: "Ministry Director",
      bio: "Equipping men to lead with godly character"
    },
    {
      name: "TBD",
      role: "Men's Bible Study Leader",
      bio: "Teaching God's Word with passion and truth"
    },
    {
      name: "TBD",
      role: "Prayer Team Coordinator",
      bio: "Leading men in powerful intercession"
    },
    {
      name: "TBD",
      role: "Outreach Leader",
      bio: "Mobilizing men to serve the community"
    }
  ];

  const ministries = [
    {
      icon: "📖",
      title: "Bible Studies",
      description: "Weekly gatherings to dig deep into Scripture and apply God's truth to everyday life"
    },
    {
      icon: "🙏",
      title: "Prayer Meetings",
      description: "Standing together in prayer for our families, church, and nation"
    },
    {
      icon: "🤝",
      title: "Mentorship",
      description: "Connecting seasoned men of faith with those seeking guidance and accountability"
    },
    {
      icon: "🛠️",
      title: "Service Projects",
      description: "Hands-on opportunities to serve our community and demonstrate Christ's love"
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
        <title>Men's Ministry / የወንዶች አገልግሎት — Tsega Church</title>
      </Head>
      <Header />
        <PageBanner
            pageName="Men's Ministry"
            pageTitle="Men's Ministry"

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
                  The Men's Ministry at Tsega Church is committed to helping men grow in faith, 
                  integrity, and leadership. We believe men are called to lead their homes, 
                  workplaces, and communities with humility and strength through Christ.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                  Through prayer groups, Bible studies, mentorship, and community service, we 
                  encourage men to support one another and live out their faith boldly. Together, 
                  we build brotherhood and become godly examples for future generations.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mm-card" style={cardStyle}>
                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>⚔️</div>
                <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
                  Iron Sharpens Iron
                </h3>
                <p style={{ fontSize: "1rem" }}>
                  "As iron sharpens iron, so one person sharpens another." - Proverbs 27:17
                  <br /><br />
                  We believe in authentic brotherhood where men challenge, encourage, and hold 
                  each other accountable in the pursuit of godly character.
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
              What We Do
            </h2>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Opportunities to grow, connect, and serve together
            </p>
          </div>
          
          <div className="row">
            {ministries.map((ministry, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="mm-card" style={cardStyle}>
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
              Men committed to serving and leading by example
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
                    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
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
                    color: "#2a5298", 
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
              Weekly Gatherings
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Join us throughout the week
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mm-card" style={{...cardStyle, textAlign: "left"}}>
                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#2a5298" }}>
                    📖 Thursday Night Bible Study
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 7:00 PM - 8:30 PM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Deep dive into Scripture with practical application for men
                  </p>
                </div>

                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#2a5298" }}>
                    🙏 Saturday Morning Prayer
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 6:30 AM - 7:30 AM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Early morning prayer and fellowship (coffee provided!)
                  </p>
                </div>

                <div style={{ marginBottom: "25px", paddingBottom: "25px", borderBottom: "1px solid #eee" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#2a5298" }}>
                    🍳 First Saturday Breakfast
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 8:00 AM - 10:00 AM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Monthly breakfast with teaching and testimonies
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px", color: "#2a5298" }}>
                    🛠️ Third Saturday Service Day
                  </h4>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                    <strong>Time:</strong> 9:00 AM - 1:00 PM
                  </p>
                  <p style={{ fontSize: "0.95rem" }}>
                    Serving our community through hands-on projects
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
              Annual Events
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Significant gatherings throughout the year
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="mm-card" style={cardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#2a5298" }}>
                  ⛰️ Men's Retreat
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                  A weekend away for spiritual renewal, fellowship, and challenge in God's creation
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="mm-card" style={cardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#2a5298" }}>
                  👨‍👦 Father-Son Camp
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                  Building bonds between fathers and sons through outdoor adventure and discipleship
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="mm-card" style={cardStyle}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "15px", color: "#2a5298" }}>
                  🏈 Men's Conference
                </h4>
                <p style={{ fontSize: "0.95rem" }}>
                  Annual one-day conference with powerful teaching and worship for men
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
                  Join the Brotherhood
                </h2>
                <p style={{ fontSize: "1.1rem" }}>
                  We'd love to have you join us!
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
                  ✅ Thanks brother! We'll reach out soon.
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
                      {["Bible Studies", "Prayer Meetings", "Mentorship", "Service Projects", "Annual Events"].map(interest => (
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
                      Tell us about yourself
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
                  {submitting ? "Submitting..." : "Join the Men"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        padding: "60px 0", 
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div className="theme_container">
          <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
            Got Questions?
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "25px", opacity: 0.9 }}>
            We're here to connect with you!
          </p>
          <div style={{ fontSize: "1.2rem" }}>
            <p style={{ marginBottom: "10px" }}>
              📧 Email: <a href="mailto:men@tsegachurch.org" style={{ color: "white", textDecoration: "underline" }}>men@tsegachurch.org</a>
            </p>
            <p>
              📞 Phone: <a href="tel:+1234567890" style={{ color: "white", textDecoration: "underline" }}>(123) 456-7890</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        .mm-card {
          transition: transform 0.3s;
        }
        
        .mm-card:hover {
          transform: translateY(-5px);
        }
        
        /* Dark Mode Support */
        .dark-mode .mm-card {
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