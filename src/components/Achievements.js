import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
} from '@mui/material';
import { Star } from '@mui/icons-material';

// Dummy data for badges and events
const badges = [
  {
    id: 1,
    title: 'Best Performer',
    description: 'Awarded for outstanding performance',
    icon: <Star />,
    certificateDetails:
      'This certificate is awarded to acknowledge outstanding performance in academics and extracurricular activities.',
  },
  {
    id: 2,
    title: 'Team Leader',
    description: 'Leader of the winning team in Hackathon',
    icon: <Star />,
    certificateDetails:
      'This certificate recognizes leadership skills and teamwork demonstrated during the Hackathon event.',
  },
  {
    id: 3,
    title: 'Volunteer Star',
    description: 'Exceptional contribution to community service',
    icon: <Star />,
    certificateDetails:
      'This certificate honors significant contributions to community service and social responsibility.',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Sports Meet',
    date: 'October 15, 2024',
    description: 'Annual sports meet with various events',
    details:
      "This year's Sports Meet will include athletics, football, and basketball tournaments. Teams will compete for the championship trophy!",
    link: '#sports',
  },
  {
    id: 2,
    title: 'Cultural Fest',
    date: 'November 10, 2024',
    description: 'Showcase of cultural talents and skills',
    details:
      'The Cultural Fest will feature dance performances, music, and art exhibits showcasing student talents from various departments.',
    link: '#cultural',
  },
  {
    id: 3,
    title: 'Tech Symposium',
    date: 'December 5, 2024',
    description: 'A conference on the latest tech trends',
    details:
      'Join us for a day of insightful talks from industry experts, panel discussions, and networking opportunities for aspiring tech professionals.',
    link: '#tech',
  },
];

const Achievements = () => {
  const [eventOpen, setEventOpen] = useState(false);
  const [badgeOpen, setBadgeOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const handleEventClickOpen = (event) => {
    setSelectedEvent(event);
    setEventOpen(true);
  };

  const handleBadgeClickOpen = (badge) => {
    setSelectedBadge(badge);
    setBadgeOpen(true);
  };

  const handleCloseEvent = () => {
    setEventOpen(false);
    setSelectedEvent(null);
  };

  const handleCloseBadge = () => {
    setBadgeOpen(false);
    setSelectedBadge(null);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Achievements
      </Typography>
      <Typography variant="body1" paragraph>
        Here you can view, manage, and update your extracurricular achievements.
      </Typography>

      {/* Badges Section */}
      <Box mt={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Your Badges
        </Typography>
        <Grid container spacing={2}>
          {badges.map((badge) => (
            <Grid item xs={12} sm={6} md={4} key={badge.id}>
              <Card>
                <CardContent>
                  <Avatar style={{ backgroundColor: '#fbc02d', marginBottom: '1rem' }}>
                    {badge.icon}
                  </Avatar>
                  <Typography variant="h6">{badge.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {badge.description}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="outlined" color="primary" onClick={() => handleBadgeClickOpen(badge)}>
                      View Certificate
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Upcoming Events Section */}
      <Box mt={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Upcoming Events
        </Typography>
        <Grid container spacing={2}>
          {upcomingEvents.map((event) => (
            <Grid item xs={12} key={event.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {event.date}
                  </Typography>
                  <Typography variant="body2">{event.description}</Typography>
                  <Box mt={2}>
                    <Button variant="outlined" color="primary" onClick={() => handleEventClickOpen(event)}>
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Event Details Dialog */}
      <Dialog open={eventOpen} onClose={handleCloseEvent} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedEvent?.title}</DialogTitle>
        <DialogContent>
          <Paper
            elevation={3}
            style={{
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'left',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Date:</strong> {selectedEvent?.date}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Description:</strong> {selectedEvent?.description}
            </Typography>
            <Typography variant="body1">
              <strong>Details:</strong> {selectedEvent?.details}
            </Typography>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEvent} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Badge Certificate Dialog */}
      <Dialog open={badgeOpen} onClose={handleCloseBadge} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedBadge?.title} - Certificate</DialogTitle>
        <DialogContent>
          <Paper
            elevation={3}
            style={{
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              border: '2px solid #fbc02d',
            }}
          >
            <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
              Certificate of Achievement
            </Typography>
            <Typography variant="h6" gutterBottom>
              This certifies that
            </Typography>
            <Typography variant="h4" style={{ fontWeight: 'bold', margin: '20px 0' }}>
              [Recipient Name]
            </Typography>
            <Typography variant="body1" gutterBottom>
              has successfully completed the requirements for the {selectedBadge?.title}.
            </Typography>
            <Typography variant="body2" style={{ margin: '20px 0' }}>
              {selectedBadge?.certificateDetails}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Date: {new Date().toLocaleDateString()}
            </Typography>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseBadge} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Achievements;
