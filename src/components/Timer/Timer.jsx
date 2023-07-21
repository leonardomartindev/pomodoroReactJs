import React, { useEffect, useState } from 'react';
import './index.css';

export default function Timer({ timerMinutes, setTimerMinutes, shortBreak, setShortBreak, longBreak, setLongBreak }) {
  

  const [isRunning, setRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [initialTimerMinutes, setInitialTimerMinutes] = useState(timerMinutes); 

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (timerMinutes > 0) {
            setTimerMinutes((prevMinutes) => prevMinutes - 1); // Fix this line
            setTimerSeconds(59);
          } else {
            setRunning(false);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, timerMinutes, timerSeconds]);

  const startTimer = () => {
    if (timerMinutes > 0 || timerSeconds > 0) {
      setRunning(true);
      setInitialTimerMinutes(timerMinutes)
    }
  };

  const pomodoroChange = ()=>{
    setTimerMinutes(initialTimerMinutes)
  }

  const shortBreakChange = ()=>{
    setTimerMinutes(shortBreak)
  }

  const longBreakChange = ()=>{
    setTimerMinutes(longBreak)
  }

  const resetTimer = ()=>{
    if(isRunning){
      setRunning(false)
      setTimerMinutes(initialTimerMinutes)
      setTimerSeconds(0)
    }
  }

  return (
    <div className="container_main">
      <div className="timerChange">
        <h1 onClick={pomodoroChange}>Pomodoro</h1>
        <h1 onClick={shortBreakChange}>Short Break</h1>
        <h1 onClick={longBreakChange}>Long Break</h1>
      </div>
      <div className="container_timer">
        <p className="timer_text">
          {timerMinutes.toString().padStart(2, '0')}:{timerSeconds.toString().padStart(2, '0')}
        </p>
        <div className="control_container">
          <p className="control_btn" onClick={isRunning ? resetTimer : startTimer}>
            {isRunning ? "Reset" : "start"}
          </p>
        </div>
      </div>
      <p className="task_name">Task Name</p>
    </div>
  );
}
