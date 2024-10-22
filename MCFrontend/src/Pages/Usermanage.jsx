import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar

const UserManage = () => {
    // Initial user data for the logged-in user
    const [userData, setUserData] = useState({
        profilePicture: 'https://via.placeholder.com/150',
        username: 'John Doe',
        role: 'Full Stack Developer',
        location: 'Bay Area, San Francisco, CA',
        email: 'john.doe@example.com',
        phone: '(239) 816-9029',
        address: 'Bay Area, San Francisco, CA',
    });

    // Toggle edit mode for profile picture
    const [editPictureMode, setEditPictureMode] = useState(false);
    // Toggle edit mode for personal details
    const [editMode, setEditMode] = useState(false);

    // Handle profile picture upload
    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserData((prevData) => ({
                    ...prevData,
                    profilePicture: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle personal details update
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Save the updated details
    const handleSaveDetails = () => {
        setEditMode(false); // Exit edit mode
        console.log('Updated user data:', userData);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-grow">
                {/* Topbar */}
                <Topbar />


                {/* Main Content */}
                <div className="home-content p-6" style={{ paddingTop: '1rem', paddingLeft: '16rem' }}>
                <h2 className="text-2xl font-semibold">User Profile</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Left Column: Profile Section */}
                        <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={userData.profilePicture}
                                    alt="User Profile"
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold">{userData.username}</h3>
                                <p className="text-gray-500">{userData.role}</p>
                                <p className="text-gray-500">{userData.location}</p>

                                <button
                                    onClick={() => setEditPictureMode(!editPictureMode)}
                                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                                    {editPictureMode ? 'Cancel' : 'Edit Profile Picture'}
                                </button>

                                {editPictureMode && (
                                    <div className="mt-4">
                                        <label className="block text-gray-700 text-xs font-bold mb-2">
                                            Upload New Profile Picture:
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleProfilePictureChange}
                                            className="border rounded w-full py-1 px-2 text-gray-700"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column: User Details */}
                        <div className="col-span-2 bg-white rounded-lg shadow-md p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-gray-700 font-bold">Full Name</label>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            name="username"
                                            value={userData.username}
                                            onChange={handleInputChange}
                                            className="border rounded w-full py-1 px-2"
                                        />
                                    ) : (
                                        <p>{userData.username}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-gray-700 font-bold">Email</label>
                                    {editMode ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={userData.email}
                                            onChange={handleInputChange}
                                            className="border rounded w-full py-1 px-2"
                                        />
                                    ) : (
                                        <p>{userData.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-gray-700 font-bold">Phone</label>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            name="phone"
                                            value={userData.phone}
                                            onChange={handleInputChange}
                                            className="border rounded w-full py-1 px-2"
                                        />
                                    ) : (
                                        <p>{userData.phone}</p>
                                    )}
                                </div>

                                {/* Address */}
                                <div className="col-span-2">
                                    <label className="block text-gray-700 font-bold">Address</label>
                                    {editMode ? (
                                        <input
                                            type="text"
                                            name="address"
                                            value={userData.address}
                                            onChange={handleInputChange}
                                            className="border rounded w-full py-1 px-2"
                                        />
                                    ) : (
                                        <p>{userData.address}</p>
                                    )}
                                </div>
                            </div>

                            {/* Edit/Save Button */}
                            {editMode ? (
                                <button
                                    onClick={handleSaveDetails}
                                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => setEditMode(true)}
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                                    Edit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManage;
