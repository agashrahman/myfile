import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './attendance.css';
import SideBar from '../nav/sidbar';
import DashNavbar from '../nav/nav';

const StudentAttendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Agash Rahman', attendance: {}, holidays: [] },
    { id: 2, name: 'Kareem Arshad', attendance: {}, holidays: [] },
    { id: 3, name: 'Sridarsini', attendance: {}, holidays: [] },
    { id: 4, name: 'Noufiya', attendance: {}, holidays: [] },
    { id: 1, name: 'Agash Rahman', attendance: {}, holidays: [] },
    { id: 2, name: 'Kareem Arshad', attendance: {}, holidays: [] },
    { id: 3, name: 'Sridarsini', attendance: {}, holidays: [] },
    { id: 4, name: 'Noufiya', attendance: {}, holidays: [] },
    { id: 1, name: 'Agash Rahman', attendance: {}, holidays: [] },
    { id: 2, name: 'Kareem Arshad', attendance: {}, holidays: [] },
    { id: 3, name: 'Sridarsini', attendance: {}, holidays: [] },
    { id: 4, name: 'Noufiya', attendance: {}, holidays: [] },
    { id: 1, name: 'Agash Rahman', attendance: {}, holidays: [] },
    { id: 2, name: 'Kareem Arshad', attendance: {}, holidays: [] },
    { id: 3, name: 'Sridarsini', attendance: {}, holidays: [] },
    { id: 4, name: 'Noufiya', attendance: {}, holidays: [] },
    { id: 1, name: 'Agash Rahman', attendance: {}, holidays: [] },
    { id: 2, name: 'Kareem Arshad', attendance: {}, holidays: [] },
    { id: 3, name: 'Sridarsini', attendance: {}, holidays: [] },
    { id: 4, name: 'Noufiya', attendance: {}, holidays: [] },
  ]);

  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [updatedDates, setUpdatedDates] = useState([]);
  const [isHoliday, setIsHoliday] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState('Batch A'); 

  const getFormattedDate = (date) => date.toISOString().split('T')[0];

  const markAttendance = (studentId, attendanceStatus) => {
    const formattedDate = getFormattedDate(selectedDate);
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              attendance: {
                ...student.attendance,
                [formattedDate]: attendanceStatus,
              },
            }
          : student
      )
    );
    setUpdatedDates((prevDates) => [...prevDates, formattedDate]);
  };

  const toggleHoliday = () => {
    const formattedDate = getFormattedDate(selectedDate);
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({
        ...student,
        holidays: student.holidays.includes(formattedDate)
          ? student.holidays.filter((date) => date !== formattedDate)
          : [...student.holidays, formattedDate],
        attendance: {
          ...student.attendance,
          [formattedDate]: undefined,
        },
      }))
    );
    setIsHoliday(!isHoliday);
  };

  const isPresentChecked = (student) => {
    const formattedDate = getFormattedDate(selectedDate);
    return student.attendance[formattedDate] === true;
  };

  const isAbsentChecked = (student) => {
    const formattedDate = getFormattedDate(selectedDate);
    return student.attendance[formattedDate] === false;
  };

  const calculatePresentDays = (student) => {
    return Object.values(student.attendance).filter((status) => status === true).length;
  };

  const calculateAbsentDays = (student) => {
    return Object.values(student.attendance).filter((status) => status === false).length;
  };

  const calculateAttendancePercentage = (student) => {
    const totalDays = Object.values(student.attendance).length;
    return totalDays === 0
      ? '0%'
      : ((calculatePresentDays(student) / totalDays) * 100).toFixed(2) + '%';
  };

  const calculateTotalWorkingDays = () => {
    const currentDate = new Date();
    const startDateClone = new Date(startDate);
    let workingDays = 0;

    while (startDateClone <= currentDate) {
      const formattedDate = getFormattedDate(startDateClone);
      if (!students.some((student) => student.holidays.includes(formattedDate))) {
        workingDays++;
      }
      startDateClone.setDate(startDateClone.getDate() + 1);
    }

    return workingDays;
  };

  return (
    <div>
 

    <div className='d-flex'>
      
   
    <div className='containero col-lg-11 mt-5 me-3'>
      <div className="attendance-container me-4">
        <h2 className="headingAtt">ATTENDANCE SHEET</h2>
        <div className='date-picker-container'>
          <div className="batch-dropdown me-5 mt-1">
            <label className="label">Select Batch</label>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
            >
              <option value="Batch A">Batch A</option>
              <option value="Batch B">Batch B</option>
            </select>
          </div>
          <div className="start-date-picker">
            <label className="label">Start Date:</label>
            <DatePicker
              
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
            />
          </div>
          <div className="select-date-picker">
            <label className="label">Select Date:</label>
            <DatePicker 
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setIsHoliday(students.some((student) => student.holidays.includes(getFormattedDate(date))));
              }}
              minDate={startDate}
              maxDate={new Date()}
              dateFormat="dd-MM-yyyy"
              highlightDates={[
                ...updatedDates.map((date) => new Date(date)),
                ...students.flatMap((student) =>
                  student.holidays.map((holiday) => new Date(holiday))
                ),
              ]}
              dayClassName={(date) => {
                const formattedDate = getFormattedDate(date);
                if (updatedDates.includes(formattedDate)) {
                  return 'react-datepicker__day--updated';
                }
                if (formattedDate === getFormattedDate(selectedDate)) {
                  return 'react-datepicker__day--selected';
                }
                if (date.toDateString() === new Date().toDateString()) {
                  return 'react-datepicker__day--current';
                }
                return '';
              }}
            />
          </div>
          <div className="holiday-button-container mt-4 m-5">
            <button onClick={toggleHoliday} className={isHoliday ? 'remove-holiday' : 'mark-holiday'}>
              {isHoliday ? 'Remove Holiday' : 'Mark as Holiday'}
            </button>
          </div>
        </div>
        <div className='ad_table-container'>
        <table className="attendance-table ">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>No of Days Present</th>
              <th>No of Days Absent</th>
              <th>Attendance Percentage</th>
             
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{calculatePresentDays(student)}</td>
                <td>{calculateAbsentDays(student)}</td>
                <td>{calculateAttendancePercentage(student)}</td>
                <td className="attendance-radio-group">
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <p className="total-days">Total Working Days: {calculateTotalWorkingDays()}</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default StudentAttendance;


