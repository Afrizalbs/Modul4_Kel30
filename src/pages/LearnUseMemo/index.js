import React, { useState, useMemo } from "react";
import "./memo.css";

const LearnUseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="Main">
      <div className="content">
        <button className="buttonMemo" onClick={incrementOne}>
          Count One - {counterOne}
        </button>
        <span className="textMemo">{isEven ? "Even" : "Odd"}</span>
        <button className="buttonMemo" onClick={incrementTwo}>
          Count Two - {counterTwo}
        </button>
      </div>
    </div>
  );
};

export default LearnUseMemo;
