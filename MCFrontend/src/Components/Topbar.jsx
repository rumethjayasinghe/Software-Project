import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Sample user data
  const user = {
    name: 'John Doe',
    address: '123 Main St, Anytown',
    telephone: '+1 234 567 890',
    username: 'johndoe',
    email: 'john.doe@example.com',
    role: 'Admin',
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/Usermanage'); 
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    // Perform logout logic here (e.g., clearing tokens)
    navigate('/login'); // Redirect to login page
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <div className="topbar absolute left-0 top-0 w-full flex justify-between items-center p-2 h-12 bg-slate-200 text-black shadow-md z-50">
      {/* Left - Logo */}
      <div className="topbar-left">
        <img
          src="src/assets/Logo.png"
          alt="Logo"
          className="h-8"
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
        open={Boolean(anchorEl)}
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
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Topbar;
