import React from 'react';
import "../App.css"

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login'; // Redirects to login after logout
  };

  return (
    <div>
      <h1 style={{
        fontSize:"58px",
        
      }}>Welcome to the Dashboard</h1>
      <button onClick={handleLogout} className='button'>Logout</button>
    </div>
  );
};

export default Dashboard;
