import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar

const SectionTemplate = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-grow">
                {/* Topbar */}
                <Topbar />

                {/* Main Content */}
                <div className="home-content p-6" style={{ paddingTop: '3rem', paddingLeft: '16rem' }}>
                    <h1 className="text-4xl font-bold mb-4">Section Template Page</h1>
                    {/* Content for the Section Template page */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-lg text-gray-700">
                            This is the Section Template page content. Use this template to add relevant information, statistics, or components related to this section.
                        </p>
                        {/* Add more content or components as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTemplate;
