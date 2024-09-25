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
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const App = () => {
  // Get the current route
  const location = useLocation();

  // Check if the user is on the login page
  const isLoginPage = location.pathname === "/";

  return (
    <div className="app-wrapper">
      {/* Only render Topbar and Sidebar if the user is not on the login page */}
      {!isLoginPage && <Topbar />}
      {!isLoginPage && <Sidebar />}
      
      {/* Main content wrapper */}
      <div className={`main-content ${isLoginPage ? "login-page" : ""}`}>
        {/* Routes for navigating between different pages */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
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
