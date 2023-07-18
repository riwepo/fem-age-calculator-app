import React, { useState } from "react";

import buttonImg from "../assets/images/icon-arrow.svg";

import classes from "./Form.module.css";

function Form() {
  const [enteredDays, setEnteredDays] = useState("");
  const [enteredDaysIsTouched, setEnteredDaysIsTouched] = useState(false);
  const [enteredDaysError, setEnteredDaysError] = useState("");
  const [enteredMonths, setEnteredMonths] = useState("");
  const [enteredMonthsIsTouched, setEnteredMonthsIsTouched] = useState(false);
  const [enteredMonthsError, setEnteredMonthsError] = useState("");
  const [enteredYears, setEnteredYears] = useState("");
  const [enteredYearsIsTouched, setEnteredYearsIsTouched] = useState(false);
  const [enteredYearsError, setEnteredYearsError] = useState("");

  const dayInputChangeHandler = (event) => {
    setEnteredDaysIsTouched(true);
    const value = event.target.value;
    if (value.trim() === "") {
      setEnteredDaysError("This field is required");
      return;
    }
    const numericValue = +value;
    if (numericValue < 1) {
      setEnteredDaysError("Must be a valid day");
      return;
    }

    setEnteredDaysError("");
  };

  const monthInputChangeHandler = (event) => {
    setEnteredMonthsIsTouched(true);
    const value = event.target.value;
    if (value.trim() === "") {
      setEnteredMonthsError("This field is required");
      return;
    }
    const numericValue = +value;
    if (numericValue < 1) {
      setEnteredMonthsError("Must be a valid month");
      return;
    }

    setEnteredMonthsError("");
  };

  const yearInputChangeHandler = (event) => {
    setEnteredYearsIsTouched(true);
    const value = event.target.value;
    if (value.trim() === "") {
      setEnteredYearsError("This field is required");
      return;
    }
    const numericValue = +value;
    if (numericValue < 1) {
      setEnteredYearsError("Must be a valid year");
      return;
    }

    setEnteredYearsError("");
  };

  return (
    <form className={classes.form}>
      <div className={classes.inputsContainer}>
        <label
          htmlFor="day"
          className={`${classes.dayLabel} ${
            enteredDaysError !== "" ? classes.dayLabelError : ""
          }`}
        >
          DAY
        </label>
        <input
          type="number"
          id="day"
          placeholder="day"
          className={`${classes.dayInput} ${
            enteredDaysError !== "" ? classes.dayInputError : ""
          }`}
          onChange={dayInputChangeHandler}
        />
        {enteredDaysError !== "" && (
          <p className={classes.dayErrorMessage}>{enteredDaysError}</p>
        )}

        <label
          htmlFor="month"
          className={`${classes.monthLabel} ${
            enteredMonthsError !== "" ? classes.monthLabelError : ""
          }`}
        >
          MONTH
        </label>
        <input
          type="number"
          id="month"
          placeholder="month"
          className={`${classes.monthInput} ${
            enteredMonthsError !== "" ? classes.monthInputError : ""
          }`}
          onChange={monthInputChangeHandler}
        />
        {enteredMonthsError !== "" && (
          <p className={classes.monthErrorMessage}>{enteredMonthsError}</p>
        )}

        <label
          htmlFor="year"
          className={`${classes.yearLabel} ${
            enteredYearsError !== "" ? classes.yearLabelError : ""
          }`}
        >
          YEAR
        </label>
        <input
          type="number"
          id="year"
          placeholder="year"
          className={`${classes.yearInput} ${
            enteredYearsError !== "" ? classes.yearInputError : ""
          }`}
          onChange={yearInputChangeHandler}
        />
        {enteredYearsError !== "" && (
          <p className={classes.yearErrorMessage}>{enteredYearsError}</p>
        )}
      </div>
      <hr />
      <div className={classes.buttonContainer}>
        <button className={classes.button}>
          <img src={buttonImg} alt="arrow" />
        </button>
      </div>
    </form>
  );
}

export default Form;
