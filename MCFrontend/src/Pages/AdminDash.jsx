import React, { useState } from 'react';
import './AdminDash.css'; // Include the updated CSS

function AdminDash() {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  const [showCreateUserForm, setShowCreateUserForm] = useState(false);

  const createUser = (e) => {
    e.preventDefault();
    console.log('User created:', userData);
    setUserData({ username: '', password: '' });
    setShowCreateUserForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleShowForm = () => {
    setShowCreateUserForm(true);
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <div className="admin-actions">
        <button className="admin-action-button" onClick={handleShowForm}>
          Create User
        </button>
      </div>

      {showCreateUserForm && (
        <div className="create-user-container">
          <h3>Create a New User</h3>
          <form onSubmit={createUser}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Create User</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminDash;