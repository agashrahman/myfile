import React, { useEffect, useState } from 'react';
import './stu_clock.css'; 


// Hour hand component
const HourHand = ({ degrees }) => (
  <div className="hand hour-hand" style={{ transform: `rotate(${degrees}deg)` }}></div>
);

// Minute hand component
const MinuteHand = ({ degrees }) => (
  <div className="hand minute-hand" style={{ transform: `rotate(${degrees}deg)` }}></div>
);

// Second hand component
const SecondHand = ({ degrees }) => (
  <div className="hand second-hand" style={{ transform: `rotate(${degrees}deg)` }}></div>
);

// Clock component
const ClockHome = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const updateClock = () => {
      const now = new Date();
      setTime(now);
    };


    const intervalId = setInterval(updateClock, 1000);


    return () => clearInterval(intervalId);
  }, []);


  const secondsDegrees = (time.getSeconds() / 60) * 360 + 90;
  const minutesDegrees = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6 + 90;
  const hoursDegrees = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30 + 90;

  return (
    <div className='clockbody ms-1'>
    <div className="clock">
      <HourHand degrees={hoursDegrees} />
      <MinuteHand degrees={minutesDegrees} />
      <SecondHand degrees={secondsDegrees} />
      <div className="center-dot"></div>
    </div>
    
    </div>
  );
};

export default ClockHome;
