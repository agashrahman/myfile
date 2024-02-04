// import React from 'react';
// import LineGraph from './barGraph';
// import PieChart from './pieChart';
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.bundle"


// const GraphComponent = () => {

//   const lineGraphData = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Sample Data',
//         data: [65, 59, 80, 81, 56],
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1,
//       },
//     ],
//   };

 
//   const pieChartData = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//     datasets: [
//       {
//         label: 'Sample Pie Chart',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.7)',
//           'rgba(54, 162, 235, 0.7)',
//           'rgba(255, 206, 86, 0.7)',
//           'rgba(75, 192, 192, 0.7)',
//           'rgba(153, 102, 255, 0.7)',
//         ],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   return (
//     <div className='col-lg-12 gap-5 d-flex'>
//       <div className='col-lg-6'>
//       <h2>Line Graph</h2>
//       <div className='col-lg-12'>
//         <LineGraph data={lineGraphData} />
//       </div>
//       </div>
//     < div className='col-lg-5'>
//       <h2>Pie Chart</h2>
//       <div className='col-lg-7'>
//         <PieChart data={pieChartData} />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default GraphComponent;

import React from 'react';
import BarGraph from './barGraph';
import PieChart from './pieChart';
import './graphs.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"


const GraphComponent = () => {

  const lineGraphData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sample Data',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

 
  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'Sample Pie Chart',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className='graphDiv col-lg-12 gap-5 d-flex justify-content-center m-5 p-5'>
      <div className='honeyDiv col-lg-6 mx-auto'>
      <h2 className='lineHEAD'>Line Graph</h2>
      <div className='barDIV col-lg-12'>
        <BarGraph data={lineGraphData} />
      </div>
      </div>
    < div className='mainpieDiv col-lg-5'>
      <h2 className='lineDIV2'>Pie Chart</h2>
      <div className='pieDIV col-lg-7'>
        <PieChart data={pieChartData} />
      </div>
      </div>
    </div>
  );
};

export default GraphComponent;