import React, { useState } from "react";

import buttonImg from "../assets/images/icon-arrow.svg";

import classes from "./Form.module.css";

function keyIsDeleteOrNumeric(key) {
  // returns true if the key represents a delete, backspace or numeric char
  const ascii = key.charCodeAt(0);
  if (ascii === 66 || ascii === 68) {
    return true;
  }
  return ascii >= 48 && ascii <= 66;
}

function addOrRemoveLeadingZero(trimmedChars) {
  // adds or removes leading zero as required
  if (trimmedChars.length === 1) {
    return "0" + trimmedChars;
  }

  if (trimmedChars.length > 2 && trimmedChars[0] === "0") {
    return trimmedChars.slice(1);
  }

  return trimmedChars;
}

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

  const numericInputKeyHandler = (event) => {
    // ignores non numeric keys
    if (!keyIsDeleteOrNumeric(event.key)) {
      event.preventDefault();
    }
  };

  const dayInputChangeHandler = (event) => {
    // expects empty string or string of digits
    setEnteredDaysIsTouched(true);
    const trimmedValue = event.target.value.trim();
    setEnteredDays(trimmedValue);
    if (trimmedValue === "") {
      setEnteredDaysError("This field is required");
      return;
    }
    const numericValue = +trimmedValue;
    console.log(numericValue);
    if (numericValue < 1) {
      setEnteredDaysError("Must be a valid day");
      return;
    }

    setEnteredDays(addOrRemoveLeadingZero(trimmedValue));

    setEnteredDaysError("");
  };

  const monthInputChangeHandler = (event) => {
    // expects empty string or string of digits
    setEnteredMonthsIsTouched(true);
    const trimmedValue = event.target.value.trim();
    setEnteredMonths(trimmedValue);
    if (trimmedValue === "") {
      setEnteredMonthsError("This field is required");
      return;
    }
    const numericValue = +trimmedValue;
    console.log(numericValue);
    if (numericValue < 1 || numericValue > 12) {
      setEnteredMonthsError("Must be a valid month");
      return;
    }

    setEnteredMonths(addOrRemoveLeadingZero(trimmedValue));

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
          min={1}
          max={31}
          value={enteredDays}
          id="day"
          placeholder="DD"
          className={`${classes.dayInput} ${
            enteredDaysError !== "" ? classes.dayInputError : ""
          }`}
          onChange={dayInputChangeHandler}
          onKeyDown={numericInputKeyHandler}
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
          min={1}
          max={12}
          value={enteredMonths}
          id="month"
          placeholder="MM"
          className={`${classes.monthInput} ${
            enteredMonthsError !== "" ? classes.monthInputError : ""
          }`}
          onChange={monthInputChangeHandler}
          onKeyDown={numericInputKeyHandler}
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
          placeholder="YYYY"
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
