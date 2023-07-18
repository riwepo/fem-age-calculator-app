import React from "react";

import AnimatedUpCount from "./AnimatedUpCount";

import classes from "./Display.module.css";

function dateDiff(earlierDate, laterDate) {
  const startYear = earlierDate.getFullYear();
  const february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let yearDiff = laterDate.getFullYear() - startYear;
  let monthDiff = laterDate.getMonth() - earlierDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  let dayDiff = laterDate.getDate() - earlierDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[earlierDate.getMonth()];
  }

  return { years: yearDiff, months: monthDiff, days: dayDiff };
}

function Display({ date }) {
  const dateDiffData = date ? dateDiff(date, new Date()) : null;
  return (
    <div className={classes.display}>
      <div className={classes.itemContainer}>
        <AnimatedUpCount target={dateDiffData?.years} />
        <p className={classes.displayItem}>years</p>
      </div>
      <div className={classes.itemContainer}>
        <AnimatedUpCount target={dateDiffData?.months} />
        <p className={classes.displayItem}>months</p>
      </div>
      <div className={classes.itemContainer}>
        <AnimatedUpCount target={dateDiffData?.days} />
        <p className={classes.displayItem}>days</p>
      </div>
    </div>
  );
}

export default Display;
