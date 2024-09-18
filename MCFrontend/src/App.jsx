
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

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // Function to toggle between dark and light modes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Main content wrapper */}
      <div className="main-content">
        {/* Topbar component with dark mode toggling functionality */}
        <Topbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Sidebar component */}
        <Sidebar darkMode={darkMode} />
        {/* <CalendarComponent/> */}
        {/* Routes for navigating between different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
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
