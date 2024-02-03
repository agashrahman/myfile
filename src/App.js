
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirstHome } from './stu_components/stu_home/stu_home';
import { Studashfeed, Studashfeedback, Studashhome, Studashtodo } from './stu_components/stu_dashboard/stu_dashboard';
import MyCalendar from './stu_components/stu_todo/stu_todo';
import StaffFeedback from './stu_components/stu_feedback/stu_feedback';



function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/stuhome" element={<Studashhome/>} />
        <Route path="/stutodo" element={<Studashtodo/>} />
        <Route path="/stufeed" element={<Studashfeed/>} />
        </Routes>
    </BrowserRouter>
  );

}

export default App;
