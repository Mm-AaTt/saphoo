import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import AuthorProfile from './pages/AuthorProfile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Footer from './components/Layout/Footer';
import SignUpSection from './components/Layout/SignupSection';
import ReadingChallenges from './components/ReadingChallenges';
import SeasonalReadings from './components/SeasonalReadings';
import AboutSection from './components/AboutSection';
import CardsSection from './components/Layout/CardsSection';
import AfterSignIn from './pages/AfterSignIn';
import { useAuth } from './context/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      {/* Render Navbar only if not on AfterSignIn page and user is authenticated */}
      {!isAuthenticated || window.location.pathname !== '/after-sign-in' ? <Navbar /> : null}
      
      <div className="container">
        <Routes>
          {/* Route for Home page, redirect to AfterSignIn if authenticated */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/after-sign-in" /> : <Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Route for AfterSignIn, redirect to Home if not authenticated */}
          <Route path="/after-sign-in" element={isAuthenticated ? <AfterSignIn /> : <Navigate to="/" />} />
          <Route path="/author/:authorId" element={<AuthorProfile />}/>
        </Routes>

        {/* Render additional components only if user is not authenticated */}
        {!isAuthenticated && (
          <>
            <SignUpSection />
            <ReadingChallenges />
            <SeasonalReadings />
            <AboutSection />
            <CardsSection />
          </>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
