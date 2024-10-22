import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar
import ParameterQualityTable from '../Components/ParameterQualityTable'; // Import ParameterQualityTable

const Parameter = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-grow">
        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <div 
          className="parameter-content p-6" 
          style={{ 
            marginTop: '5rem',  // Adjust spacing below the top bar
            marginLeft: '16rem' // Adjust spacing to the right of the sidebar
          }}
        >
          {/* Page Title */}
          <h1 className="text-2xl font-bold mb-4">Parameter Quality Page</h1> {/* Indicate current page */}

          {/* Parameter Quality Table */}
          <ParameterQualityTable />
        </div>
      </div>
    </div>
  );
};

export default Parameter;
