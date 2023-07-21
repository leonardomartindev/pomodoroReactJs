import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import SettingIcon from './components/Setting/SettingIcon'
import Timer from './components/Timer/Timer'
import Settings from './components/Setting/Settings'

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [pomodoroSettings, setPomodoroSettings] = useState({
    pomodoroValue: 25,
    shortBreakValue: 5,
    longBreakValue: 15,
  });

  const handleSettingsChange = (newSettings) => {
    setPomodoroSettings(newSettings);
  }

  const [timerMinutes, setTimerMinutes] = useState(pomodoroSettings.pomodoroValue);
  const [shortBreak, setShortBreak] = useState(pomodoroSettings.shortBreakValue);
  const [longBreak, setLongBreak] = useState(pomodoroSettings.longBreakValue);

  const handleTimerMinutesChange = (newPomodoroValue) => {
    setTimerMinutes(newPomodoroValue);
  };

  const handleClick = () => {
    setShowOptions(true);
  }

  return (
    <>
      <Header />
      <Timer 
      setTimerMinutes={setTimerMinutes} 
      timerMinutes={timerMinutes} 
      shortBreak={shortBreak}
      setShortBreak={setShortBreak}
      longBreak={longBreak}
      setLongBreak={setLongBreak}/>
      <button onClick={handleClick}><SettingIcon /></button>
      {showOptions && <Settings 
      pomodoroSettings={pomodoroSettings} 
      onSettingsChange={handleSettingsChange} 
      setShowOptions={setShowOptions} 
      onPomodoroChange={handleTimerMinutesChange} />}
    </>
  )
}

export default App;
