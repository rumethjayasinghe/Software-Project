import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import BuildIcon from "@mui/icons-material/Build";
import { Link } from "react-router-dom";

const Sidebar = ({ darkMode }) => {
  return (
    <div
      className={`sidebar ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } h-screen w-64 flex flex-col justify-between`}
    >
      {/* Top Logo Section */}
      <div className="p-6">
        <div className="text-center">
          <img
            src="src/assets/Pro.png"
            alt="Profile"
            className="rounded-full h-20 w-20 mx-auto"
          />
          <p className="mt-4 font-semibold">User Name</p>
          <p className="text-gray-500">user@example.com</p>
        </div>
        {/* Menu List */}
        <List className="mt-6 space-y-4">
          <Link to="/">
            <ListItem button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800">
              <ListItemIcon>
                <HomeIcon className={darkMode ? "text-white" : "text-black"} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link to="/masterData">
            <ListItem button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800">
              <ListItemIcon>
                <DataUsageIcon className={darkMode ? "text-white" : "text-black"} />
              </ListItemIcon>
              <ListItemText primary="Master Data" />
            </ListItem>
          </Link>

          <Link to="/machines">
            <ListItem button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800">
              <ListItemIcon>
                <BuildIcon className={darkMode ? "text-white" : "text-black"} />
              </ListItemIcon>
              <ListItemText primary="Machines" />
            </ListItem>
          </Link>
        </List>
      </div>

      {/* Footer Section */}
      <div className="p-6 text-center">
        <button className="flex items-center space-x-2 p-2 bg-blue-500 text-white rounded-lg">
          <img src="src/assets/Pro.png" alt="User Icon" className="h-8 w-8 rounded-full" />
          <span>Mathew</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
