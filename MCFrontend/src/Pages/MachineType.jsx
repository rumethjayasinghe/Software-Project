import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar
import MachineTable from '../Components/MachineTable'; // Import the MachineTable component

const MachineType = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-grow">
                {/* Topbar */}
                <Topbar />

                {/* Main Content */}
                <div 
                    className="home-content p-6" 
                    style={{ 
                        marginTop: '5rem',  // Spacing below the top bar
                        marginLeft: '16rem' // Spacing to the right of the sidebar (assuming sidebar width is 16rem)
                    }}
                >
                                        <h1 className="text-2xl font-bold mb-4">Machine Type</h1> {/* Header to show the current page */}

                    <MachineTable />
                </div>
            </div>
        </div>
    );
};

export default MachineType;
