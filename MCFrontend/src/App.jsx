
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import "./App.css"; 
import Home from "./Pages/Home";
import MasterData from "./Pages/MasterData";
import Machine from './Pages/Machine';
import MachineType from './Pages/MachineType';
import MainSection from './Pages/MainSection';
import Parameter from './Pages/Parameter';
import ParameterQualifiedValue from './Pages/ParameterQualifiedValue';
import SectionTemplate from './Pages/SectionTemplate';
import SubSection from './Pages/SubSection';
import Tolerance from './Pages/Tolerance';
import UserManage from "./Pages/Usermanage";

const App = () => {
  
  return (
    <div className>
      {/* Main content wrapper */}
      <div className="main-content">
        {/* Topbar component */}
        <Topbar  />

        {/* Sidebar component */}
        <Sidebar  />
        {/* <CalendarComponent/> */}
        {/* Routes for navigating between different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usermanage" element={<UserManage/>}/>
          <Route path="/masterData" element={<MasterData />} />
          <Route path="/machine" element={<Machine />} />
          <Route path="/machine-type" element={<MachineType />} />
          <Route path="/main-section" element={<MainSection />} />
          <Route path="/parameter" element={<Parameter />} />
          <Route path="/parameter-qualified-value" element={<ParameterQualifiedValue />} />
          <Route path="/section-template" element={<SectionTemplate />} />
          <Route path="/sub-section" element={<SubSection />} />
          <Route path="/tolerance" element={<Tolerance />} />
          <Route path="/parameter-qualified-value" component={ParameterQualifiedValue} />

        </Routes>

      </div>
    </div>
  );
};

export default App;
