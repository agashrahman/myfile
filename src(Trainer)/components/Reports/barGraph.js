import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './graphs.css'

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const daysInMonth = 31;
      const days = Array.from({ length: daysInMonth }, (_, i) => `Day ${i + 1}`);

      const sessionHours = [
        1.5, 2, 1, 2.5, 2, 1.75, 2, 2.25, 1.5, 2, 6.25, 1.75,
        2, 1.75, 2, 2, 1.75, 2, 2.25, 1.5, 2, 2.25, 1.75, 2, 14, 5, 8
      ];

      const data = {
        labels: days,
        datasets: [{
          label: 'Session Duration (hours)',
          data: sessionHours.slice(0, daysInMonth),
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      };

      const config = {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: data.datasets,
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Days of the Month',
                color: 'black',
              },
              ticks: {
                color: 'black',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Duration (hours)',
                color: 'black',
              },
              ticks: {
                color: 'black',
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };

      const myChart = new Chart(chartRef.current, config);

      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarGraph;
