import React, { useState, useRef } from "react";
import './timer.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


export function MyTimer() {

  const initialTime = { seconds: 0, minutes: 0, hours: 0 };
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const [trainer, setTrainer] = useState('');
  const [branch, setBranch] = useState('');
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [mode, setMode] = useState('');
  const [sessions, setSessions] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const startStopwatch = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(updateStopwatch, 1000);
  };

  const showConfirmation = () => {
    setShowConfirmationModal(true);
  };

  const hideConfirmation = () => {
    setShowConfirmationModal(false);
  };

  const stopStopwatch = () => {
    if (sessions.length > 0 || isRunning) {
      // Show confirmation popup only if there are completed sessions or the timer is running
      showConfirmation();
    } else {
      // If there are no completed sessions and the timer is not running, stop without confirmation
      setIsRunning(false);
      clearInterval(intervalRef.current);
      setTime(initialTime);
    }
  };

  const confirmStopStopwatch = () => {
    // This function is called when the user confirms the stop action
    hideConfirmation();
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(initialTime);
    addSession();
  };

  const cancelStopStopwatch = () => {
    // This function is called when the user cancels the stop action
    hideConfirmation();
  };

  const updateStopwatch = () => {
    setTime(prevTime => {
      let { seconds, minutes, hours } = prevTime;
      seconds++;

      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }

      return { seconds, minutes, hours };
    });
  };

  const addSession = () => {
    const elapsedTimeInSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;
    const currentTime = new Date();
    const endTime = new Date(currentTime.getTime() + elapsedTimeInSeconds * 1000);

    const formattedTime = `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;

    const sessionDetails = {
      trainer,
      topic,
      branch,
      category,
      subCategory,
      mode,
      time: formattedTime,
      currentTime: currentTime.toLocaleTimeString(),
      endTime: endTime.toLocaleTimeString(),
      date: currentTime.toLocaleDateString(),
    };

    setSessions([...sessions, sessionDetails]);
  };

  return (
    <>
      <div className="Maindiv text-center mx-auto">
        <div className="paddingbot ">
          <div className="timerDiv container rounded d-flex flex-wrap bg-light col-lg-11 p-3 align-items-center ">
            <input
              className="inputName col-lg-2 me-2"
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              placeholder="Name of the Trainer"
            />
            <select className="selectBranch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}>
              <option value="">Select branch</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Chennai">Chennai</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Bangalore">Bangalore</option>
            </select>
            <select
              className="col-lg-1 ms-2 selectClass"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="Domain">Domain</option>
              <option value="Communication">Communication</option>
              <option value="Aptitude">Aptitude</option>
              <option value="Counselling">Counselling</option>
            </select>
            <select
              className="ms-1 selectBatch"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="">Select Batch</option>
              <option value="FS20">FS20</option>
              <option value="FS21">FS21</option>
              <option value="FS22">FS22</option>
            </select>
            <select
              className="ms-1 selectBatch"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="">Select Mode</option>
              <option value="CareerED">CareerED</option>
              <option value="AltED">AltED</option>
            </select>
            <label className="text-center ms-3">Topic:</label>
            <input className="col-lg-2 inputTopic me-1" value={topic} onChange={(e) => setTopic(e.target.value)}></input>


            <h2 className="ms-1 col-lg-1 zeros">{`${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</h2>
            <button className={`ms-4  artopBTN ${isRunning ? 'danger' : ''}`} onClick={isRunning ? stopStopwatch : startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
          </div>

          {sessions.length > 0 && (
            <div className="mt-3  col-lg-10 ms-5">
              <h2>Completed Sessions</h2>
              <div className="timerTableDiv">
              <table className="table timerTable" >
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Trainer</th>
                    <th>Branch</th>
                    <th>Category</th>
                    <th>Batch</th>
                    <th>Mode</th>
                    <th>Topic</th>
                    <th>Time Taken</th>
                    <th>Started At</th>
                    <th>Ended At</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session, index) => (
                    <tr key={index}>
                      <td>{session.date}</td>
                      <td>{session.trainer}</td>
                      <td>{session.branch}</td>
                      <td>{session.category}</td>
                      <td>{session.subCategory}</td>
                      <td>{session.mode}</td>
                      <td>{session.topic}</td>
                      <td>{session.time}</td>
                      <td>{session.currentTime}</td>
                      <td>{session.endTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          )}
        </div>
        {showConfirmationModal && (
  <div className="ConfirmationMainDIv">
    <div className="comfirmationDiv">
      <p>Are You Sure You Want To Stop The Timer</p>
      <div>
        <button className="yes-btn" onClick={confirmStopStopwatch}>Yes</button>
        <button className="cancel-btn" onClick={cancelStopStopwatch}>Cancel</button>
      </div>
    </div>
  </div>
)}

      </div>

    </>
  );
}
