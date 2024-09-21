import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle dropdown toggle
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <div
      className="topbar absolute left-0 top-0 w-full flex justify-between items-center p-2 h-12 bg-slate-200 text-black shadow-md z-50" // Positioning, full width, and z-index to overlap Sidebar
    >
      {/* Left - Logo */}
      <div className="topbar-left">
        <img
          src="src/assets/Logo.png"
          alt="Logo"
          className="h-8" // Adjusted logo height
        />
      </div>

      {/* Right - Account Icon */}
      <div className="topbar-right flex items-center space-x-4">
        <IconButton onClick={handleProfileMenuOpen}>
          <AccountCircleIcon className="text-gray-700" />
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
