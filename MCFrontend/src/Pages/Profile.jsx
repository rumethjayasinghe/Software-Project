import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar

const Profile = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        role: "",
        address: "", // Default address
        profilePicture: "" // New state for profile picture
    });
    const [isEditing, setIsEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({
        name: "",
        email: "",
        role: "",
        address: "", // Default address
        profilePicture: "" // New state for updated profile picture
    });
    
    const fileInputRef = useRef(null); // Create a ref for file input

    useEffect(() => {
        // Fetch the logged-in user's data (e.g., from local storage or API)
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setUpdatedUser(parsedUser);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditToggle = () => {
        setIsEditing((prev) => !prev);
    };

    const handleSave = () => {
        setUser(updatedUser);
        setIsEditing(false);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUpdatedUser((prev) => ({ ...prev, profilePicture: reader.result }));
                setUser((prev) => ({ ...prev, profilePicture: reader.result })); // Update user state
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-grow">
                <Topbar />

                <div className="home-content p-6" style={{ paddingTop: '1rem', paddingLeft: '16rem' }}>
                    <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        {/* Profile Picture and User Info at the Top */}
                        <div className="flex items-center mb-6">
                            <div className="flex-shrink-0">
                                {user.profilePicture ? (
                                    <img
                                        src={user.profilePicture}
                                        alt="Profile"
                                        className="rounded-full w-24 h-24 border-2 border-gray-300"
                                    />
                                ) : (
                                    <img
                                        src="https://via.placeholder.com/150" // Placeholder if no picture
                                        alt="Default Profile"
                                        className="rounded-full w-24 h-24 border-2 border-gray-300"
                                    />
                                )}
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">{user.name || "John Doe"}</h3>
                                <p className="text-gray-600">{user.role || ""}</p>
                                <p className="text-gray-600">{user.address}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            {/* Change Profile Picture Button */}
                            {isEditing && (
                                <>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleProfilePictureChange}
                                        className="hidden"
                                        ref={fileInputRef}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current.click()}
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                    >
                                        Change Profile Picture
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700 font-bold">Full Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={updatedUser.name}
                                        onChange={handleInputChange}
                                        className="border rounded w-full py-1 px-2"
                                    />
                                ) : (
                                    <p className="border rounded w-full py-1 px-2">{user.name}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold">Email</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={updatedUser.email}
                                        onChange={handleInputChange}
                                        className="border rounded w-full py-1 px-2"
                                    />
                                ) : (
                                    <p className="border rounded w-full py-1 px-2">{user.email}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold">Role</label>
                                {isEditing ? (
                                    <select
                                        name="role"
                                        value={updatedUser.role}
                                        onChange={handleInputChange}
                                        className="border rounded w-full py-1 px-2"
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="operator">Operator</option>
                                    </select>
                                ) : (
                                    <p className="border rounded w-full py-1 px-2">{user.role}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold">Address</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="address"
                                        value={updatedUser.address}
                                        onChange={handleInputChange}
                                        className="border rounded w-full py-1 px-2"
                                    />
                                ) : (
                                    <p className="border rounded w-full py-1 px-2">{user.address}</p>
                                )}
                            </div>
                        </div>

                        {/* Edit Details Button */}
                        <div className="mt-4">
                            {isEditing ? (
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                >
                                    Save Changes
                                </button>
                            ) : (
                                <button
                                    onClick={handleEditToggle}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Edit Details
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
