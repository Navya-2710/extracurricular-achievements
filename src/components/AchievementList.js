import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AchievementList = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios.get('/api/achievements')
      .then(response => {
        setAchievements(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the achievements!', error);
      });
  }, []);

  return (
    <div>
      <h2>Achievements</h2>
      <ul>
        {achievements.map(achievement => (
          <li key={achievement.id}>
            {achievement.title} - {achievement.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementList;
