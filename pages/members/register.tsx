// pages/members/register.tsx
import Head from "next/head";
import { useState } from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  maritalStatus: string;
  membershipType: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  prayerRequest: string;
  agree: boolean;
};

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  maritalStatus: "",
  membershipType: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  prayerRequest: "",
  agree: false,
};

export default function MembersRegister() {
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setData((s) => ({
        ...s,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setData((s) => ({ ...s, [name]: value }));
    }
  };

  const validate = (): string[] => {
    const issues: string[] = [];
    if (!data.firstName.trim()) issues.push("First name is required.");
    if (!data.lastName.trim()) issues.push("Last name is required.");
    if (!data.email.trim()) issues.push("Email is required.");
    if (!/^\S+@\S+\.\S+$/.test(data.email))
      issues.push("Email format looks invalid.");
    if (!data.phone.trim()) issues.push("Phone is required.");
    if (!data.membershipType) issues.push("Please select a membership type.");
    if (!data.agree) issues.push("You must agree to the privacy policy.");
    return issues;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    const issues = validate();
    if (issues.length) {
      setError(issues[0]);
      return;
    }

    try {
      setSubmitting(true);

      // TODO: Connect to your backend / Google Form / Airtable / Supabase later.
      // For now we just simulate a submit delay and show success.
      await new Promise((r) => setTimeout(r, 800));

      setSuccess("Thank you! Your registration was received.");
      setData(initialData);
    } catch (err) {
      setError("Something went wrong submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Members Register — Tsega Church</title>
      </Head>

      <Header />

      {/* Page Banner (simple) */}
      <section
        className="page-title"
        style={{
          backgroundImage: "url(/assets/images/resource/bg-page-title2.png)",
        }}
      >
        <div className="theme_container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className="title">
                <h1>Members Register</h1>
              </div>
              <ul className="bread-crumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Members Register</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="theme_container" style={{ padding: "56px 0" }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card members-card shadow-lg border-0">
              <div className="card-body p-4 p-md-5">
                <h2 className="mb-3">Join the Family</h2>
                <p className="text-muted mb-4">
                  Fill out the form below and our team will follow up with next
                  steps.
                </p>

                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">First Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={data.firstName}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={data.lastName}
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={data.email}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={data.phone}
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        name="dob"
                        value={data.dob}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Marital Status</label>
                      <select
                        className="form-select"
                        name="maritalStatus"
                        value={data.maritalStatus}
                        onChange={onChange}
                      >
                        <option value="">Select…</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Engaged</option>
                        <option>Widowed</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Membership Type *</label>
                      <select
                        className="form-select"
                        name="membershipType"
                        value={data.membershipType}
                        onChange={onChange}
                        required
                      >
                        <option value="">Select…</option>
                        <option>New Member</option>
                        <option>Transfer</option>
                        <option>Baptism</option>
                        <option>Volunteer</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={data.address}
                        onChange={onChange}
                        placeholder="Street address"
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={data.city}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">State/Province</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={data.state}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">ZIP/Postal</label>
                      <input
                        type="text"
                        className="form-control"
                        name="zip"
                        value={data.zip}
                        onChange={onChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Prayer Requests</label>
                      <textarea
                        className="form-control"
                        name="prayerRequest"
                        rows={4}
                        value={data.prayerRequest}
                        onChange={onChange}
                        placeholder="How can we pray for you?"
                      />
                    </div>

                    <div className="col-12 d-flex align-items-start">
                      <input
                        id="agree"
                        type="checkbox"
                        className="form-check-input me-2 mt-1"
                        name="agree"
                        checked={data.agree}
                        onChange={onChange}
                      />
                      <label htmlFor="agree" className="form-check-label">
                        I agree to the church’s privacy policy and consent to be
                        contacted. *
                      </label>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2 mt-4">
                    <button
                      type="submit"
                      className="primary_btn-two"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting…" : "Submit Registration"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setData(initialData);
                        setError(null);
                        setSuccess(null);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Optional side info */}
            <div className="text-center text-muted small mt-3">
              Need help? Email us at{" "}
              <a href="mailto:info@tsegachurch.org">info@tsegachurch.org</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
