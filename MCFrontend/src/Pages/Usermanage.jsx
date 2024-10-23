import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar

const UserManage = () => {
    const [user, setUser] = useState({ name: "", email: "", role: "" });
    const [users, setUsers] = useState({
        "admin@example.com": { name: "John Doe", email: "admin@example.com", password: "admin123", role: "admin" },
        "operator@example.com": { name: "Sam Peter", email: "operator@example.com", password: "operator123", role: "operator" },
        "newadmin@example.com": { name: "Jane Smith", email: "newadmin@example.com", password: "newadmin123", role: "admin" },
        "operator2@example.com": { name: "Emily Brown", email: "operator2@example.com", password: "operator456", role: "operator" },
        "operator3@example.com": { name: "Michael Johnson", email: "operator3@example.com", password: "operator789", role: "operator" }
    });

    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'operator' });
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); // Track password visibility

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddUser = () => {
        if (newUser.name && newUser.email && newUser.password) {
            setUsers((prev) => ({
                ...prev,
                [newUser.email]: {
                    name: newUser.name,
                    email: newUser.email,
                    password: newUser.password,
                    role: newUser.role
                }
            }));
            setNewUser({ name: '', email: '', password: '', role: 'operator' });
            setShowAddUserForm(false);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredUsers = Object.keys(users).filter((email) => 
        users[email].name.toLowerCase().includes(searchQuery) ||
        users[email].email.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-grow">
                <Topbar />

                <div className="home-content p-6" style={{ paddingTop: '1rem', paddingLeft: '16rem' }}>
                    <h2 className="text-2xl font-semibold">User Management</h2>

                    {/* Search Bar */}
                    <div className="mt-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-center flex-grow">Existing Users</h3>
                        <input
                            type="text"
                            placeholder="Search users by name or email"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="border rounded px-4 py-2 w-64"
                        />
                    </div>

                    {/* Existing Users Table */}
                    <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                        <table className="w-full mt-4 border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Email</th>
                                    <th className="border border-gray-300 px-4 py-2 flex items-center">
                                        Password
                                        <button onClick={() => setPasswordVisible(!passwordVisible)} className="ml-2">
                                            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                        </button>
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((email) => (
                                        <tr key={email}>
                                            <td className="border border-gray-300 px-4 py-2">{users[email].name}</td>
                                            <td className="border border-gray-300 px-4 py-2">{users[email].email}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {passwordVisible ? users[email].password : '••••••'}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">{users[email].role}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">
                                            No users found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Add User Form - Visible to Admins */}
                    {user.role === 'admin' && (
                        <div className="mt-6">
                            <button
                                onClick={() => setShowAddUserForm(!showAddUserForm)}
                                className="bg-blue-500 text-white px-4 py-2 rounded">
                                {showAddUserForm ? 'Cancel' : 'Add User'}
                            </button>

                            {showAddUserForm && (
                                <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                                    <h3 className="text-lg font-semibold">Add New User</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 font-bold">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={newUser.name}
                                                onChange={handleInputChange}
                                                className="border rounded w-full py-1 px-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-bold">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={newUser.email}
                                                onChange={handleInputChange}
                                                className="border rounded w-full py-1 px-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-bold">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={newUser.password}
                                                onChange={handleInputChange}
                                                className="border rounded w-full py-1 px-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-bold">Role</label>
                                            <select
                                                name="role"
                                                value={newUser.role}
                                                onChange={handleInputChange}
                                                className="border rounded w-full py-1 px-2">
                                                <option value="operator">Operator</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleAddUser}
                                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                                        Add User
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserManage;
