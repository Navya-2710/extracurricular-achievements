import React, { useState } from 'react';
import { Button, TextField, Container, Box, Typography, FormControlLabel, Checkbox, Link, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import signin from './signin.jpg'; // Ensure the image path is correct

const Login = ({ setIsAuthenticated, setIsAdmin }) => {
  const [username, setUsername] = useState(''); // Changed to username
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordError, setPasswordError] = useState(''); // State to hold password validation error
  const navigate = useNavigate();

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

  // Handle form submission for login
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the password
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters long, contain one uppercase letter and one special character.');
      return;
    }

    // Clear the error if validation passes
    setPasswordError('');

    // Perform login logic here (e.g., API request and validation)
    console.log('Logging in with:', { username, password, rememberMe });

    // Example: Set authenticated to true and check admin status
    setIsAuthenticated(true);
    setIsAdmin(false); // Update with real admin check logic based on login credentials

    // Redirect to home after login
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container>
        {/* Left side: Image */}
        <Grid
          item
          xs={false}
          sm={6}
          md={7}
          sx={{
            backgroundImage: `url(${signin})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
          }}
        />
        {/* Right side: Sign-in Form */}
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
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <Typography component="h1" variant="h5" align="center">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {/* Username Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* Password Field */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError} // Show error state if validation fails
                helperText={passwordError} // Show the validation error message
              />

              {/* Remember Me Checkbox */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    color="primary"
                  />
                }
                label="Remember me"
              />

              {/* Sign In Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              {/* Forgot Password Link */}
              <Box sx={{ mt: 2 }}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Box>

              {/* Sign Up Link */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="textSecondary" align="center">
                  Don't have an account?{' '}
                  <Link component="button" variant="body2" onClick={() => navigate('/register')}>
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
