// src/components/Dashboard.js
import React from 'react';

import DashboardCard from '../components/Dashboard/DashboardCard';
import DashboardChart from '../components/Dashboard/DashboardChart';
import DashboardTable from '../components/Dashboard/DashboardTable';
import Sidebar from '../components/Dashboard/SideBar';

import NavBarDashboard from '../components/Dashboard/NavBarDashboard';

// import { color } from 'chart.js/helpers';

function Dashboard() {
  return (
    <div>
    <main className="container-fluid px-4">
      <NavBarDashboard />
       <Sidebar />
      <h1 className="mt-4">Dashboard</h1>
      <div className="row">
        <DashboardCard title="Primary DashboardCard" color="style" link="#"/>
        <DashboardCard title="Warning DashboardCard" color="warning" link="#"/>
        <DashboardCard title="Success DashboardCard" color="success" link="#"/>
        <DashboardCard title="Danger DashboardCard" color="danger" link="#"/>
      </div>
      <div className="row">
        <DashboardChart title="Area DashboardChart Example" chartId="myAreaChart"/>
        <DashboardChart title="Bar DashboardChart Example" chartId="myBarChart"/>
      </div>
        <DashboardTable />
       
    </main>
    </div>
  );
}

export default Dashboard;
