import React, { useState } from 'react';
import './index.css';

export default function Settings({ pomodoroSettings, onSettingsChange, setShowOptions, onPomodoroChange }) {
  const [autoStartBreaks, setAutoStartBreaks] = useState(false);
  const [autoStartPomodoro, setAutoStartPomodoro] = useState(false);
  const [smartPomodoro, setSmartPomodoro] = useState(false);

  const {
    pomodoroValue,
    shortBreakValue,
    longBreakValue,
  } = pomodoroSettings;

  const [tempPomodoroValue, setTempPomodoroValue] = useState(pomodoroValue);
  const [tempShortBreakValue, setTempShortBreakValue] = useState(shortBreakValue);
  const [tempLongBreakValue, setTempLongBreakValue] = useState(longBreakValue);

  const handleOkClick = (e) => {
    e.preventDefault();
    if((tempPomodoroValue > 60 || tempPomodoroValue < 10) || (tempShortBreakValue < 5 || tempShortBreakValue > 40) || (tempLongBreakValue < 15 || tempLongBreakValue > 60)){
      window.alert("Valor inválido!")
      return
    }
    onSettingsChange({
      pomodoroValue: tempPomodoroValue,
      shortBreakValue: tempShortBreakValue,
      longBreakValue: tempLongBreakValue,
    });

    onPomodoroChange(tempPomodoroValue); // Update the timerMinutes with the new Pomodoro value

    setShowOptions(false);
  };

  return (
    <div className="config">
      <div className="config_container">
        <h1>Timer:</h1>
        <div className="options_container">
          <form>
            <div className="timer_option">
              <div className="item">
                <label htmlFor="pomodoro">Pomodoro</label>
                <input
                max={60}
                min={10}
                  type="number"
                  value={tempPomodoroValue}
                  onChange={(e) => setTempPomodoroValue(parseInt(e.target.value))}
                />
              </div>
              <div className="item">
                <label htmlFor="shortBreak">Short Break</label>
                <input
                 max={40}
                 min={5}
                  type="number"
                  value={tempShortBreakValue}
                  onChange={(e) => setTempShortBreakValue(parseInt(e.target.value))}
                />
              </div>
              <div className="item">
                <label htmlFor="longBreak">Long Break</label>
                <input
                 max={60}
                 min={15}
                  type="number"
                  value={tempLongBreakValue}
                  onChange={(e) => setTempLongBreakValue(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="check">
              <div className="item2">
                <label htmlFor="autoStartBreaks">Auto Start Breaks</label>
                <input type="checkbox" checked={autoStartBreaks} onChange={() => setAutoStartBreaks(!autoStartBreaks)} />
              </div>
              <div className="item2">
                <label htmlFor="autoStartsPomodoro">Auto Start Pomodoro</label>
                <input type="checkbox" checked={autoStartPomodoro} onChange={() => setAutoStartPomodoro(!autoStartPomodoro)} />
              </div>
              <div className="item2">
                <label htmlFor="smartPomodoro">Smart Pomodoro</label>
                <input type="checkbox" checked={smartPomodoro} onChange={() => setSmartPomodoro(!smartPomodoro)} />
              </div>
            </div>
            <button onClick={handleOkClick} type="submit">
              Ok
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
