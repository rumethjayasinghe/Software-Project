import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import BuildIcon from "@mui/icons-material/Build";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import profile icon
import { Link } from "react-router-dom";

const Sidebar = ({ darkMode }) => {
  return (
    <div
      className={`sidebar ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } h-screen w-64 flex flex-col`}
    >
      {/* Top Profile Section */}
      <div className="p-6 flex items-center space-x-4">
        {/* Profile Icon */}
        <AccountCircleIcon className="h-12 w-12 text-gray-500" /> {/* Material-UI icon */}
        
        {/* Username and Password */}
        <div>
          <p className="font-semibold text-lg">User Name</p>
          <p className="text-gray-500">Password</p>
        </div>
      </div>

      {/* Menu List */}
      <List className="mt-4">
        <ListItem button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800">
          <ListItemIcon>
            <HomeIcon className={darkMode ? "text-white" : "text-gray-700"} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800">
          <ListItemIcon>
            <InboxIcon className={darkMode ? "text-white" : "text-gray-700"} />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>

        <ListItem button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800">
          <ListItemIcon>
            <DraftsIcon className={darkMode ? "text-white" : "text-gray-700"} />
          </ListItemIcon>
          <ListItemText primary="Machine" />
        </ListItem>

          <ListItem button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800">
            <ListItemIcon>
              <BuildIcon className={darkMode ? "text-white" : "text-gray-700"} />
            </ListItemIcon>
            <ListItemText primary="Master Data" />
          </ListItem>

          <ListItem button className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800">
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
