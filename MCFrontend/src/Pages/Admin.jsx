import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'; // Include the CSS for styling

function Admin() {
  // State to manage user data and form visibility
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  const [showCreateUserForm, setShowCreateUserForm] = useState(false); // State for form visibility

  // Handle form submission for creating a user
  const createUser = (e) => {
    e.preventDefault();
    console.log('User created:', userData);
    // Clear the form after user is created
    setUserData({ username: '', password: '' });
    // Optionally hide the form after creating the user
    setShowCreateUserForm(false);
  };

  // Handle input changes for the user form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  // Handle button click to show the create user form
  const handleShowForm = () => {
    setShowCreateUserForm(true);
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <div className="admin-actions">
        <Link to="/dashboard" className="admin-action-button">Machine Dashboard</Link>
        <button className="admin-action-button" onClick={handleShowForm}>
          Create User
        </button>
        <Link to="/view-users" className="admin-action-button">View Users</Link>
        <Link to="/admin-reports" className="admin-action-button">View Reports</Link>
      </div>

      {/* Conditionally render the Create User Form */}
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

export default Admin;
