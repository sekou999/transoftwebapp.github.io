// src/components/Chart.js
import React from 'react';

function DashboardChart({ title, chartId }) {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <i className="fas fa-chart-area me-1"></i>
        {title}
      </div>
      <div className="card-body">
        <canvas id={chartId} width="100%" height="40"></canvas>
      </div>
    </div>
  );
}

export default DashboardChart;
