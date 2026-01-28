import React from 'react';

const StatCards = () => {
  return (
    <div className="stat-cards-container">
      <div className="stat-card high">
        <div className="stat-card-title">High Risk Patients</div>
        <div className="stat-card-value">24</div>
      </div>
      
      <div className="stat-card medium">
        <div className="stat-card-title">Medium Risk Patients</div>
        <div className="stat-card-value">8</div>
      </div>
      
      <div className="stat-card low">
        <div className="stat-card-title">Low Risk Patients</div>
        <div className="stat-card-value">12</div>
      </div>
    </div>
  );
};

export default StatCards;