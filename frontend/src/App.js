import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home'; // Ensure this path is correct
import SearchPage from './pages/SearchPage'; // Ensure this path is correct
import Profile from './pages/Profile'; // Ensure this path is correct
import Login from './components/Auth/Login'; // Ensure this path is correct
import Register from './components/Auth/Register'; // Ensure this path is correct
import '/Users/matinatuladhar/Desktop/final-saphoo-mhicha/frontend/src/styles/GlobalStyles.css';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
