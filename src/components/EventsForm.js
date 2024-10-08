import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const EventsForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    eventType: '',
    organizerName: '',
    contactInfo: '',
  });

  const [contactError, setContactError] = useState('');

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update current event state
    setCurrentEvent((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate contact number for 10 digits
    if (name === 'contactInfo') {
      const isValidContact = /^\d{10}$/.test(value);
      setContactError(isValidContact || value === '' ? '' : 'Contact number must be 10 digits.');
    }

    // Validate form
    const requiredFields = document.querySelectorAll('[required]');
    const isValid = Array.from(requiredFields).every((field) => field.value.trim() !== '') && !contactError;
    setIsFormValid(isValid);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if the form is invalid
    if (!isFormValid) return;

    // Add the current event to the events list
    setEvents((prev) => [...prev, currentEvent]);

    // Reset the form fields
    setCurrentEvent({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      eventType: '',
      organizerName: '',
      contactInfo: '',
    });

    // Reset form validity
    setIsFormValid(false);
    setContactError('');
  };

  return (
    <div>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          Add Event
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Event Title"
            fullWidth
            margin="normal"
            required
            name="title"
            value={currentEvent.title}
            onChange={handleInputChange} // Added onChange for title
          />

          <TextField
            label="Description"
            fullWidth
            margin="normal"
            required
            name="description"
            multiline
            rows={4}
            value={currentEvent.description}
            onChange={handleInputChange} // Added onChange for description
          />

          <TextField
            label="Date"
            type="date"
            fullWidth
            margin="normal"
            required
            name="date"
            InputLabelProps={{ shrink: true }}
            value={currentEvent.date}
            onChange={handleInputChange} // Added onChange for date
          />

          <TextField
            label="Time"
            type="time"
            fullWidth
            margin="normal"
            required
            name="time"
            value={currentEvent.time}
            onChange={handleInputChange} // Added onChange for time
          />

          <TextField
            label="Location"
            fullWidth
            margin="normal"
            required
            name="location"
            value={currentEvent.location}
            onChange={handleInputChange} // Added onChange for location
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Event Type</InputLabel>
            <Select
              name="eventType"
              value={currentEvent.eventType}
              onChange={handleInputChange}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Workshop">Workshop</MenuItem>
              <MenuItem value="Seminar">Seminar</MenuItem>
              <MenuItem value="Conference">Conference</MenuItem>
              <MenuItem value="Webinar">Webinar</MenuItem>
              <MenuItem value="Networking Event">Networking Event</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Organizer Name"
            fullWidth
            margin="normal"
            required
            name="organizerName"
            value={currentEvent.organizerName}
            onChange={handleInputChange} // Added onChange for organizer name
          />

          <TextField
            label="Contact Information"
            fullWidth
            margin="normal"
            required
            name="contactInfo"
            value={currentEvent.contactInfo}
            onChange={handleInputChange} // Added onChange for contact information
            error={!!contactError} // Show error state
            helperText={contactError} // Display error message
          />

          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit" disabled={!isFormValid}>
              Submit
            </Button>
          </Box>
        </form>

        {/* Display the events */}
        <Box mt={4}>
          <Typography variant="h6">Events List:</Typography>
          {events.length > 0 ? (
            events.map((event, index) => (
              <Box key={index} mt={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
                <Typography variant="subtitle1">
                  <b>{event.title}</b>
                </Typography>
                <Typography variant="body2">{event.description}</Typography>
                <Typography variant="caption">
                  Date: {event.date} | Time: {event.time} | Location: {event.location} | Type: {event.eventType} | Organizer: {event.organizerName} | Contact: {event.contactInfo}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography>No events added yet.</Typography>
          )}
        </Box>
      </Paper>
    </div>
  );
};

export default EventsForm;



