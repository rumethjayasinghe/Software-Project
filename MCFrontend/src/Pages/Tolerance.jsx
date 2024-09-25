import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar

const Tolerance = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-grow">
                {/* Topbar */}
                <Topbar />

                {/* Main Content */}
                <div className="home-content p-6" style={{ paddingTop: '3rem', paddingLeft: '16rem' }}>
                    <h1 className="text-4xl font-bold mb-4">Tolerance Page</h1>
                    {/* Content for the Tolerance page */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-700">
                            This is the Tolerance page content. Here you can add information, statistics, or any relevant data regarding tolerance levels.
                        </p>
                        {/* You can add more content or components here as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tolerance;
