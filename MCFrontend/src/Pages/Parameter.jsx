import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar
import ParameterTable from '../Components/ParameterTable'; // Import ParameterTable

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
            marginTop: '5rem',  // Spacing below the top bar
            marginLeft: '16rem' // Spacing to the right of the sidebar (assuming sidebar is 16rem wide)
          }}
        >
          {/* Page Title */}
          <h1 className="text-2xl font-bold mb-4">Parameter Page</h1> {/* Header to show the current page */}

          {/* Parameter Table */}
          <ParameterTable />
        </div>
      </div>
    </div>
  );
};

export default Parameter;
