import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link, Grid, Box, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import signin from './signin.jpg'; // Ensure the image path is correct

const Register = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // State to handle role selection (admin or student)
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Password validation regex: minimum 6 characters, 1 uppercase letter, 1 special character
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  // Handle form submission for registration
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters long, contain one uppercase letter and one special character.');
      return;
    }

    // Confirm password check
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    // Clear the error messages
    setPasswordError('');
    setConfirmPasswordError('');

    // Assume authentication logic here (e.g., form validation and API call)
    setIsAuthenticated(true); // Set authentication to true after registration

    // Redirect based on role
    if (role === 'admin') {
      console.log('Registered as Admin');
    } else {
      console.log('Registered as Student');
    }

    navigate('/'); // Redirect to home after successful registration
  };

  // Handle redirect to login
  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <Grid container>
        {/* Left side: Image */}
        <Grid
          item
          xs={false}
          sm={6}
          md={7}
          sx={{
            backgroundImage: `url(${signin})`, // Correct way to reference the image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
          }}
        />
        {/* Right side: Registration Form */}
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)', // Add a light background for better readability
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Register
            </Typography>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                required
              />

              {/* Email Field */}
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                type="email"
                required
              />

              {/* Password Field */}
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError} // Show error state if validation fails
                helperText={passwordError} // Show the validation error message
                required
              />

              {/* Confirm Password Field */}
              <TextField
                fullWidth
                label="Confirm Password"
                margin="normal"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!confirmPasswordError} // Show error state if validation fails
                helperText={confirmPasswordError} // Show the validation error message
                required
              />

              {/* Role Selection - Admin or Student */}
              <FormControl component="fieldset" style={{ marginTop: '1rem' }}>
                <Typography variant="body1">Register as:</Typography>
                <RadioGroup
                  row
                  aria-label="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <FormControlLabel value="student" control={<Radio />} label="Student" />
                  <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                </RadioGroup>
              </FormControl>

              {/* Register Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '2rem' }}
                type="submit"
              >
                Register
              </Button>
            </form>

            {/* Already have an account section */}
            <Typography variant="body1" align="center" style={{ marginTop: '1rem' }}>
              Already have an account?{' '}
              <Link component="button" variant="body1" onClick={handleLoginRedirect}>
                Log in here
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
