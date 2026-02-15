import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  // useLocation returns the current location
  const location = useLocation();
  
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-title">Diabetic Patient Priority System</div>
      </div>
      
      {/* Navigation Links */}
      <nav className="header-nav">
        {/* Link to Dashboard */}
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Dashboard
        </Link>
        
        {/* Link to Analytics */}
        <Link 
          to="/analytics" 
          className={`nav-link ${location.pathname === '/analytics' ? 'active' : ''}`}
        >
          Analytics
        </Link>
      </nav>
      
      {/* User Info */}
      <div className="header-right">
        <span className="user-name">Sarah J</span>
        <div className="user-avatar">SJ</div>
      </div>
    </div>
  );
};

export default Header;