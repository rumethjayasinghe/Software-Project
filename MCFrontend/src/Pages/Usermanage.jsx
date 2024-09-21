import React, { useState } from 'react';

const UserManage = () => {
    // Initial user data for the logged-in user
    const [userData, setUserData] = useState({
        profilePicture: 'https://via.placeholder.com/150',
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        telephone: '+1 234 567 890',
        role: 'Admin',
    });

    // Sample data for the user table
    const [users, setUsers] = useState([
        {
            username: 'JaneSmith',
            email: 'jane.smith@example.com',
            telephone: '+1 345 678 901',
            role: 'Operator',
        },
        {
            username: 'MikeJohnson',
            email: 'mike.johnson@example.com',
            telephone: '+1 456 789 012',
            role: 'Admin',
        },
        {
            username: 'SaraLee',
            email: 'sara.lee@example.com',
            telephone: '+1 567 890 123',
            role: 'Operator',
        },
    ]);

    // Handle profile picture upload
    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Update the profile picture in the state
                setUserData((prevData) => ({
                    ...prevData,
                    profilePicture: reader.result,
                }));
            };
            reader.readAsDataURL(file); // Convert the file to a base64 string
        }
    };

    return (
        <div className="grid grid-cols-2 gap-8 min-h-screen bg-gray-100 pt-16 px-4">
            {/* User Management Section */}
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col">
                <div className="flex items-center gap-6 mb-6">
                    {/* Profile Picture */}
                    <img
                        src={userData.profilePicture}
                        alt="User Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    {/* User Info */}
                    <div>
                        <h3 className="text-xl font-semibold">{userData.username}</h3>
                        <p className="text-gray-500">{userData.email}</p>
                        <p className="text-gray-500">{userData.telephone}</p>
                        <p className="text-gray-500">{userData.role}</p>
                    </div>
                </div>
                {/* File Input for Profile Picture Upload */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload Profile Picture:
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
            </div>

            {/* User Table Section */}
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col">
                <h2 className="text-2xl font-bold mb-4 text-center">Existing Users</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-left text-gray-600">Username</th>
                            <th className="px-4 py-2 text-left text-gray-600">Email</th>
                            <th className="px-4 py-2 text-left text-gray-600">Telephone</th>
                            <th className="px-4 py-2 text-left text-gray-600">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="bg-white border-b">
                                <td className="px-4 py-2">{user.username}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.telephone}</td>
                                <td className="px-4 py-2">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManage;