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
        <title>Tsega Church — Contact</title>
      </Head>

      <Header />
      <PageBanner pageName="Contact" pageTitle="Get in Touch" />

      {/* CONTACT CONTENT */}
      <section className="section-contact" style={{ padding: "60px 0" }}>
        <div className="theme_container">
          <div className="row">
            {/* Left: Contact Info */}
            <div className="col-lg-5 col-md-12">
              <div className="contact-card">
                <h3 className="mb-3">Church Info</h3>
                <p className="mb-4">
                  We’d love to hear from you. Reach out for prayer, questions,
                  or to plan your visit.
                </p>

                <ul className="contact-list">
                  <li>
                    <i className="far fa-map-marker-alt" />
                    <span>5227 Murfreesboro Rd La Vergne, TN 37086</span>
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="mailto:info@tsegachurch.org">
                      info@tsegachurch.org
                    </a>
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="tel:+11234567890">+1 (615) 485-1516</a>
                  </li>
                  <li>
                    <i className="far fa-clock" />
                    <span>Sunday Service: 10:00 AM</span>
                  </li>
                </ul>

                <div className="social-link" style={{ marginTop: 16 }}>
                  <ul>
                    <li>
                      <a href="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Instagram">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="YouTube">
                        <i className="fab fa-youtube" />
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
                  {/* Replace src with your church map embed */}
                  <iframe
                    title="Church Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153..."
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
