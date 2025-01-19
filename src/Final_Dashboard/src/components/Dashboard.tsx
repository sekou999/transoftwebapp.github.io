import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import '../styles/Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const barChartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'Ventes de billets',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: '#396E77',
    }]
  };

  const pieChartData = {
    labels: ['Réservations effectuées', 'Réservations annulées'],
    datasets: [{
      data: [75, 25],
      backgroundColor: ['#87CEFA', '#D7B5AA'],
    }]
  };

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card pink">
          <h3 style={{color: 'white'}}>Nombre total de réservations</h3>
          <div className="value">1,234</div>
        </div>
        <div className="stat-card green">
          <h3 style={{color: 'white'}}>Nombre de trajets</h3>
          <div className="value">89</div>
        </div>
        <div className="stat-card yellow">
          <h3 style={{color: 'white'}}>Taux d'occupation des bus</h3>
          <div className="value">78%</div>
        </div>
        <div className="stat-card blue">
          <h3 style={{color: 'white'}}>Taux de réservations</h3>
          <div className="value">92%</div>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-wrapper">
          <h3>Ventes de billets par mois</h3>
          <Bar data={barChartData} />
        </div>
        <div className="chart-wrapper">
          <h3>Répartition des réservations</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;