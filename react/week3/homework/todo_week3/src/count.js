import React, { useState, useEffect } from "react";
export const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <>
      <h3>You have used {count} seconds on this website</h3>
    </>
  );
};
