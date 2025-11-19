import { useEffect, useRef } from 'react';

const TimerControls = ({ toggleTimer, resetTimer, isRunning }) => {
  const startButtonRef = useRef(null);
  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);
  return (
    <>
      <button
        ref={startButtonRef}
        onClick={toggleTimer}
        className="py-2 px-4 bg-green-500 rounded-md shadow-md text-white cursor-pointer transition hover:bg-green-700 mr-2"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={resetTimer}
        className="py-2 px-4 bg-red-500 rounded-md shadow-md text-white cursor-pointer transition hover:bg-red-700 "
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
