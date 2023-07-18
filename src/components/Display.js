import React from "react";

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
  const years = dateDiffData ? dateDiffData.years : "--";
  const months = dateDiffData ? dateDiffData.months : "--";
  const days = dateDiffData ? dateDiffData.days : "--";
  return (
    <div className={classes.display}>
      <p className={classes.displayItem}>
        <span
          className={`${classes.displayItem} ${classes.displayItemHighlighted}`}
        >
          {years}
        </span>{" "}
        years
      </p>
      <p className={classes.displayItem}>
        <span
          className={`${classes.displayItem} ${classes.displayItemHighlighted}`}
        >
          {months}
        </span>{" "}
        months
      </p>
      <p className={classes.displayItem}>
        <span
          className={`${classes.displayItem} ${classes.displayItemHighlighted}`}
        >
          {days}
        </span>{" "}
        days
      </p>
    </div>
  );
}

export default Display;
