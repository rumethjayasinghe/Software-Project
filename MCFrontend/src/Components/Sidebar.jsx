import { useEffect, useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt"; // Master data icon

const Sidebar = () => {
  const [masterDataOpen, setMasterDataOpen] = useState(false); // State to manage collapse
  const [user, setUser] = useState({ name: "", email: "" }); // State for user data

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

  return (
    <div className="sidebar fixed top-12 w-64 h-[calc(100vh-3rem)] bg-slate-200 text-black flex flex-col"> {/* Adjust top for Topbar overlap */}
      {/* User Info Section */}
      <div className="p-6 flex items-center space-x-4">
        <AccountCircleIcon className="h-12 w-12 text-gray-500" />
        <div>
          {/* Display User Name and Email */}
          <p className="font-semibold text-lg">{user.name || "User Name"}</p>
          <p className="text-gray-500">{user.email || "Email"}</p>
        </div>
      </div>

      {/* Sidebar Links */}
      <List className="mt-4">
        {/* Home Link */}
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon className="text-gray-700" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* User Manage Link */}
        <ListItem button component={Link} to="/Usermanage">
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
            <ListItem button component={Link} to="/machine" className="pl-8">
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Machine" />
            </ListItem>

            <ListItem button component={Link} to="/machine-type" className="pl-8">
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Machine Type" />
            </ListItem>

            <ListItem button component={Link} to="/main-section" className="pl-8">
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Main Section" />
            </ListItem>

            <ListItem button component={Link} to="/parameter" className="pl-8">
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Parameter" />
            </ListItem>

            <ListItem button component={Link} to="/parameter-qualified-value" className="pl-8">
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Parameter Qualified Value" />
            </ListItem>

            <ListItem button component={Link} to="/section-template" className="pl-8">
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Section Template" />
            </ListItem>

            <ListItem button component={Link} to="/sub-section" className="pl-8">
              <ListItemIcon>
                <BuildIcon className="text-gray-700" />
              </ListItemIcon>
              <ListItemText primary="Sub Section" />
            </ListItem>

            <ListItem button component={Link} to="/tolerance" className="pl-8">
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
