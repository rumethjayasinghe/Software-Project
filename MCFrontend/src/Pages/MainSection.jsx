import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar
import MainSectionTable from '../Components/MainSectionTable';

const MainSection = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-grow">
                {/* Topbar */}
                <Topbar />

                {/* Main Content */}
                <div className="home-content p-6" style={{ paddingTop: '3rem', paddingLeft: '16rem' }}>
                  
                        <MainSectionTable />
                    
                </div>
            </div>
        </div>
    );
};

export default MainSection;
