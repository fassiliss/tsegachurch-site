import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useRouter } from 'next/router'

export default function TestMembers() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [members, setMembers] = useState([])
  const [filteredMembers, setFilteredMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [newMember, setNewMember] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    date_of_birth: '',
    marital_status: '',
    membership_type: '',
    address: '',
    city: '',
    state_province: '',
    zip_postal: '',
    prayer_requests: ''
  })
  const [editMember, setEditMember] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    date_of_birth: '',
    marital_status: '',
    membership_type: '',
    address: '',
    city: '',
    state_province: '',
    zip_postal: '',
    prayer_requests: ''
  })

  // Check authentication on mount
  useEffect(() => {
    checkUser()
    
    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        router.push('/admin-login')
      }
      setUser(session?.user ?? null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  async function checkUser() {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      router.push('/admin-login')
      return
    }
    
    setUser(session.user)
    fetchMembers()
  }

  async function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
      await supabase.auth.signOut()
      router.push('/admin-login')
    }
  }

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredMembers(members)
    } else {
      const filtered = members.filter(member => 
        member.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (member.email && member.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (member.phone && member.phone.includes(searchTerm))
      )
      setFilteredMembers(filtered)
    }
  }, [searchTerm, members])

  async function fetchMembers() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setMembers(data || [])
      setFilteredMembers(data || [])
    } catch (error) {
      console.error('Error:', error)
      alert('Error loading members: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  async function addMember(e) {
    e.preventDefault()
    
    try {
      const { error } = await supabase
        .from('members')
        .insert([newMember])
      
      if (error) throw error
      
      alert('Member added successfully!')
      setNewMember({ 
        first_name: '', 
        last_name: '', 
        email: '', 
        phone: '',
        date_of_birth: '',
        marital_status: '',
        membership_type: '',
        address: '',
        city: '',
        state_province: '',
        zip_postal: '',
        prayer_requests: ''
      })
      fetchMembers()
    } catch (error) {
      alert('Error adding member: ' + error.message)
    }
  }

  async function deleteMember(id, name) {
    if (!confirm(`Are you sure you want to delete ${name}?`)) {
      return
    }

    try {
      const { error } = await supabase
        .from('members')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      
      alert('Member deleted successfully!')
      fetchMembers()
    } catch (error) {
      alert('Error deleting member: ' + error.message)
    }
  }

  function startEdit(member) {
    setEditingId(member.id)
    setEditMember({
      first_name: member.first_name,
      last_name: member.last_name,
      email: member.email || '',
      phone: member.phone || '',
      date_of_birth: member.date_of_birth || '',
      marital_status: member.marital_status || '',
      membership_type: member.membership_type || '',
      address: member.address || '',
      city: member.city || '',
      state_province: member.state_province || '',
      zip_postal: member.zip_postal || '',
      prayer_requests: member.prayer_requests || ''
    })
  }

  function cancelEdit() {
    setEditingId(null)
    setEditMember({ 
      first_name: '', 
      last_name: '', 
      email: '', 
      phone: '',
      date_of_birth: '',
      marital_status: '',
      membership_type: '',
      address: '',
      city: '',
      state_province: '',
      zip_postal: '',
      prayer_requests: ''
    })
  }

  async function saveEdit(id) {
    try {
      const { error } = await supabase
        .from('members')
        .update(editMember)
        .eq('id', id)
      
      if (error) throw error
      
      alert('Member updated successfully!')
      setEditingId(null)
      fetchMembers()
    } catch (error) {
      alert('Error updating member: ' + error.message)
    }
  }

  function formatDate(dateString) {
    if (!dateString) return '-'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  if (loading) return <div style={{padding: '20px'}}>Loading...</div>

  const inputStyle = { 
    padding: '8px', 
    width: '100%', 
    marginBottom: '10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '14px'
  }

  const tableInputStyle = {
    padding: '4px',
    width: '100%',
    fontSize: '13px',
    border: '1px solid #ddd',
    borderRadius: '3px'
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '1600px', margin: '0 auto' }}>
      {/* HEADER WITH LOGOUT */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Church Member Management</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {user && (
            <span style={{ color: '#666', fontSize: '14px' }}>
              Logged in as: <strong>{user.email}</strong>
            </span>
          )}
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* ADD NEW MEMBER FORM */}
      <div style={{ background: '#f0f0f0', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
        <h2>Add New Member</h2>
        <form onSubmit={addMember}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
            {/* Basic Information */}
            <div>
              <label style={labelStyle}>First Name *</label>
              <input
                type="text"
                placeholder="First Name"
                value={newMember.first_name}
                onChange={(e) => setNewMember({...newMember, first_name: e.target.value})}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Last Name *</label>
              <input
                type="text"
                placeholder="Last Name"
                value={newMember.last_name}
                onChange={(e) => setNewMember({...newMember, last_name: e.target.value})}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="Email"
                value={newMember.email}
                onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Phone *</label>
              <input
                type="tel"
                placeholder="Phone"
                value={newMember.phone}
                onChange={(e) => setNewMember({...newMember, phone: e.target.value})}
                required
                style={inputStyle}
              />
            </div>

            {/* Personal Details */}
            <div>
              <label style={labelStyle}>Date of Birth</label>
              <input
                type="date"
                value={newMember.date_of_birth}
                onChange={(e) => setNewMember({...newMember, date_of_birth: e.target.value})}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Marital Status</label>
              <select
                value={newMember.marital_status}
                onChange={(e) => setNewMember({...newMember, marital_status: e.target.value})}
                style={inputStyle}
              >
                <option value="">Select...</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Engaged">Engaged</option>
                <option value="Widowed">Widowed</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Membership Type *</label>
              <select
                value={newMember.membership_type}
                onChange={(e) => setNewMember({...newMember, membership_type: e.target.value})}
                required
                style={inputStyle}
              >
                <option value="">Select...</option>
                <option value="New Member">New Member</option>
                <option value="Transfer">Transfer</option>
                <option value="Baptism">Baptism</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </div>

            {/* Address Information */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Address</label>
              <input
                type="text"
                placeholder="Street Address"
                value={newMember.address}
                onChange={(e) => setNewMember({...newMember, address: e.target.value})}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>City</label>
              <input
                type="text"
                placeholder="City"
                value={newMember.city}
                onChange={(e) => setNewMember({...newMember, city: e.target.value})}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>State/Province</label>
              <input
                type="text"
                placeholder="State/Province"
                value={newMember.state_province}
                onChange={(e) => setNewMember({...newMember, state_province: e.target.value})}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>ZIP/Postal Code</label>
              <input
                type="text"
                placeholder="ZIP/Postal"
                value={newMember.zip_postal}
                onChange={(e) => setNewMember({...newMember, zip_postal: e.target.value})}
                style={inputStyle}
              />
            </div>

            {/* Prayer Requests */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Prayer Requests</label>
              <textarea
                placeholder="Prayer Requests"
                value={newMember.prayer_requests}
                onChange={(e) => setNewMember({...newMember, prayer_requests: e.target.value})}
                rows={3}
                style={{...inputStyle, resize: 'vertical'}}
              />
            </div>
          </div>

          <button 
            type="submit" 
            style={{ 
              padding: '12px 24px', 
              background: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '10px'
            }}
          >
            Add Member
          </button>
        </form>
      </div>

      {/* SEARCH */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search members by name, email, or phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', width: '100%', maxWidth: '400px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
      </div>

      {/* MEMBERS TABLE */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white' }}>
          <thead>
            <tr style={{ background: '#333', color: 'white' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>DOB</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Phone</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Membership</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Marital Status</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Location</th>
              <th style={{ padding: '12px', textAlign: 'left', minWidth: '180px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id} style={{ borderBottom: '1px solid #ddd' }}>
                {editingId === member.id ? (
                  /* EDIT MODE - EXPANDED VIEW */
                  <>
                    <td colSpan={8} style={{ padding: '20px', background: '#f9f9f9' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>First Name *</label>
                          <input
                            type="text"
                            value={editMember.first_name}
                            onChange={(e) => setEditMember({...editMember, first_name: e.target.value})}
                            style={tableInputStyle}
                            placeholder="First Name"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>Last Name *</label>
                          <input
                            type="text"
                            value={editMember.last_name}
                            onChange={(e) => setEditMember({...editMember, last_name: e.target.value})}
                            style={tableInputStyle}
                            placeholder="Last Name"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>Date of Birth</label>
                          <input
                            type="date"
                            value={editMember.date_of_birth}
                            onChange={(e) => setEditMember({...editMember, date_of_birth: e.target.value})}
                            style={tableInputStyle}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>Email</label>
                          <input
                            type="email"
                            value={editMember.email}
                            onChange={(e) => setEditMember({...editMember, email: e.target.value})}
                            style={tableInputStyle}
                            placeholder="Email"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>Phone *</label>
                          <input
                            type="tel"
                            value={editMember.phone}
                            onChange={(e) => setEditMember({...editMember, phone: e.target.value})}
                            style={tableInputStyle}
                            placeholder="Phone"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>Membership Type *</label>
                          <select
                            value={editMember.membership_type}
                            onChange={(e) => setEditMember({...editMember, membership_type: e.target.value})}
                            style={tableInputStyle}
                          >
                            <option value="">Select...</option>
                            <option value="New Member">New Member</option>
                            <option value="Transfer">Transfer</option>
                            <option value="Baptism">Baptism</option>
                            <option value="Volunteer">Volunteer</option>
                          </select>
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>Marital Status</label>
                          <select
                            value={editMember.marital_status}
                            onChange={(e) => setEditMember({...editMember, marital_status: e.target.value})}
                            style={tableInputStyle}
                          >
                            <option value="">Select...</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Engaged">Engaged</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                          </select>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>Street Address</label>
                          <input
                            type="text"
                            value={editMember.address}
                            onChange={(e) => setEditMember({...editMember, address: e.target.value})}
                            style={tableInputStyle}
                            placeholder="Street Address"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>City</label>
                          <input
                            type="text"
                            value={editMember.city}
                            onChange={(e) => setEditMember({...editMember, city: e.target.value})}
                            style={tableInputStyle}
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>State/Province</label>
                          <input
                            type="text"
                            value={editMember.state_province}
                            onChange={(e) => setEditMember({...editMember, state_province: e.target.value})}
                            style={tableInputStyle}
                            placeholder="State/Province"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>ZIP/Postal</label>
                          <input
                            type="text"
                            value={editMember.zip_postal}
                            onChange={(e) => setEditMember({...editMember, zip_postal: e.target.value})}
                            style={tableInputStyle}
                            placeholder="ZIP/Postal"
                          />
                        </div>
                        <div style={{ gridColumn: 'span 3' }}>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '12px' }}>Prayer Requests</label>
                          <textarea
                            value={editMember.prayer_requests}
                            onChange={(e) => setEditMember({...editMember, prayer_requests: e.target.value})}
                            style={{...tableInputStyle, minHeight: '60px', resize: 'vertical'}}
                            placeholder="Prayer Requests"
                          />
                        </div>
                      </div>
                      <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                        <button 
                          onClick={() => saveEdit(member.id)}
                          style={{ padding: '8px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}
                        >
                          Save Changes
                        </button>
                        <button 
                          onClick={cancelEdit}
                          style={{ padding: '8px 20px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  /* VIEW MODE */
                  <>
                    <td style={{ padding: '12px' }}>
                      <div style={{ fontWeight: 'bold' }}>{member.first_name} {member.last_name}</div>
                    </td>
                    <td style={{ padding: '12px' }}>{formatDate(member.date_of_birth)}</td>
                    <td style={{ padding: '12px' }}>{member.email || '-'}</td>
                    <td style={{ padding: '12px' }}>{member.phone || '-'}</td>
                    <td style={{ padding: '12px' }}>{member.membership_type || '-'}</td>
                    <td style={{ padding: '12px' }}>{member.marital_status || '-'}</td>
                    <td style={{ padding: '12px' }}>
                      {member.city && member.state_province 
                        ? `${member.city}, ${member.state_province}` 
                        : member.city || member.state_province || '-'}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button 
                        onClick={() => startEdit(member)}
                        style={{ padding: '6px 12px', marginRight: '5px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteMember(member.id, `${member.first_name} ${member.last_name}`)}
                        style={{ padding: '6px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredMembers.length === 0 && (
        <div style={{ padding: '40px', textAlign: 'center', color: '#666', background: 'white', borderRadius: '8px' }}>
          {searchTerm ? 'No members found matching your search.' : 'No members yet. Add your first member above!'}
        </div>
      )}

      <div style={{ marginTop: '20px', padding: '15px', background: '#e7f3ff', borderRadius: '4px' }}>
        <strong>Total Members:</strong> {filteredMembers.length}
      </div>
    </div>
  )
}