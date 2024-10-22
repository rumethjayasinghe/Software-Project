import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar
import MainSectionTable from '../Components/MainSectionTable'; // Import the MainSectionTable component

const MainSection = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-grow">
                {/* Topbar */}
                <Topbar />

                {/* Main Content */}
                <div 
                    className="main-content p-6" 
                    style={{ 
                        marginTop: '5rem',  // Spacing below the top bar
                        marginLeft: '16rem' // Spacing to the right of the sidebar (assuming sidebar is 16rem wide)
                    }}
                >
                    {/* Page Title */}
                    <h1 className="text-2xl font-bold mb-4">Main Section Page</h1> {/* Header to show the current page */}

                    {/* Main Section Table */}
                    <MainSectionTable />
                </div>
            </div>
        </div>
    );
};

export default MainSection;
