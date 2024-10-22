import React from "react";
import MachineTable from "../Components/MachineTable";
import Sidebar from '../Components/Sidebar'; // Import Sidebar
import Topbar from '../Components/Topbar'; // Import Topbar

const Machine = () => {
  return (
    <div className="machine flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-grow">
        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <div 
          className="machine-content p-6" 
          style={{ 
            marginTop: '5rem',  // Spacing below the top bar
            marginLeft: '16rem' // Spacing to the right of the sidebar (assuming sidebar is 16rem wide)
          }}
        >
                              <h1 className="text-2xl font-bold mb-4">Machine</h1> {/* Header to show the current page */}

          <MachineTable />
        </div>
      </div>
    </div>
  );
};

export default Machine;
