import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Profile';
import UploadPage from './pages/Upload';
import SearchPage from './pages/Search';
import ConnectPage from './pages/Connect';
import UploadVideo from './pages/UploadVideo';
import LearnPath from './pages/LearnPath';
import Profile from './pages/Profile';

// Helper function to check if user is logged in
const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

const App = () => {
  return (
    <Router>
      <nav className="flex items-center justify-between p-6 bg-white shadow">
        <div className="flex items-center space-x-4">
          <img src="king.png" height="90px" width="90px" className="logo" />
          <div className="text-2xl font-bold text-blue-600">SkillSwap</div>
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center space-x-6">
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Sign Up</Link>
        </div>
      </nav>

      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated() ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/upload"
          element={isAuthenticated() ? <UploadPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/search"
          element={isAuthenticated() ? <SearchPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/connect"
          element={isAuthenticated() ? <ConnectPage /> : <Navigate to="/login" />}
        />

        {/* Profile Route */}
        <Route path="/profile" element={<Profile />} />

        {/* Other Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/learn-path" element={<LearnPath />} />
      </Routes>

      <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
        &copy; 2025 SkillSwap. All rights reserved.
      </footer>
    </Router>
  );
};

export default App;
