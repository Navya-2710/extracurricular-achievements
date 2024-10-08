import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from '@mui/material';

const AchievementsForm = () => {
  const [achievements, setAchievements] = useState([]);
  const [currentAchievement, setCurrentAchievement] = useState({
    title: '',
    description: '',
    level: '',
    date: '',
    studentId: '',
    course: '',
    category: '',
    year: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // Sample list of courses
  const courses = [
    'Computer Science',
    'Information Technology',
    'Business Administration',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Civil Engineering',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
  ];

  // Generate a list of years for the dropdown
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 21 }, (v, i) => currentYear - i);

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAchievement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !currentAchievement.title ||
      !currentAchievement.description ||
      !currentAchievement.level ||
      !currentAchievement.date ||
      !currentAchievement.studentId ||
      !currentAchievement.course ||
      !currentAchievement.category ||
      !currentAchievement.year
    ) {
      showSnackbar('All fields are required.', 'error');
      return;
    }

    // Validate achievement title to be alphabetic only
    if (!/^[A-Za-z\s]+$/.test(currentAchievement.title)) {
      showSnackbar('Achievement title must only contain letters and spaces.', 'error');
      return;
    }

    // Validate student ID to be a number and exactly 10 digits
    if (!/^\d{10}$/.test(currentAchievement.studentId)) {
      showSnackbar('Student ID must be a 10-digit number.', 'error');
      return;
    }

    // Add achievement to the list
    setAchievements((prev) => [...prev, currentAchievement]);
    showSnackbar('Achievement added successfully!', 'success');

    // Reset form
    setCurrentAchievement({
      title: '',
      description: '',
      level: '',
      date: '',
      studentId: '',
      course: '',
      category: '',
      year: '',
    });
  };

  // Snackbar handler
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          Add or Update Achievement
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Achievement Title"
            fullWidth
            margin="normal"
            required
            name="title"
            value={currentAchievement.title}
            onChange={handleInputChange}
          />

          <TextField
            label="Description"
            fullWidth
            margin="normal"
            required
            name="description"
            multiline
            rows={4}
            value={currentAchievement.description}
            onChange={handleInputChange}
          />

          <TextField
            label="Student ID"
            fullWidth
            margin="normal"
            required
            name="studentId"
            value={currentAchievement.studentId}
            onChange={handleInputChange}
            inputProps={{ pattern: "[0-9]*", maxLength: 10 }} // Ensures only numbers are entered
          />

          {/* Course/Program Dropdown */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Course/Program</InputLabel>
            <Select
              name="course"
              value={currentAchievement.course}
              onChange={handleInputChange}
            >
              {courses.map((course) => (
                <MenuItem key={course} value={course}>
                  {course}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Achievement Category</InputLabel>
            <Select
              name="category"
              value={currentAchievement.category}
              onChange={handleInputChange}
            >
              <MenuItem value="academic">Academic</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="cultural">Cultural</MenuItem>
              <MenuItem value="community service">Community Service</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

          {/* Year Dropdown */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Year</InputLabel>
            <Select
              name="year"
              value={currentAchievement.year}
              onChange={handleInputChange}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Achievement Level Dropdown */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Achievement Level</InputLabel>
            <Select
              name="level"
              value={currentAchievement.level}
              onChange={handleInputChange}
            >
              <MenuItem value="local">Local</MenuItem>
              <MenuItem value="national">National</MenuItem>
              <MenuItem value="international">International</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Date"
            type="date"
            fullWidth
            margin="normal"
            required
            name="date"
            InputLabelProps={{ shrink: true }}
            value={currentAchievement.date}
            onChange={handleInputChange}
          />

          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>

        {/* Display the achievements */}
        <Box mt={4}>
          <Typography variant="h6">Achievements List:</Typography>
          {achievements.length > 0 ? (
            achievements.map((ach, index) => (
              <Box key={index} mt={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
                <Typography variant="subtitle1">
                  <b>{ach.title}</b> - {ach.level}
                </Typography>
                <Typography variant="body2">{ach.description}</Typography>
                <Typography variant="body2">Student ID: {ach.studentId}</Typography>
                <Typography variant="body2">Course: {ach.course}</Typography>
                <Typography variant="body2">Category: {ach.category}</Typography>
                <Typography variant="body2">Year: {ach.year}</Typography>
                <Typography variant="caption">Date: {ach.date}</Typography>
              </Box>
            ))
          ) : (
            <Typography>No achievements added yet.</Typography>
          )}
        </Box>
      </Paper>

      {/* Snackbar for notifications */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AchievementsForm; // Ensure this matches the file name




