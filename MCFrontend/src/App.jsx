
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import "./App.css"; 
import Home from "./Pages/Home";
import MasterData from "./Pages/MasterData";
import Machines from "./Pages/Machines";

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
          <Route path="/machines" element={<Machines />} />
        </Routes>

      </div>
    </div>
  );
};

export default App;
