import { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt"; // Master data icon

const Sidebar = () => {
  const [masterDataOpen, setMasterDataOpen] = useState(false); // State to manage collapse
  const [user, setUser] = useState({ name: "", email: "" }); // State for user data
  const location = useLocation(); // Get current location

  // Fetch user data from localStorage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user data from localStorage
    }
  }, []);

  const handleMasterDataClick = () => {
    setMasterDataOpen(!masterDataOpen);
  };

  // Generate initials from the user's name
  const generateInitials = (name) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map(part => part[0]).join("").toUpperCase();
    return initials.length > 2 ? initials.slice(0, 2) : initials;
  };

  return (
    <div className="sidebar fixed top-12 w-64 h-[calc(100vh-3rem)] bg-slate-200 text-black flex flex-col overflow-y-auto"> {/* Enable vertical scrolling */}
      {/* User Info Section */}
      <div className="p-6 flex items-center space-x-4">
        {/* Profile Icon with Initials */}
        <div
          className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-700 text-white text-lg font-bold"
        >
          {generateInitials(user.name || "User Name")}
        </div>
        <div>
          {/* Display User Name and Email */}
          <p className="font-semibold text-lg">{user.name || "User Name"}</p>
          <p className="text-gray-500">{user.email || "Email"}</p>
        </div>
      </div>

      {/* Sidebar Links */}
      <List className="mt-4">
        {/* Home Link */}
        <ListItem button component={Link} to="/home" selected={location.pathname === '/'}> {/* Highlight Home link */}
          <ListItemIcon>
            <HomeIcon className="text-gray-700" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* User Manage Link */}
        <ListItem button component={Link} to="/Usermanage" selected={location.pathname === '/Usermanage'}>
          <ListItemIcon>
            <GroupIcon className="text-gray-700" />
          </ListItemIcon>
          <ListItemText primary="User Manage" />
        </ListItem>

        {/* Collapsible Master Data Section */}
        <ListItem button onClick={handleMasterDataClick}>
          <ListItemIcon>
            <ListAltIcon className="text-gray-700" />
          </ListItemIcon>
          <ListItemText primary="Master Data" />
          {masterDataOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        {/* Collapsible Links */}
        <Collapse in={masterDataOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/machine" className="pl-8" selected={location.pathname === '/machine'}>
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Machine" />
            </ListItem>

            <ListItem button component={Link} to="/machine-type" className="pl-8" selected={location.pathname === '/machine-type'}>
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Machine Type" />
            </ListItem>

            <ListItem button component={Link} to="/main-section" className="pl-8" selected={location.pathname === '/main-section'}>
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Main Section" />
            </ListItem>

            <ListItem button component={Link} to="/parameter" className="pl-8" selected={location.pathname === '/parameter'}>
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Parameter" />
            </ListItem>

            <ListItem button component={Link} to="/parameter-qualified-value" className="pl-8" selected={location.pathname === '/parameter-qualified-value'}>
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Parameter Qualified Value" />
            </ListItem>

            <ListItem button component={Link} to="/section-template" className="pl-8" selected={location.pathname === '/section-template'}>
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Section Template" />
            </ListItem>

            <ListItem button component={Link} to="/sub-section" className="pl-8" selected={location.pathname === '/sub-section'}>
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Sub Section" />
            </ListItem>

            <ListItem button component={Link} to="/tolerance" className="pl-8" selected={location.pathname === '/tolerance'}>
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Tolerance" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;
