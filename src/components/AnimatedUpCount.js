import React, { useState, useEffect } from "react";

import classes from "./AnimatedUpCount.module.css";

function AnimatedUpCount({ target }) {
  // if target is null, zero count, display dashes
  // if target is a number, count upwards until equal

  const [count, setCount] = useState(0);

  // reset the count if no target
  const doReset = () => {
    if (!target) setCount(0);
  };

  // increment the count with a timer
  // return a callback to clear timer
  const doIncrement = () => {
    if (target && count < target) {
      const timer = setTimeout(() => {
        setCount(count < target - 1 ? count + 1 : target);
      }, 10);
      return () => clearTimeout(timer);
    }
  };

  // only execute our functions if something changes
  useEffect(doReset, [count, target]);
  useEffect(doIncrement, [count, target]);

  // render dashes or count
  return <div className={classes.counter}>{count ? count : "--"}</div>;
}

export default AnimatedUpCount;
