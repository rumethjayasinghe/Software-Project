import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar

const Parameter = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-grow">
                {/* Topbar */}
                <Topbar />

                {/* Main Content */}
                <div className="home-content p-6" style={{ paddingTop: '3rem', paddingLeft: '16rem' }}>
                    <h1 className="text-4xl font-bold mb-4">Parameter Page</h1>
                    {/* Content for the Parameter page */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-700">
                            This is the Parameter page content. Here you can include detailed information, settings, or specifications regarding parameters.
                        </p>
                        {/* Add more content or components as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parameter;
