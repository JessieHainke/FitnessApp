import { useState } from "react";

const useTimer = (startValue) => {
  const [currentValue, setCurrentValue] = useState(startValue);
  const [timer, setTimer] = useState();

  const start = () => {
    const interval = setInterval(() => {
      if (currentValue > 0) {
        setCurrentValue((prev) => prev - 1);
      }
    }, 1000);
    setTimer(interval);
  };

  const reset = () => {
    setCurrentValue(startValue);
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  return { start, stop, reset, currentValue };
};

export default useTimer;
