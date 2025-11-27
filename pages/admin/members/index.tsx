// pages/admin/members/index.tsx
import Head from "next/head";
import { useMemo, useState } from "react";
import type React from "react";
import Header from "src/layouts/header/Header";
import Footer from "src/layouts/Footer";
import PageBanner from "@/src/components/PageBanner";
import { useAdminGuard } from "src/hooks/useAdminGuard";



type MemberStatus = "active" | "visitor" | "inactive";

type Member = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    status: MemberStatus;
    ministry?: string;
    joinedAt: string; // ISO date string
};

const initialMembers: Member[] = [
    {
        id: 1,
        firstName: "Fassil",
        lastName: "Tsegaye",
        email: "fassil@example.com",
        phone: "(615) 555-1001",
        status: "active",
        ministry: "Men's Ministry",
        joinedAt: "2024-01-15",
    },
    {
        id: 2,
        firstName: "Naomi",
        lastName: "Assefa",
        email: "naomi@example.com",
        phone: "(615) 555-1002",
        status: "active",
        ministry: "Kids Ministry",
        joinedAt: "2024-03-10",
    },
    {
        id: 3,
        firstName: "Dagem",
        lastName: "Samuel",
        email: "dagem@example.com",
        phone: "(615) 555-1003",
        status: "visitor",
        ministry: "Young Adults",
        joinedAt: "2024-09-01",
    },
    {
        id: 4,
        firstName: "Ruth",
        lastName: "Marta",
        email: "ruth@example.com",
        phone: "(615) 555-1004",
        status: "inactive",
        ministry: "Women’s Ministry",
        joinedAt: "2023-11-05",
    },
];

export default function AdminMembersPage() {
    useAdminGuard();
    const [members, setMembers] = useState<Member[]>(initialMembers);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<"" | MemberStatus>("");
    const [editingMember, setEditingMember] = useState<Member | null>(null);

    // Form state (used for both add & edit)
    const [form, setForm] = useState<{
        id?: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        status: MemberStatus;
        ministry: string;
        joinedAt: string;
    }>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        status: "active",
        ministry: "",
        joinedAt: new Date().toISOString().slice(0, 10),
    });

    const resetForm = () => {
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            status: "active",
            ministry: "",
            joinedAt: new Date().toISOString().slice(0, 10),
        });
        setEditingMember(null);
    };

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
            alert("First name, last name and email are required.");
            return;
        }

        if (editingMember) {
            // Update existing
            setMembers((prev) =>
                prev.map((m) =>
                    m.id === editingMember.id
                        ? {
                            ...m,
                            firstName: form.firstName.trim(),
                            lastName: form.lastName.trim(),
                            email: form.email.trim(),
                            phone: form.phone.trim() || undefined,
                            status: form.status,
                            ministry: form.ministry.trim() || undefined,
                            joinedAt: form.joinedAt,
                        }
                        : m
                )
            );
        } else {
            // Add new
            const nextId = members.length
                ? Math.max(...members.map((m) => m.id)) + 1
                : 1;

            const newMember: Member = {
                id: nextId,
                firstName: form.firstName.trim(),
                lastName: form.lastName.trim(),
                email: form.email.trim(),
                phone: form.phone.trim() || undefined,
                status: form.status,
                ministry: form.ministry.trim() || undefined,
                joinedAt: form.joinedAt,
            };

            setMembers((prev) => [newMember, ...prev]);
        }

        resetForm();
    };

    const handleEdit = (member: Member) => {
        setEditingMember(member);
        setForm({
            id: member.id,
            firstName: member.firstName,
            lastName: member.lastName,
            email: member.email,
            phone: member.phone || "",
            status: member.status,
            ministry: member.ministry || "",
            joinedAt: member.joinedAt,
        });
        // scroll to form
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleDelete = (id: number) => {
        if (!confirm("Are you sure you want to delete this member?")) return;
        setMembers((prev) => prev.filter((m) => m.id !== id));
    };

    const filteredMembers = useMemo(() => {
        return members.filter((m) => {
            const matchesSearch =
                `${m.firstName} ${m.lastName} ${m.email}`
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus = statusFilter ? m.status === statusFilter : true;

            return matchesSearch && matchesStatus;
        });
    }, [members, search, statusFilter]);

    const stats = useMemo(() => {
        const total = members.length;
        const active = members.filter((m) => m.status === "active").length;
        const visitors = members.filter((m) => m.status === "visitor").length;
        const inactive = members.filter((m) => m.status === "inactive").length;
        return { total, active, visitors, inactive };
    }, [members]);

    return (
        <>
            <Head>
                <title>Admin — Members Manager | Tsega Church</title>
            </Head>
            <Header />

            <PageBanner
                pageName="Members"
                pageTitle="Admin — Members Manager"

            />




            <main style={{ padding: "50px 0" }}>
                <div className="theme_container">
                    {/* Stats */}
                    <div className="row mb-4">
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Total Members</h4>
                                <p>{stats.total}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Active</h4>
                                <p>{stats.active}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Visitors</h4>
                                <p>{stats.visitors}</p>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="admin-stat-card">
                                <h4>Inactive</h4>
                                <p>{stats.inactive}</p>
                            </div>
                        </div>
                    </div>

                    {/* Top section: Form + Filters */}
                    <div className="row">
                        {/* Form */}
                        <div className="col-lg-4 mb-4">
                            <div className="admin-card">
                                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                                    {editingMember ? "Edit Member" : "Add New Member"}
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                                    {editingMember
                                        ? "Update this member's information."
                                        : "Fill in the details and add a new member."}
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-2">
                                        <label className="admin-label">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="admin-label">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="admin-label">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="admin-label">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="admin-label">Status</label>
                                        <select
                                            name="status"
                                            value={form.status}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                        >
                                            <option value="active">Active</option>
                                            <option value="visitor">Visitor</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label className="admin-label">Ministry</label>
                                        <input
                                            type="text"
                                            name="ministry"
                                            value={form.ministry}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                            placeholder="e.g. Men's Ministry"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="admin-label">Joined Date</label>
                                        <input
                                            type="date"
                                            name="joinedAt"
                                            value={form.joinedAt}
                                            onChange={handleFormChange}
                                            className="admin-input"
                                        />
                                    </div>

                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <button type="submit" className="primary_btn-two">
                                            {editingMember ? "Update Member" : "Add Member"}
                                        </button>
                                        {editingMember && (
                                            <button
                                                type="button"
                                                onClick={resetForm}
                                                className="admin-secondary-btn"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>

                                    <p
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "#9ca3af",
                                            marginTop: "8px",
                                        }}
                                    >
                                        Note: This demo version stores data only in the browser
                                        state. Refreshing the page will reset the list.
                                    </p>
                                </form>
                            </div>
                        </div>

                        {/* List / Table */}
                        <div className="col-lg-8 mb-4">
                            <div className="admin-card">
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "10px",
                                        justifyContent: "space-between",
                                        marginBottom: "15px",
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.3rem",
                                            margin: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <i className="fas fa-users" /> Members List
                                    </h3>

                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "10px",
                                            flexWrap: "wrap",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Search by name or email..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="admin-input"
                                            style={{ maxWidth: "220px" }}
                                        />

                                        <select
                                            value={statusFilter}
                                            onChange={(e) =>
                                                setStatusFilter(
                                                    e.target.value as "" | MemberStatus
                                                )
                                            }
                                            className="admin-input"
                                            style={{ maxWidth: "150px" }}
                                        >
                                            <option value="">All Status</option>
                                            <option value="active">Active</option>
                                            <option value="visitor">Visitors</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table admin-table">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email / Phone</th>
                                            <th>Status</th>
                                            <th>Ministry</th>
                                            <th>Joined</th>
                                            <th style={{ width: "120px" }}>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {filteredMembers.length === 0 && (
                                            <tr>
                                                <td colSpan={6} style={{ textAlign: "center" }}>
                                                    No members found.
                                                </td>
                                            </tr>
                                        )}

                                        {filteredMembers.map((m) => (
                                            <tr key={m.id}>
                                                <td>
                                                    <strong>
                                                        {m.firstName} {m.lastName}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <div>{m.email}</div>
                                                    {m.phone && (
                                                        <div
                                                            style={{
                                                                fontSize: "0.85rem",
                                                                color: "#6b7280",
                                                            }}
                                                        >
                                                            {m.phone}
                                                        </div>
                                                    )}
                                                </td>
                                                <td>
                            <span
                                className={`badge badge-${m.status}`}
                                style={{ textTransform: "capitalize" }}
                            >
                              {m.status}
                            </span>
                                                </td>
                                                <td>{m.ministry || "-"}</td>
                                                <td>
                                                    {new Date(m.joinedAt).toLocaleDateString("en-US")}
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-outline-primary me-1"
                                                        type="button"
                                                        onClick={() => handleEdit(m)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        type="button"
                                                        onClick={() => handleDelete(m.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Styles */}
            <style jsx global>{`
        .admin-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 20px 20px 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
        }

        .admin-stat-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 16px 18px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
        }

        .admin-stat-card h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .admin-stat-card p {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .admin-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 4px;
          color: #4b5563;
        }

        .admin-input {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          padding: 8px 10px;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .admin-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
        }

        .admin-secondary-btn {
          border-radius: 999px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
          padding: 8px 16px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
        }

        .admin-secondary-btn:hover {
          background: #e5e7eb;
        }

        .admin-table th {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: #6b7280;
          border-bottom: 1px solid #e5e7eb;
        }

        .admin-table td {
          vertical-align: middle;
          font-size: 0.92rem;
        }

        .badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .badge-active {
          background: #dcfce7;
          color: #166534;
        }

        .badge-visitor {
          background: #e0f2fe;
          color: #075985;
        }

        .badge-inactive {
          background: #fef3c7;
          color: #92400e;
        }

        /* Dark mode support */
        .dark-mode .admin-card,
        .dark-mode .admin-stat-card {
          background: #111827 !important;
          color: #e5e7eb !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7) !important;
        }

        .dark-mode .admin-input {
          background: #111827 !important;
          border-color: #374151 !important;
          color: #e5e7eb !important;
        }

        .dark-mode .admin-input:focus {
          border-color: #4f46e5 !important;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.4) !important;
        }

        .dark-mode .admin-table th {
          border-bottom-color: #374151 !important;
          color: #9ca3af !important;
        }

        .dark-mode .admin-table td {
          border-color: #1f2933 !important;
        }
      `}</style>
        </>
    );
}
