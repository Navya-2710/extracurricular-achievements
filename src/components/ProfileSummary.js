import React from 'react';
import { useLocation } from 'react-router-dom'; // useLocation to access passed state
import { Container, Typography, Box, Chip, Paper } from '@mui/material';

const ProfileSummary = () => {
  const location = useLocation();
  const { profile } = location.state || {}; // Get profile from state

  if (!profile) {
    return (
      <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
        <Typography variant="h4" component="h1" align="center">
          No Profile Data
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, backgroundColor: (theme) => theme.palette.background.paper }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Profile Summary
        </Typography>
        
        <Box mb={2}>
          <Typography variant="h6">Name:</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>{profile.name}</Typography>
        </Box>
        
        <Box mb={2}>
          <Typography variant="h6">Email:</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>{profile.email}</Typography>
        </Box>
        
        <Box mb={2}>
          <Typography variant="h6">Phone:</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>{profile.phone}</Typography>
        </Box>
        
        <Box mb={2}>
          <Typography variant="h6">Date of Birth:</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>{profile.dob}</Typography>
        </Box>
        
        <Box mb={2}>
          <Typography variant="h6">Address:</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>{profile.address}</Typography>
        </Box>

        <Box mb={2}>
          <Typography variant="h6">Hobbies:</Typography>
          {profile.hobbies.length > 0 ? profile.hobbies.map((hobby, index) => (
            <Chip key={index} label={hobby} style={{ margin: '5px' }} variant="outlined" />
          )) : <Typography>No hobbies added</Typography>}
        </Box>
        
        <Box mb={2}>
          <Typography variant="h6">Interests:</Typography>
          {profile.interests.length > 0 ? profile.interests.map((interest, index) => (
            <Chip key={index} label={interest} style={{ margin: '5px' }} variant="outlined" />
          )) : <Typography>No interests added</Typography>}
        </Box>
        
        <Box>
          <Typography variant="h6">Bio:</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>{profile.bio || 'No bio provided'}</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfileSummary;


