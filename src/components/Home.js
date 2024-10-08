import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia, Box } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import service from './service.jpg'; // Ensure the image path is correct

const Home = () => {
  const navigate = useNavigate();

  // Handler for navigating to the ProfileForm page
  const handleGetStarted = () => {
    navigate('/profile-form'); // Corrected route path
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Student Extracurricular Achievements Managing System
        </Typography>
        <Typography variant="h6" paragraph>
          A platform to manage, track, and showcase student achievements beyond academics. Whether you're a student or administrator,
          our system offers a seamless way to organize extracurricular achievements.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ padding: '10px 30px', marginTop: '1rem' }}
          onClick={handleGetStarted} // Navigates to ProfileForm
        >
          Get Started
        </Button>
      </Box>

      {/* Grid layout for the different sections */}
      <Grid container spacing={4} justifyContent="center">
        {/* Overview of Services Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card raised>
            <CardMedia
              component="img"
              height="220"
              image={service} // Ensure the image is correctly imported
              alt="Services Overview"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Services Overview
              </Typography>
              <Typography variant="body2">
                Our system helps you:
                <ul>
                  <li>Record extracurricular achievements</li>
                  <li>Export participation reports</li>
                  <li>Showcase accomplishments for future opportunities</li>
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* How it Works Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card raised>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                How It Works
              </Typography>
              <Typography variant="body2">
                Admins can add, update, and manage student records. Students can view and track their achievements in an intuitive interface.
                The platform simplifies reporting and ensures data accuracy.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Contact Information Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card raised>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{ marginBottom: '0.5rem' }}>
                <Email style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                support@achievementsystem.com
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <Phone style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                +123 456 7890
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
