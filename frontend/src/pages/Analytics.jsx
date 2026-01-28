import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Analytics = () => {

  const location = useLocation();

  return (
    <div className="analytics-page">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <div className="header-title">Diabetes Risk Classification System</div>
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

      {/* Main Content */}
      <main className="analytics-content">
        <div className="analytics-header">
          <h1 className="analytics-title">Analytics Dashboard</h1>
          <div className="analytics-filters">
            <select className="filter-select">
              <option value="all">All Time</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          {/* Risk Factor Analysis - Horizontal Bar Chart */}
          <div className="chart-card">
            <div className="chart-card-header">
              <h2 className="chart-title">Risk Factor Analysis</h2>
              <p className="chart-subtitle">Most common risk factors contributing to high-risk classifications</p>
            </div>
            <div className="chart-content">
              <div className="horizontal-bar-chart">
                {/* Bar 1 */}
                <div className="bar-item">
                  <div className="bar-label">High HbA1c (7.0%)</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '85%', background: '#EF4444' }}>
                      <span className="bar-value">245</span>
                    </div>
                  </div>
                </div>

                {/* Bar 2 */}
                <div className="bar-item">
                  <div className="bar-label">Elevated Blood Pressure</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '72%', background: '#F59E0B' }}>
                      <span className="bar-value">208</span>
                    </div>
                  </div>
                </div>

                {/* Bar 3 */}
                <div className="bar-item">
                  <div className="bar-label">High BMI (30)</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '68%', background: '#F59E0B' }}>
                      <span className="bar-value">196</span>
                    </div>
                  </div>
                </div>

                {/* Bar 4 */}
                <div className="bar-item">
                  <div className="bar-label">Family History</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '55%', background: '#10B981' }}>
                      <span className="bar-value">158</span>
                    </div>
                  </div>
                </div>

                {/* Bar 5 */}
                <div className="bar-item">
                  <div className="bar-label">High Cholesterol</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '48%', background: '#10B981' }}>
                      <span className="bar-value">138</span>
                    </div>
                  </div>
                </div>

                {/* Bar 6 */}
                <div className="bar-item">
                  <div className="bar-label">High Triglycerides</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '42%', background: '#10B981' }}>
                      <span className="bar-value">121</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Age Distribution - Grouped Bar Chart */}
          <div className="chart-card">
            <div className="chart-card-header">
              <h2 className="chart-title">Patient Demographics Analysis</h2>
              <p className="chart-subtitle">Age distribution of high-risk vs. low-risk patients</p>
            </div>
            <div className="chart-content">
              <div className="grouped-bar-chart">
                {/* Legend */}
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{ background: '#EF4444' }}></span>
                    <span className="legend-label">High Risk</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{ background: '#10B981' }}></span>
                    <span className="legend-label">Low Risk</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="grouped-chart-area">
                  {/* Age Group 1: 20-29 */}
                  <div className="age-group">
                    <div className="bars-container">
                      <div className="bar-group">
                        <div className="vertical-bar high-risk" style={{ height: '15%' }}>
                          <span className="bar-label-top">12</span>
                        </div>
                        <div className="vertical-bar low-risk" style={{ height: '35%' }}>
                          <span className="bar-label-top">28</span>
                        </div>
                      </div>
                    </div>
                    <div className="age-label">20-29</div>
                  </div>

                  {/* Age Group 2: 30-39 */}
                  <div className="age-group">
                    <div className="bars-container">
                      <div className="bar-group">
                        <div className="vertical-bar high-risk" style={{ height: '28%' }}>
                          <span className="bar-label-top">22</span>
                        </div>
                        <div className="vertical-bar low-risk" style={{ height: '48%' }}>
                          <span className="bar-label-top">38</span>
                        </div>
                      </div>
                    </div>
                    <div className="age-label">30-39</div>
                  </div>

                  {/* Age Group 3: 40-49 */}
                  <div className="age-group">
                    <div className="bars-container">
                      <div className="bar-group">
                        <div className="vertical-bar high-risk" style={{ height: '52%' }}>
                          <span className="bar-label-top">42</span>
                        </div>
                        <div className="vertical-bar low-risk" style={{ height: '58%' }}>
                          <span className="bar-label-top">46</span>
                        </div>
                      </div>
                    </div>
                    <div className="age-label">40-49</div>
                  </div>

                  {/* Age Group 4: 50-59 */}
                  <div className="age-group">
                    <div className="bars-container">
                      <div className="bar-group">
                        <div className="vertical-bar high-risk" style={{ height: '78%' }}>
                          <span className="bar-label-top">62</span>
                        </div>
                        <div className="vertical-bar low-risk" style={{ height: '42%' }}>
                          <span className="bar-label-top">34</span>
                        </div>
                      </div>
                    </div>
                    <div className="age-label">50-59</div>
                  </div>

                  {/* Age Group 5: 60-69 */}
                  <div className="age-group">
                    <div className="bars-container">
                      <div className="bar-group">
                        <div className="vertical-bar high-risk" style={{ height: '92%' }}>
                          <span className="bar-label-top">74</span>
                        </div>
                        <div className="vertical-bar low-risk" style={{ height: '28%' }}>
                          <span className="bar-label-top">22</span>
                        </div>
                      </div>
                    </div>
                    <div className="age-label">60-69</div>
                  </div>

                  {/* Age Group 6: 70+ */}
                  <div className="age-group">
                    <div className="bars-container">
                      <div className="bar-group">
                        <div className="vertical-bar high-risk" style={{ height: '100%' }}>
                          <span className="bar-label-top">80</span>
                        </div>
                        <div className="vertical-bar low-risk" style={{ height: '18%' }}>
                          <span className="bar-label-top">14</span>
                        </div>
                      </div>
                    </div>
                    <div className="age-label">70+</div>
                  </div>
                </div>

                {/* Y-axis label */}
                <div className="y-axis-label">Number of Patients</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;