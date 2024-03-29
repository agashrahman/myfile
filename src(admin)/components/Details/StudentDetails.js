// TraineeDetails.js

import React, { useState } from 'react';
import './AdminDetails.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faList, faCog, faUser, faSignOutAlt,faClock,faFileCirclePlus,faChartLine,faPeopleGroup  } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../nav/sidbar';
import DashNavbar from '../nav/nav';



const StudentDetails = () => {
  // Sample trainee data
  const trainees = [
    { slNo: 1, studentName: 'Mark Smith', batch: 'FS Online Batch', course: 'React Basics', details: 'Lorem ipsum' },
    { slNo: 2, studentName: 'Emily Johnson', batch: 'FS Morning Batch', course: 'JavaScript Fundamentals', details: 'Dolor sit amet' },
    { slNo: 3, studentName: 'Tom Brown', batch: 'FS Evening Batch', course: 'Node.js Essentials', details: 'Consectetur adipiscing' },
    { slNo: 4, studentName: 'Jessica White', batch: 'FS Online Batch', course: 'CSS Styling Techniques', details: 'Elit sed do eiusmod' },
    { slNo: 5, studentName: 'Alex Turner', batch: 'FS Morning Batch', course: 'Database Management with SQL', details: 'Sed ut perspiciatis' },
    { slNo: 6, studentName: 'Grace Miller', batch: 'FS Evening Batch', course: 'Web Development with Django', details: 'Voluptatem accusantium' },
    { slNo: 7, studentName: 'Daniel Lee', batch: 'FS Online Batch', course: 'Python Programming', details: 'Natus error sit voluptatem' },
    { slNo: 8, studentName: 'Sophie Wilson', batch: 'FS Morning Batch', course: 'Responsive Web Design', details: 'At vero eos et accusamus' },
    { slNo: 9, studentName: 'Charlie Davis', batch: 'FS Evening Batch', course: 'Angular Framework', details: 'Iusto odio dignissimos' },
    { slNo: 10, studentName: 'Olivia Moore', batch: 'FS Online Batch', course: 'Mobile App Development with React Native', details: 'Corrupti quos dolores' },
    { slNo: 11, studentName: 'Liam Jones', batch: 'FS Morning Batch', course: 'Advanced JavaScript', details: 'Lorem ipsum dolor' },
    { slNo: 12, studentName: 'Ava Brown', batch: 'FS Evening Batch', course: 'Full Stack Development', details: 'Dolor sit amet consectetur' },
    { slNo: 13, studentName: 'Noah Taylor', batch: 'FS Online Batch', course: 'API Design with Express', details: 'Adipiscing elit' },
    { slNo: 14, studentName: 'Sophia Miller', batch: 'FS Morning Batch', course: 'UI/UX Design Principles', details: 'Eiusmod tempor incididunt' },
    { slNo: 15, studentName: 'Jackson Davis', batch: 'FS Evening Batch', course: 'MongoDB Essentials', details: 'Labore et dolore magna aliqua' },
    { slNo: 16, studentName: 'Olivia Wilson', batch: 'FS Online Batch', course: 'React Native Navigation', details: 'Ut enim ad minim veniam' },
    { slNo: 17, studentName: 'Mia Robinson', batch: 'FS Morning Batch', course: 'GraphQL Fundamentals', details: 'Quis nostrud exercitation ullamco' },
    { slNo: 18, studentName: 'Lucas White', batch: 'FS Evening Batch', course: 'Responsive Web Design', details: 'Sed do eiusmod tempor incididunt' },
    { slNo: 19, studentName: 'Aria Garcia', batch: 'FS Online Batch', course: 'Node.js Advanced Topics', details: 'Duis aute irure dolor in reprehenderit' },
    { slNo: 20, studentName: 'Logan Smith', batch: 'FS Morning Batch', course: 'Python Django Web Development', details: 'Excepteur sint occaecat cupidatat' },
  ];
 

  const [selectedBatch, setSelectedBatch] = useState('All Batches');

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  const filteredTrainees = selectedBatch === 'All Batches'
    ? trainees
    : trainees.filter(trainee => trainee.batch === selectedBatch);

    const fsBatches = Array.from(new Set(trainees.map(trainee => trainee.batch.replace('FS ', ''))));

  return (
    <div>
  
    <div className='d-flex pt-5'>
 
      <div className='main-div mt-5 '>
      <h2 className='text-center '>Students Details</h2>
      
      <div className='text-center'>
      <label htmlFor="batchFilter">Filter by Batch:</label>
      <select id="batchFilter" value={selectedBatch} onChange={handleBatchChange}>
        <option value="All Batches">All Batches</option>
        <option value="FS Online Batch">FS Online Batch</option>
        <option value="FS Morning Batch">FS Morning Batch</option>
        <option value="FS Evening Batch">FS Evening Batch</option>
      </select>
      </div>
    <div className=' ad_table-container mt-2'>
    <table className='table table-bordered table-striped table-hover ms-4 col-lg-10 text-center col-md-5'>
  <thead className='thead-dark'>
    <tr>
      <th>Sl No</th>
      <th>Student Name</th>
      <th>Batch</th>
      <th>Course</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {filteredTrainees.map((trainee) => (
      <tr key={trainee.slNo}>
        <td>{trainee.slNo}</td>
        <td>{trainee.studentName}</td>
        <td>{trainee.batch}</td>
        <td>{trainee.course}</td>
        <td>
          <Link to="/AllDetails">
            <button className="btn btn-primary">More details</button>
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    </div>
    </div>
    </div>
  );
};

export default StudentDetails;