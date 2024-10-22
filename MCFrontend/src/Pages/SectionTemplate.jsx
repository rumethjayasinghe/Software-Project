import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar
import SectionTable from '../Components/SectionTable'; // Import SectionTable

const SectionTemplate = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-grow">
        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <div 
          className="section-template-content p-6" 
          style={{ 
            marginTop: '5rem',  // Spacing below the top bar
            marginLeft: '16rem' // Spacing to the right of the sidebar
          }}
        >
          {/* Page Title */}
          <h1 className="text-2xl font-bold mb-4">Section Template Page</h1> {/* Indicate current page */}

          {/* Section Table */}
          <SectionTable />
        </div>
      </div>
    </div>
  );
};

export default SectionTemplate;
