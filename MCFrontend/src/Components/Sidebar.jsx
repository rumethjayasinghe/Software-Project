import { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import BuildIcon from "@mui/icons-material/Build";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt"; // Master data icon

const Sidebar = ({ darkMode }) => {
  const [masterDataOpen, setMasterDataOpen] = useState(false); // State to manage collapse

  const handleMasterDataClick = () => {
    setMasterDataOpen(!masterDataOpen);
  };

  return (
    <div className={`sidebar ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} h-screen w-64 flex flex-col`}>
      <div className="p-6 flex items-center space-x-4">
        <AccountCircleIcon className="h-12 w-12 text-gray-500" />
        <div>
          <p className="font-semibold text-lg">User Name</p>
          <p className="text-gray-500">Password</p>
        </div>
      </div>

      <List className="mt-4">
        {/* Home Link */}
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon className={darkMode ? "text-white" : "text-gray-700"} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Account Link */}
        <ListItem button component={Link} to="/account">
          <ListItemIcon>
            <GroupIcon className={darkMode ? "text-white" : "text-gray-700"} />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>

        {/* Collapsible Master Data Section */}
        <ListItem button onClick={handleMasterDataClick}>
          <ListItemIcon>
            <ListAltIcon className={darkMode ? "text-white" : "text-gray-700"} />
          </ListItemIcon>
          <ListItemText primary="Master Data" />
          {masterDataOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={masterDataOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/machine" className="pl-8">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
              </ListItemIcon>
              <ListItemText primary="Machine" />
            </ListItem>

            <ListItem button component={Link} to="/machine-type" className="pl-8">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
              </ListItemIcon>
              <ListItemText primary="Machine Type" />
            </ListItem>

            <ListItem button component={Link} to="/main-section" className="pl-8">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
              </ListItemIcon>
              <ListItemText primary="Main Section" />
            </ListItem>

            <ListItem button component={Link} to="/parameter" className="pl-8">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
              </ListItemIcon>
              <ListItemText primary="Parameter" />
            </ListItem>

            <ListItem button component={Link} to="/parameter-qualified-value" className="pl-8">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
              </ListItemIcon>
              <ListItemText primary="Parameter Qualified Value" />
            </ListItem>

            <ListItem button component={Link} to="/section-template" className="pl-8">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
              </ListItemIcon>
              <ListItemText primary="Section Template" />
            </ListItem>

            <ListItem button component={Link} to="/sub-section" className="pl-8">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
              </ListItemIcon>
              <ListItemText primary="Sub Section" />
            </ListItem>

            <ListItem button component={Link} to="/tolerance" className="pl-8">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
              </ListItemIcon>
              <ListItemText primary="Tolerance" />
            </ListItem>
          </List>
        </Collapse>

        {/* Other Menu Items */}
        <ListItem button component={Link} to="/portal-data">
          <ListItemIcon>
            <DataUsageIcon className={darkMode ? "text-white" : "text-gray-700"} />
          </ListItemIcon>
          <ListItemText primary="Portal Data" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
