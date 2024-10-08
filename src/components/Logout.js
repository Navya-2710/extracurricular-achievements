import React from 'react';

const Logout = ({ setToken }) => {
  const handleLogout = () => {
    // Perform any necessary cleanup
    setToken(null);
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

