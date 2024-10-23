import React, { useState, useEffect } from 'react';
import CalendarComponent from '../Components/CalendarComponent';
import MachineDataTable from '../Components/MachineDataTable';
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';

const Home = ({ userRole }) => {
    const [previousDay, setPreviousDay] = useState('');
    const [adminMessage, setAdminMessage] = useState(''); // State for admin message

    useEffect(() => {
        const currentDate = new Date();
        const previousDate = new Date(currentDate);
        previousDate.setDate(currentDate.getDate() - 1);
        const formattedDate = previousDate.toISOString().split('T')[0];
        setPreviousDay(formattedDate);
    }, []);

    const handleContactAdmin = (e) => {
        e.preventDefault();
        if (adminMessage.trim() === "") {
            alert("Please write a message before sending.");
            return;
        }
        // Handle the message sending logic here (e.g., send to API)
        console.log("Message to admin:", adminMessage); // For demonstration purposes
        alert("Your message has been sent to the admin.");
        setAdminMessage(""); // Clear the message after sending
    };

    return (
        <div className="home flex">
            <Sidebar />
            <div className="flex-grow">
                <Topbar />
                <div className="home-content p-6" style={{ paddingTop: '0', paddingLeft: '16rem' }}>
                    <div className="relative w-full h-64 bg-cover bg-center overflow-hidden"
                         style={{ backgroundImage: 'url("https://www.midassafety.com/wp-content/uploads/2022/06/Midas-Sustainability-1920x560-b.jpg")', height: 'auto', minHeight: '300px' }}>
                         
                        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                            <h1 className="text-5xl font-bold text-white">Welcome to PROMCO 2.0</h1>
                        </div>
                    </div>

                    <div className="relative mt-10 p-6">
                        <div className="flex gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                                <h3 className="text-lg font-semibold mb-2">Latest Updates</h3>
                                <MachineDataTable />
                            </div>
                            <div className="bg-white p-4 rounded-lg flex-1">
                                <div className="w-full h-40">
                                    <CalendarComponent />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 className="text-lg font-semibold mb-2">Previous Day's Report</h3>
                            <p className="text-lg font-medium text-gray-700 mb-4">{previousDay}</p>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                onClick={() => alert("Generating Report for " + previousDay)}
                            >
                                Generate Report
                            </button>
                        </div>

                        {/* Contact Admin Section - Only for Operators */}
                        {userRole !== 'admin' && (
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-lg font-semibold mb-2">Contact Admin</h3>
                                <form onSubmit={handleContactAdmin}>
                                    <textarea
                                        value={adminMessage}
                                        onChange={(e) => setAdminMessage(e.target.value)}
                                        placeholder="Write your message here..."
                                        rows="4"
                                        required
                                        style={{ width: "100%", resize: "none" }} // Custom styles
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors mt-2"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
