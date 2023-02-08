import { useEffect, useState } from "react";

const useCounter = isPosititve => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPosititve) setCounter(prevState => prevState + 1);
      else setCounter(prevState => prevState - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPosititve]);

  return counter;
};
export default useCounter;
