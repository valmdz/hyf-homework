import React, { useState, useEffect } from "react";

export const WatchCount = () => {
  const [count, setCount] = useState(0);
  const [story, setStory] = useState("lala");
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopped) {
      return;
    }
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count, stopped]);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(() => 0);
  };

  const buttonLabel = stopped ? "start" : "stop";

  const toogleStopped = () => {
    setStopped(!stopped);
  };

  return (
    <>
      <input
        type="text"
        value={story}
        onChange={(e) => setStory(e.target.value)}
      ></input>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toogleStopped}>{buttonLabel}</button>
      <h1>{count}</h1>
    </>
  );
};
