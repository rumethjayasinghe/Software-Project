import { Routes, Route, useLocation } from "react-router-dom";
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
import Login from "./Pages/Login";
import AdminLogin from "./Pages/AdminDash";
import AdminDash from "./Pages/AdminDash";

const App = () => {
  // Get the current route
  const location = useLocation();

  // Check if the user is on the login, admin login, or admin page
  const isLoginPage = location.pathname === "/";
  const isAdminDashPage = location.pathname === "/admindash"; 

  // Combined condition to hide Topbar for login, admin login, and admin pages
  const showTopbar = !(isLoginPage || isAdminDashPage);

  return (
    <div className="app-wrapper">
      {/* Only render Topbar and Sidebar if the user is not on the login, admin login, or admin page */}
      <Topbar show={showTopbar} />
      {showTopbar && <Sidebar />}
      
      {/* Main content wrapper */}
      <div className={`main-content ${isLoginPage || isAdminDashPage ? "login-page" : ""}`}>
        {/* Routes for navigating between different pages */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/usermanage" element={<UserManage />} />
          <Route path="/masterData" element={<MasterData />} />
          <Route path="/machine" element={<Machine />} />
          <Route path="/machine-type" element={<MachineType />} />
          <Route path="/main-section" element={<MainSection />} />
          <Route path="/parameter" element={<Parameter />} />
          <Route path="/parameter-qualified-value" element={<ParameterQualifiedValue />} />
          <Route path="/section-template" element={<SectionTemplate />} />
          <Route path="/sub-section" element={<SubSection />} />
          <Route path="/tolerance" element={<Tolerance />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
