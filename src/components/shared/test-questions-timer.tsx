"use client";

import { FC, useState, useEffect } from "react";

interface Props {}

const TestQuestionsTimer: FC<Props> = ({}) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([45, 0]);

  const tick = () => {
    if (paused || over) return;

    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s == 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="fixed bottom-0 right-0 m-5 text-[24px]">
      <p>{`00:${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`}</p>
    </div>
  );
};

export default TestQuestionsTimer;
