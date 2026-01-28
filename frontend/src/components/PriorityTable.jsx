import React from 'react';

const PriorityTable = () => {
  return (
    <div className="table-container">
      {/* Table Header */}
      <div className="table-header">
        <div className="table-header-top">
          <h1 className="table-title">Priority Patients List</h1>
          <div className="table-header-actions">
            <button className="btn btn-primary"> + Add Patient</button>
          </div>
        </div>

        <div className="table-controls-row">
          <div className="search-box">
            <input type="text" placeholder="Search by Patient ID" />
          </div>

          <div className="filter-controls">
            <select className="filter-select">
              <option value="all">All Risk Levels</option>
              <option value="high">High Risk Only</option>
              <option value="medium">Medium Risk Only</option>
              <option value="low">Low Risk Only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr className="column-headers">
              <th className="col-batch-checkbox"><input type="checkbox" /></th>
              <th className="col-patient-id">Patient ID</th>
              <th className="col-age">Age</th>
              <th className="col-score">Score</th>
              <th className="col-risk">Risk</th>
              <th className="col-sex">Sex</th>
              <th className="col-social">Social Life</th>
              <th className="col-systolic">Systolic</th>
              <th className="col-diastolic">Diastolic</th>
              <th className="col-chol">Chol</th>
              <th className="col-trig">Trig</th>
              <th className="col-hdl">HDL</th>
              <th className="col-ldl">LDL</th>
              <th className="col-vldl">VLDL</th>
              <th className="col-hba1c">HbA1c</th>
              <th className="col-bmi">BMI</th>
              <th className="col-rbs">RBS</th>
              <th className="col-family">Genetic Risk Count</th>
              <th className="col-actions">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td className="patient-id">P-1001</td>
              <td className="text-center">54</td>
              <td className="text-center risk-score">82.4</td>
              <td><span className="risk-badge high">High</span></td>
              <td>Male</td>
              <td>City</td>
              <td className="text-center">145</td>
              <td className="text-center">92</td>
              <td className="text-center">220</td>
              <td className="text-center">180</td>
              <td className="text-center">38</td>
              <td className="text-center">145</td>
              <td className="text-center">36</td>
              <td className="text-center">6.9</td>
              <td className="text-center">29.1</td>
              <td className="text-center">168</td>
              <td className="text-center family-history-cell">1</td>
              <td className="actions-cell">
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td className="patient-id">P-1002</td>
              <td className="text-center">32</td>
              <td className="text-center risk-score">41.7</td>
              <td><span className="risk-badge low">Low</span></td>
              <td>Female</td>
              <td>Village</td>
              <td className="text-center">118</td>
              <td className="text-center">76</td>
              <td className="text-center">172</td>
              <td className="text-center">110</td>
              <td className="text-center">56</td>
              <td className="text-center">92</td>
              <td className="text-center">22</td>
              <td className="text-center">5.2</td>
              <td className="text-center">22.8</td>
              <td className="text-center">94</td>
              <td className="text-center family-history-cell">0</td>
              <td className="actions-cell">
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td className="patient-id">P-1003</td>
              <td className="text-center">45</td>
              <td className="text-center risk-score">63.2</td>
              <td><span className="risk-badge medium">Medium</span></td>
              <td>Male</td>
              <td>City</td>
              <td className="text-center">132</td>
              <td className="text-center">85</td>
              <td className="text-center">198</td>
              <td className="text-center">150</td>
              <td className="text-center">44</td>
              <td className="text-center">120</td>
              <td className="text-center">30</td>
              <td className="text-center">6.1</td>
              <td className="text-center">26.3</td>
              <td className="text-center">132</td>
              <td className="text-center family-history-cell">2</td>
              <td className="actions-cell">
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td className="patient-id">P-1004</td>
              <td className="text-center">61</td>
              <td className="text-center risk-score">78.9</td>
              <td><span className="risk-badge high">High</span></td>
              <td>Female</td>
              <td>City</td>
              <td className="text-center">150</td>
              <td className="text-center">95</td>
              <td className="text-center">240</td>
              <td className="text-center">210</td>
              <td className="text-center">35</td>
              <td className="text-center">165</td>
              <td className="text-center">42</td>
              <td className="text-center">7.4</td>
              <td className="text-center">31.0</td>
              <td className="text-center">182</td>
              <td className="text-center family-history-cell">3</td>
              <td className="actions-cell">
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td className="patient-id">P-1005</td>
              <td className="text-center">39</td>
              <td className="text-center risk-score">55.6</td>
              <td><span className="risk-badge medium">Medium</span></td>
              <td>Male</td>
              <td>Village</td>
              <td className="text-center">128</td>
              <td className="text-center">82</td>
              <td className="text-center">190</td>
              <td className="text-center">140</td>
              <td className="text-center">48</td>
              <td className="text-center">110</td>
              <td className="text-center">28</td>
              <td className="text-center">5.9</td>
              <td className="text-center">24.7</td>
              <td className="text-center">118</td>
              <td className="text-center family-history-cell">1</td>
              <td className="actions-cell">
                <button className="action-btn edit">Edit</button>
                <button className="action-btn delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <div className="pagination-info">
          Showing <strong>1-5</strong> of <strong>662</strong> patients
        </div>

        <div className="pagination-controls">
          <div className="rows-per-page">
            Show
            <select className="filter-select" style={{ padding: '4px 24px 4px 8px' }}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            per page
          </div>

          <button className="page-btn">Previous</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <span style={{ padding: '0 8px', color: 'var(--gray-500)' }}>...</span>
          <button className="page-btn">16</button>
          <button className="page-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PriorityTable;