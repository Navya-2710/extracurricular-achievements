import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming Navbar is a separate component
import Footer from './components/Footer'; // Assuming Footer is a separate component
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Achievements from './components/Achievements';
import Admin from './components/Admin'; // Admin component for admin-specific tasks
import AchievementsForm from './components/AchievementsForm'; // Add Achievement Form component
import EventsForm from './components/EventsForm'; // Add Event Form component
import ProfileForm from './components/ProfileForm'; // Profile Form component
import ProfileSummary from './components/ProfileSummary'; // Profile Summary component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Check user role for admin access
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(index === expandedCard ? null : index);
  };

  return (
    <Router>
      {/* Show Navbar only if logged in */}
      {isAuthenticated && <Navbar isAdmin={isAdmin} />} 

      <div className="App">
        <Routes>
          {/* Home Route */}
          <Route 
            path="/" 
            element={isAuthenticated ? 
              <Home handleCardClick={handleCardClick} expandedCard={expandedCard} /> 
              : <Navigate to="/login" />} 
          />

          {/* Register Route */}
          <Route 
            path="/register" 
            element={<Register setIsAuthenticated={setIsAuthenticated} />} 
          />

          {/* Login Route */}
          <Route 
            path="/login" 
            element={<Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />} 
          />

          {/* Achievements Route */}
          <Route 
            path="/achievements" 
            element={isAuthenticated ? <Achievements /> : <Navigate to="/login" />} 
          />

          {/* Achievements Form Route */}
          <Route 
            path="/achievements-form" 
            element={isAuthenticated ? <AchievementsForm /> : <Navigate to="/login" />} 
          />

          {/* Events Form Route */}
          <Route 
            path="/events-form" 
            element={isAuthenticated ? <EventsForm /> : <Navigate to="/login" />} 
          />

          {/* Profile Form Route */}
          <Route 
            path="/profile-form" 
            element={isAuthenticated ? <ProfileForm /> : <Navigate to="/login" />} 
          />

          {/* Profile Summary Route */}
          <Route 
            path="/profile-summary" 
            element={isAuthenticated ? <ProfileSummary /> : <Navigate to="/login" />} 
          />

          {/* Admin Route (only accessible for admin) */}
          <Route 
            path="/admin" 
            element={isAuthenticated && isAdmin ? <Admin /> : <Navigate to="/" />} 
          />

          {/* Logout Route */}
          <Route path="/logout" element={<Logout />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;





