// src/Pages/Machine.js
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
        <div className="machine-content p-6" style={{ paddingTop: '3rem', paddingLeft: '16rem' }}>
          <MachineTable />
        </div>
      </div>
    </div>
  );
};

export default Machine;
