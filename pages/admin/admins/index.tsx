import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";

type Admin = {
  id: string;
  email: string;
  name: string;
  role: string;
  is_active: boolean;
  created_at: string;
};

export default function AdminsManager() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <p>Loading...</p>
      </div>
    );
  }

  return <AuthenticatedContent />;
}

function AuthenticatedContent() {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  useEffect(() => {
    loadAdmins();
  }, []);

  async function loadAdmins() {
    try {
      setLoading(true);
      const res = await fetch("/api/admins");
      if (!res.ok) throw new Error("Failed to load admins");
      const data = await res.json();
      setAdmins(data.admins || []);
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
      const res = await fetch("/api/setup-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create admin");
      }

      setForm({ name: "", email: "", password: "", role: "admin" });
      setShowForm(false);
      loadAdmins();
    } catch (err: any) {
      setError(err.message);
    }
  }

  async function handleToggleActive(admin: Admin) {
    if (!confirm(`Are you sure you want to ${admin.is_active ? 'deactivate' : 'activate'} ${admin.name}?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admins/${admin.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: !admin.is_active }),
      });

      if (!res.ok) throw new Error("Failed to update admin");
      loadAdmins();
    } catch (err: any) {
      setError(err.message);
    }
  }

  async function handleDelete(admin: Admin) {
    if (!confirm(`Are you sure you want to DELETE ${admin.name}? This cannot be undone!`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admins/${admin.id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete admin");
      loadAdmins();
    } catch (err: any) {
      setError(err.message);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid var(--border-color)",
    borderRadius: "6px",
    fontSize: "15px",
    backgroundColor: "var(--input-bg)",
    color: "var(--text-color)"
  };

  const labelStyle = {
    display: "block" as const,
    marginBottom: "6px",
    fontWeight: "500" as const,
    color: "var(--text-color)"
  };

  return (
    <>
      <Head>
        <title>Admin Management | GEECN</title>
      </Head>
      <Header />
      <PageBanner pageName="Admin Management" pageTitle="Manage Administrators" />

      <main style={{ padding: "60px 0", backgroundColor: "var(--bg-secondary)" }}>
        <div className="theme_container">
          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px"
          }}>
            <h1 style={{ fontSize: "28px", color: "var(--text-color)", margin: 0 }}>
              Administrators ({admins.length})
            </h1>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{
                padding: "12px 24px",
                backgroundColor: "#6432c8",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              {showForm ? "Cancel" : "+ Add New Admin"}
            </button>
          </div>

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

          {/* Add Admin Form */}
          {showForm && (
            <div style={{
              backgroundColor: "var(--bg-color)",
              borderRadius: "12px",
              padding: "30px",
              marginBottom: "30px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid var(--border-color)"
            }}>
              <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "var(--text-color)" }}>
                Add New Administrator
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="admin@geecn.org"
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={labelStyle}>Password *</label>
                    <input
                      type="password"
                      required
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="Min 8 characters"
                      minLength={8}
                      style={inputStyle}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label style={labelStyle}>Role</label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      style={inputStyle}
                    >
                      <option value="admin">Admin</option>
                      <option value="super_admin">Super Admin</option>
                    </select>
                  </div>
                </div>

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
                  Create Admin
                </button>
              </form>
            </div>
          )}

          {/* Admins List */}
          <div style={{
            backgroundColor: "var(--bg-color)",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            border: "1px solid var(--border-color)"
          }}>
            {loading ? (
              <p style={{ color: "var(--text-color)" }}>Loading admins...</p>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--border-color)" }}>
                      <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Name</th>
                      <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Email</th>
                      <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Role</th>
                      <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Status</th>
                      <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Created</th>
                      <th style={{ padding: "12px", textAlign: "left", fontWeight: "600", color: "var(--text-color)" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>
                          No admins found
                        </td>
                      </tr>
                    ) : (
                      admins.map((admin) => (
                        <tr key={admin.id} style={{ borderBottom: "1px solid var(--border-color)" }}>
                          <td style={{ padding: "16px", color: "var(--text-color)", fontWeight: "600" }}>
                            {admin.name}
                          </td>
                          <td style={{ padding: "16px", color: "var(--text-color)" }}>
                            {admin.email}
                          </td>
                          <td style={{ padding: "16px" }}>
                            <span style={{
                              padding: "4px 12px",
                              borderRadius: "4px",
                              fontSize: "13px",
                              backgroundColor: admin.role === "super_admin" ? "#fef3c7" : "#e0e7ff",
                              color: "#111"
                            }}>
                              {admin.role}
                            </span>
                          </td>
                          <td style={{ padding: "16px" }}>
                            <span style={{
                              padding: "4px 12px",
                              borderRadius: "4px",
                              fontSize: "13px",
                              backgroundColor: admin.is_active ? "#d1fae5" : "#fee",
                              color: "#111"
                            }}>
                              {admin.is_active ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td style={{ padding: "16px", color: "var(--text-muted)", fontSize: "14px" }}>
                            {new Date(admin.created_at).toLocaleDateString()}
                          </td>
                          <td style={{ padding: "16px" }}>
                            <button
                              onClick={() => handleToggleActive(admin)}
                              style={{
                                padding: "6px 12px",
                                backgroundColor: admin.is_active ? "#f59e0b" : "#10b981",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                fontSize: "13px",
                                cursor: "pointer",
                                marginRight: "8px"
                              }}
                            >
                              {admin.is_active ? "Deactivate" : "Activate"}
                            </button>
                            <button
                              onClick={() => handleDelete(admin)}
                              style={{
                                padding: "6px 12px",
                                backgroundColor: "#dc2626",
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
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
