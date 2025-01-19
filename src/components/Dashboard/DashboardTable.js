// src/components/Table.js
import React from 'react';

function DashboardTable() {
  return (
    <div className="card mb-4">
      <div className="card-header"><i className="fas fa-table me-1"></i> DataTable Example</div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows of table data */}
            <tr><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td>2011/04/25</td><td>$320,800</td></tr>
            {/* Additional rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardTable;
