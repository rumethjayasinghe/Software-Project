import React from 'react';
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar
import ToleranceTable from '../Components/ToleranceTable'; // Import ToleranceTable

const Tolerance = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-grow">
        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <div 
          className="tolerance-content p-6" 
          style={{ 
            marginTop: '5rem',  // Spacing below the top bar
            marginLeft: '16rem' // Spacing to the right of the sidebar (assuming sidebar is 16rem wide)
          }}
        >
          {/* Page Title */}
          <h1 className="text-2xl font-bold mb-4">Tolerance Page</h1> {/* Indicate current page */}

          {/* Tolerance Table */}
          <ToleranceTable />
        </div>
      </div>
    </div>
  );
};

export default Tolerance;
