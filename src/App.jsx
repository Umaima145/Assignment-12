import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import Dashboard from './Screens/DashboardScreen';

const App = () => {
  const DashboardScreen = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
    if (!isAuthenticated) {
      window.location.href = '/login'; 
      return null; 
    }
  
    return <Dashboard />;
  }
  
  return (
    
      <Routes>
        <Route path="/" element={<SignupScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    
  );
};



export default App;