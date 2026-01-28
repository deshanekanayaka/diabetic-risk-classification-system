import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import './index.css';

function App() {
  return (
    // BrowserRouter- enable navigation
    <BrowserRouter>
      <Routes>        
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Dashboard />} />
        
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;