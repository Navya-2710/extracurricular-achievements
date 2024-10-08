import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAdmin }) => {
  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = () => {
    // Add logic for logging out, like clearing tokens or session data
    // Example: localStorage.clear();
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFB6C1' }}> {/* Light pink color */}
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Student Achievements Management System
        </Typography>

        {/* Links Section */}
        <Box>
          {/* Home Button */}
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          {/* Profile Form Button */}
          <Button color="inherit" component={Link} to="/profile-form">
            Profile Form
          </Button>

          {/* Achievements Form Button */}
          <Button color="inherit" component={Link} to="/achievements-form">
            Achievements Form
          </Button>

          {/* Achievements List Button */}
          <Button color="inherit" component={Link} to="/achievements">
            Achievements
          </Button>

          {/* Add Event Button */}
          <Button color="inherit" component={Link} to="/events-form">
            Add Event
          </Button>

          {/* Admin Button (Only visible for Admin users) */}
          {isAdmin && (
            <Button color="inherit" component={Link} to="/admin">
              Admin
            </Button>
          )}

          {/* Logout Button */}
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
