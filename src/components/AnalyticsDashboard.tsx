'use client'
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Import ArcElement for Pie charts
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Register ArcElement for Pie charts
);

const AnalyticsDashboard: React.FC = () => {
  // Line chart data
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Rentals Over Time',
        data: [10, 20, 30, 25, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ['Sedan', 'SUV', 'Truck', 'Convertible'],
    datasets: [
      {
        data: [30, 25, 15, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="container p-6">
      <h2 className="text-3xl font-bold text-center underline  mb-6">Analytics Dashboard</h2> <br />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line chart */}
        <div className="chart-container">
          <h3 className="text-xl font-semibold mb-4">Rentals Over Time</h3>
          <Line data={lineData} />
        </div>

        {/* Pie chart */}
        <div className="chart-container">
          <h3 className="text-xl font-semibold mb-4">Car Availability</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;