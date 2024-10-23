import { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Sidebar = () => {
  const [masterDataOpen, setMasterDataOpen] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", role: "" });
  const location = useLocation();
  
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered index

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const masterDataPaths = [
      '/machine',
      '/machine-type',
      '/main-section',
      '/parameter',
      '/parameter-qualified-value',
      '/section-template',
      '/sub-section',
      '/tolerance'
    ];

    setMasterDataOpen(masterDataPaths.includes(location.pathname));
  }, [location.pathname]);

  const handleMasterDataClick = () => {
    setMasterDataOpen(!masterDataOpen);
  };

  const generateInitials = (name) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map(part => part[0]).join("").toUpperCase();
    return initials.length > 2 ? initials.slice(0, 2) : initials;
  };

  const isSelected = (path) => location.pathname === path;

  const getHoverStyle = (index) => ({
    backgroundColor: hoveredIndex === index ? 'purple' : 'transparent',
    color: hoveredIndex === index ? 'white' : 'black',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition
  });

  return (
    <div className="sidebar fixed top-12 w-64 h-[calc(100vh-3rem)] bg-slate-200 text-black flex flex-col overflow-y-auto">
      {/* User Info Section */}
      <div className="pl-2 py-4 flex items-center space-x-4"> {/* Adjusted padding */}
        <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-purple-700 text-white text-lg font-bold">
          {generateInitials(user.name || "User Name")}
        </div>
        <div>
          <p className="font-semibold text-lg">{user.name || "User Name"}</p>
          <p className="text-gray-500">{user.email || "Email"}</p>
          {/* Role displayed under the username */}
          <p className="text-black">{user.role || "Role"}</p>
        </div>
      </div>

      {/* Sidebar Links */}
      <List className="mt-4">
        <ListItem
          button
          component={Link}
          to="/home"
          selected={isSelected("/home")}
          onMouseEnter={() => setHoveredIndex(0)} // Set hovered index on mouse enter
          onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
          style={getHoverStyle(0)} // Apply hover styles
        >
          <ListItemIcon>
            <HomeIcon className="text-gray-700" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/Usermanage"
          selected={isSelected("/Usermanage")}
          onMouseEnter={() => setHoveredIndex(1)} // Set hovered index on mouse enter
          onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
          style={getHoverStyle(1)} // Apply hover styles
        >
          <ListItemIcon>
            <GroupIcon className="text-gray-700" />
          </ListItemIcon>
          <ListItemText primary="User Manage" />
        </ListItem>

        <ListItem 
          button 
          onClick={handleMasterDataClick}
          onMouseEnter={() => setHoveredIndex(2)} // Set hovered index on mouse enter
          onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
          style={getHoverStyle(2)} // Apply hover styles
        >
          <ListItemIcon>
            <ListAltIcon className="text-gray-700" />
          </ListItemIcon>
          <ListItemText primary="Master Data" />
          {masterDataOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={masterDataOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { path: "/machine", text: "Machine" },
              { path: "/machine-type", text: "Machine Type" },
              { path: "/main-section", text: "Main Section" },
              { path: "/parameter", text: "Parameter" },
              { path: "/parameter-qualified-value", text: "Parameter Qualified Value" },
              { path: "/section-template", text: "Section Template" },
              { path: "/sub-section", text: "Sub Section" },
              { path: "/tolerance", text: "Tolerance" },
            ].map(({ path, text }, index) => (
              <ListItem 
                button 
                component={Link} 
                to={path} 
                selected={isSelected(path)} 
                onMouseEnter={() => setHoveredIndex(index + 3)} // Set hovered index on mouse enter
                onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
                style={getHoverStyle(index + 3)} // Apply hover styles
                key={path}
              >
                <ListItemIcon>
                  <BuildIcon className="text-gray-700" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;
