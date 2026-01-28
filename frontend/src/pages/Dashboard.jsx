import React from 'react';
import Header from '../components/Header';
import StatCards from '../components/StatCards';
import PriorityTable from '../components/PriorityTable';

const Dashboard = () => {
  return (
    <div className="app">
      {/* Header with navigation */}
      <Header />
      
      {/* Main content area */}
      <main className="main-content">
        {/* Stat cards showing risk summaries */}
        <StatCards />
        
        {/* Patient priority table */}
        <PriorityTable />
      </main>
    </div>
  );
};

export default Dashboard;