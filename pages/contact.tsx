// pages/contact.tsx
import Head from "next/head";
import { useState, FormEvent } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "src/components/PageBanner";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "error">(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head>
          <style>{`
  .dark-mode .section-contact {
    background-color: #1a1a1a !important;
  }
  
  .dark-mode .contact-card,
  .dark-mode .form-card {
    background-color: #2d2d2d !important;
    color: #fff !important;
  }
  
  .dark-mode .contact-card h3,
  .dark-mode .form-card h3,
  .dark-mode .form-label {
    color: #fff !important;
  }
  
  .dark-mode .contact-card p,
  .dark-mode .contact-list span,
  .dark-mode .contact-list a {
    color: #ccc !important;
  }
  
  .dark-mode .form-control {
    background-color: #3d3d3d !important;
    border-color: #4d4d4d !important;
    color: #fff !important;
  }
`}</style>
        <title>Tsega Church — Contact</title>
      </Head>

      <Header />
      <PageBanner
          pageName="Get in Touch"
          pageTitle="Get in Touch"

      />

      {/* CONTACT CONTENT */}
      <section className="section-contact"
               style={{
                   padding: "60px 0",
               background: "var(--bg-color, #ffffff"}}>
        <div className="theme_container">
          <div className="row">
            {/* Left: Contact Info */}
            <div className="col-lg-5 col-md-12">
              <div className="contact-card">
                <h3 className="mb-3">Church Info</h3>
                <p className="mb-4">
                  We'd love to hear from you. Reach out for prayer, questions,
                  or to plan your visit.
                </p>

                <ul className="contact-list">
                  <li>
                    <i className="far fa-map-marker-alt" />
                    <span>5227 Murfreesboro Rd La Vergne, TN 37086</span>
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="mailto:fassil661@gmail.com">fassil661@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="tel:+16154851516">+1 (615) 485-1516</a>
                  </li>
                  <li>
                    <i className="far fa-clock" />
                    <span>Sunday Service: 10:00 AM</span>
                  </li>
                </ul>

                <div className="social-link" style={{ marginTop: 16 }}>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "15px",
                      paddingLeft: 0,
                      listStyle: "none",
                    }}
                  >
                    <li>
                      <a
                        href="https://facebook.com/geecn1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Instagram">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@geecn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-label="TikTok"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "36px",
                          height: "36px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div className="map-card" style={{ marginTop: 24 }}>
                <div
                  className="ratio ratio-16x9"
                  style={{ borderRadius: 8, overflow: "hidden" }}
                >
                  <iframe
                    title="Church Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.384858371944!2d-86.54468082397806!3d36.01434797254859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864178e5e5e5e5f%3A0x1234567890abcdef!2s5227%20Murfreesboro%20Rd%2C%20La%20Vergne%2C%20TN%2037086!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="col-lg-7 col-md-12">
              <div className="form-card">
                <h3 className="mb-3">Send us a Message</h3>
                <form onSubmit={onSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Your Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Message*</label>
                      <textarea
                        className="form-control"
                        rows={6}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <button className="primary_btn-two" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"}
                  </button>

                  {status === "ok" && (
                    <div className="alert alert-success mt-3">
                      Thank you! Your message has been sent.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="alert alert-danger mt-3">
                      Sorry, something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
