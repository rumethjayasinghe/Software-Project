import { IconButton, Switch, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

const Topbar = ({ darkMode, toggleDarkMode }) => {
  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle dropdown toggle
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <div
      className={`topbar flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-slate-200 text-black"
      } shadow-md`}
    >
      {/* Left - Logo */}
      <div className="topbar-left">
        <img
          src="src/assets/Logo.png"
          alt="Logo"
          className="h-10" // Adjust height using Tailwind
        />
      </div>

      {/* Center - Search */}
      <div className="topbar-center flex items-center w-full max-w-lg">
        <div
          className={`search-container flex items-center w-full rounded-full ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          } p-2 focus-within:ring-2 ${
            darkMode ? "ring-gray-600" : "ring-gray-400"
          }`}
        >
          <IconButton>
            <SearchIcon className={darkMode ? "text-white" : "text-gray-700"} />
          </IconButton>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
            className={`search-bar w-full bg-transparent ml-2 outline-none ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          />
          {searchText && (
            <IconButton onClick={handleClearSearch}>
              <ClearIcon
                className={darkMode ? "text-white" : "text-gray-700"}
              />
            </IconButton>
          )}
        </div>
      </div>

      {/* Right - Icons and Dark Mode Toggle */}
      <div className="topbar-right flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <Switch checked={darkMode} onChange={toggleDarkMode} />
        {/* Account and Settings Icons */}
        <IconButton onClick={handleProfileMenuOpen}>
          <AccountCircleIcon
            className={darkMode ? "text-white" : "text-gray-700"}
          />
        </IconButton>
        <IconButton>
          <SettingsIcon className={darkMode ? "text-white" : "text-gray-700"} />
        </IconButton>
      </div>

      {/* Profile Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Topbar;
