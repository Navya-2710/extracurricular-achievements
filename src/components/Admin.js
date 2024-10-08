import React from 'react';
import { Container, Typography } from '@mui/material';

const Admin = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" paragraph>
        As an admin, you can add, update, and manage student extracurricular achievements and generate reports.
      </Typography>
    </Container>
  );
};

export default Admin;
