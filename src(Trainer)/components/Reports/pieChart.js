import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import './graphs.css'

const PieChart = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current && data) {
      const myChart = new Chart(chartRef.current, {
        type: 'pie',
        data: data,
        options: {
          ...options,
          animation: {
            duration: 2000, // Animation duration in milliseconds
          },
          plugins: {
            legend: {
              labels: {
                color: 'black', // Change label color
              },
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default PieChart;