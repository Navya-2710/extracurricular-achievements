import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate for navigation
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    hobbies: '',
    interests: '',
    bio: '',
  });

  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Split hobbies and interests into arrays
    const hobbiesArray = profile.hobbies.split(',').map((hobby) => hobby.trim());
    const interestsArray = profile.interests.split(',').map((interest) => interest.trim());

    // Update profile state with split arrays
    const updatedProfile = { ...profile, hobbies: hobbiesArray, interests: interestsArray };

    // Navigate to ProfileSummary and pass profile data using state
    navigate('/profile-summary', { state: { profile: updatedProfile } });
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={5}
        sx={{
          marginTop: '4rem',
          padding: 4,
          borderRadius: 2,
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: 3 }}>
          Profile Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            margin="normal"
            value={profile.name}
            onChange={handleChange}
            required
            helperText="Please enter your full name"
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={profile.email}
            onChange={handleChange}
            required
            helperText="We'll never share your email."
          />
          <TextField
            name="phone"
            label="Phone"
            type="tel"
            fullWidth
            margin="normal"
            value={profile.phone}
            onChange={handleChange}
            helperText="Optional: Enter your phone number."
          />
          <TextField
            name="dob"
            label="Date of Birth"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={profile.dob}
            onChange={handleChange}
            required
            helperText="Select your date of birth."
          />
          <TextField
            name="address"
            label="Address"
            fullWidth
            margin="normal"
            value={profile.address}
            onChange={handleChange}
            helperText="Enter your address."
          />
          <TextField
            name="hobbies"
            label="Hobbies (comma-separated)"
            fullWidth
            margin="normal"
            value={profile.hobbies}
            onChange={handleChange}
            helperText="Separate hobbies with commas."
          />
          <TextField
            name="interests"
            label="Interests (comma-separated)"
            fullWidth
            margin="normal"
            value={profile.interests}
            onChange={handleChange}
            helperText="Separate interests with commas."
          />
          <TextField
            name="bio"
            label="Bio"
            fullWidth
            margin="normal"
            value={profile.bio}
            onChange={handleChange}
            multiline
            rows={4}
            helperText="Tell us about yourself."
          />
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.primary.dark,
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ProfileForm;

