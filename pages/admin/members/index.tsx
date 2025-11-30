import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";

type Member = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  maritalStatus?: string;
  status: string;
  ministry?: string;
  membershipType?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  joinedAt: string;
};

export default function AdminMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    maritalStatus: "",
    membershipType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    loadMembers();
  }, []);

  async function loadMembers() {
    try {
      setLoading(true);
      const res = await fetch("/api/members");
      if (!res.ok) throw new Error("Failed to load members");
      const data = await res.json();
      setMembers(data.members || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      if (editingId) {
        const res = await fetch(`/api/members/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!res.ok) throw new Error("Failed to update member");
        setEditingId(null);
      } else {
        const res = await fetch("/api/members", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!res.ok) throw new Error("Failed to add member");
      }

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        maritalStatus: "",
        membershipType: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
      });

      loadMembers();
    } catch (err: any) {
      setError(err.message);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this member?")) return;

    try {
      const res = await fetch(`/api/members/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete member");
      loadMembers();
    } catch (err: any) {
      setError(err.message);
    }
  }

  function handleEdit(member: Member) {
    setEditingId(member.id);
    setForm({
      firstName: member.firstName,
      lastName: member.lastName,
      email: member.email,
      phone: member.phone || "",
      dateOfBirth: member.dateOfBirth || "",
      maritalStatus: member.maritalStatus || "",
      membershipType: member.membershipType || "",
      address: member.address || "",
      city: member.city || "",
      state: member.state || "",
      zipCode: member.zipCode || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      maritalStatus: "",
      membershipType: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    });
  }

  return (
    <>
      <Head>
        <style>{`
          @media print {
            body * { visibility: hidden; }
            .print-area, .print-area * { visibility: visible; }
            .print-area { position: absolute; left: 0; top: 0; width: 100%; }
            .no-print { display: none !important; }
            table { width: 100%; border-collapse: collapse; font-size: 12px; }
            th, td { border: 1px solid #333; padding: 8px; text-align: left; }
            th { background-color: #f0f0f0 !important; -webkit-print-color-adjust: exact; }
            h2 { font-size: 18px; margin-bottom: 10px; }
            .print-header { text-align: center; margin-bottom: 20px; }
            .print-header h1 { font-size: 24px; margin-bottom: 5px; }
            .print-header p { font-size: 14px; color: #666; }
          }
        `}</style>
        <title>Admin — Members Manager | Tsega Church</title>
      </Head>
      <Header />

      <main style={{ 
        minHeight: "100vh", 
        padding: "120px 20px 60px", 
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-color)"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          
          {/* Form Card */}
          <div style={{
            backgroundColor: "var(--bg-color)",
            borderRadius: "12px",
            padding: "30px",
            marginBottom: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: "1px solid var(--border-color)"
          }}>
            <h2 style={{ 
              marginBottom: "20px", 
              fontSize: "24px", 
              fontWeight: "600",
              color: "var(--text-color)"
            }}>
              {editingId ? "Edit Member" : "Add New Member"}
            </h2>

            {error && (
              <div style={{
                padding: "12px 16px",
                backgroundColor: "#fee",
                color: "#c33",
                borderRadius: "8px",
                marginBottom: "20px"
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={form.dateOfBirth}
                    onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    Marital Status
                  </label>
                  <select
                    value={form.maritalStatus}
                    onChange={(e) => setForm({ ...form, maritalStatus: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  >
                    <option value="">Select...</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Engaged</option>
                    <option>Widowed</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    Membership Type *
                  </label>
                  <select
                    required
                    value={form.membershipType}
                    onChange={(e) => setForm({ ...form, membershipType: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  >
                    <option value="">Select...</option>
                    <option>New Member</option>
                    <option>Transfer</option>
                    <option>Baptism</option>
                    <option>Volunteer</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    Address
                  </label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    City
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    State/Province
                  </label>
                  <input
                    type="text"
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontWeight: "500", color: "var(--text-color)" }}>
                    ZIP/Postal Code
                  </label>
                  <input
                    type="text"
                    value={form.zipCode}
                    onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid var(--border-color)",
                      borderRadius: "6px",
                      fontSize: "15px",
                      backgroundColor: "var(--input-bg)",
                      color: "var(--text-color)"
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
                <button
                  type="submit"
                  style={{
                    padding: "12px 32px",
                    backgroundColor: "#6432c8",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  {editingId ? "Update Member" : "Add Member"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    style={{
                      padding: "12px 32px",
                      backgroundColor: "#666",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "15px",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Members Table */}
          <div style={{
            backgroundColor: "var(--bg-color)",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: "1px solid var(--border-color)"
          }}>
            {/* Print Header - only shows when printing */}
            <div className="print-header" style={{ display: "none" }}>
              <h1 style={{ fontSize: "24px", marginBottom: "5px" }}>GEECN Members List</h1>
              <p style={{ fontSize: "14px", color: "#666" }}>Total: {members.length} members</p>
            </div>
            {/* Print Button */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }} className="no-print">
              <h3 style={{ margin: 0, color: "var(--text-color)" }}>All Members</h3>
              <button onClick={() => window.print()} style={{ padding: "10px 20px", backgroundColor: "#10b981", color: "white", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>🖨️ Print List</button>
            </div>
            {loading ? (
              <p style={{ color: "var(--text-color)" }}>Loading members...</p>
            ) : (
              <>
                <div className="print-area" style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border-color)" }}>
                        <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Name</th>
                        <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>DOB</th>
                        <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Email</th>
                        <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Phone</th>
                        <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Membership</th>
                        <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Marital Status</th>
                        <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Location</th>
                        <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members.length === 0 ? (
                        <tr>
                          <td colSpan={8} style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
                            No members found
                          </td>
                        </tr>
                      ) : (
                        members.map((member) => (
                          <tr key={member.id} style={{ borderBottom: "1px solid var(--border-color)" }}>
                            <td style={{ padding: "16px" }}>
                              <div style={{ fontWeight: "600", color: "var(--text-color)" }}>
                                {member.firstName} {member.lastName}
                              </div>
                              {member.joinedAt && (
                                <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>
                                  {new Date(member.joinedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>
                              )}
                            </td>
                            <td style={{ padding: "16px", color: "var(--text-color)" }}>
                              {member.dateOfBirth 
                                ? new Date(member.dateOfBirth).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                                : "-"}
                            </td>
                            <td style={{ padding: "16px", color: "var(--text-color)" }}>{member.email || "-"}</td>
                            <td style={{ padding: "16px", color: "var(--text-color)" }}>{member.phone || "-"}</td>
                            <td style={{ padding: "16px", color: "var(--text-color)" }}>{member.membershipType || "-"}</td>
                            <td style={{ padding: "16px", color: "var(--text-color)" }}>{member.maritalStatus || "-"}</td>
                            <td style={{ padding: "16px", color: "var(--text-color)" }}>
                              {member.city && member.state
                                ? `${member.city}, ${member.state}`
                                : member.city || member.state || "-"}
                            </td>
                            <td style={{ padding: "16px" }}>
                              <button
                                onClick={() => handleEdit(member)}
                                style={{
                                  padding: "6px 16px",
                                  backgroundColor: "#6432c8",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "4px",
                                  fontSize: "13px",
                                  cursor: "pointer",
                                  marginRight: "8px"
                                }}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(member.id)}
                                style={{
                                  padding: "6px 16px",
                                  backgroundColor: "#dc3545",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "4px",
                                  fontSize: "13px",
                                  cursor: "pointer"
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: "20px", textAlign: "center", fontSize: "16px", fontWeight: "600", color: "var(--text-color)" }}>
                  Total Members: {members.length}
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
