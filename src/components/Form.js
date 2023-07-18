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

function isValidDateInPast(currentDate, year, month, day) {
  // note that month and day are 1 based i.e. 1 = Jan, 1 = first of month
  // returns an object like
  // {
  //   yearIsValid: true,
  //   yearIsInPast: true,
  //   monthIsValid: true,
  //   monthIsInPast: true,
  //   dayIsValid: true,
  //   dayIsInPast: true,
  // };
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // JsS month is ) based
  const currentDay = currentDate.getDate();

  const yearIsValid = year > 1900 && year < 2100;
  const yearIsInPast = yearIsValid && year <= currentYear;

  const monthIsValid = month > 0 && month < 12;
  const monthIsInPast =
    yearIsValid &&
    monthIsValid &&
    (year < currentYear || month <= currentMonth);

  let daysInMonth = 0;
  let dayIsValid = false;
  let dayIsInPast = false;
  if (yearIsValid && monthIsValid) {
    daysInMonth = new Date(year, month - 1, 0).getDate();
    dayIsValid = day > 0 && day <= daysInMonth;
    dayIsInPast =
      yearIsValid &&
      monthIsValid &&
      dayIsValid &&
      (year < currentYear || month < currentMonth || day <= currentDay);
  }

  const result = {
    yearIsValid,
    yearIsInPast,
    monthIsValid,
    monthIsInPast,
    dayIsValid,
    dayIsInPast,
  };

  return result;
}

function Form({ onSubmit }) {
  const [enteredDays, setEnteredDays] = useState("");
  const [enteredDaysIsTouched, setEnteredDaysIsTouched] = useState(false);
  const [enteredDaysError, setEnteredDaysError] = useState("");
  const [enteredMonths, setEnteredMonths] = useState("");
  const [enteredMonthsIsTouched, setEnteredMonthsIsTouched] = useState(false);
  const [enteredMonthsError, setEnteredMonthsError] = useState("");
  const [enteredYears, setEnteredYears] = useState("");
  const [enteredYearsIsTouched, setEnteredYearsIsTouched] = useState(false);
  const [enteredYearsError, setEnteredYearsError] = useState("");

  // test
  //const testDate = new Date(1963, 5, 11);
  //const dateInfo = isValidDateInPast(testDate, 1963, 6, 11);

  function formSumbitHandler(event) {
    event.preventDefault();
    const enteredDate = new Date(
      +enteredYears,
      +enteredMonths - 1,
      +enteredDays
    );
    onSubmit(enteredDate);
  }

  function updateDateStatus(year, month, day) {
    // updates the date status on the screen
    // note that month is 1 based i.e. 1 = Jan
    // and day is 1 based i.e. 0 = first of month
    const currentDate = new Date();
    const dateInfo = isValidDateInPast(currentDate, year, month, day);
    const yearError = !dateInfo.yearIsValid
      ? "Must be a valid year"
      : !dateInfo.yearIsInPast
      ? "Must be in the past"
      : "";
    setEnteredYearsError(yearError);
    const monthError = !dateInfo.monthIsValid
      ? "Must be a valid month"
      : !dateInfo.monthIsInPast
      ? "Must be in the past"
      : "";
    setEnteredMonthsError(monthError);
    const dayError = !dateInfo.dayIsValid
      ? "Must be a valid day"
      : !dateInfo.dayIsInPast
      ? "Must be in the past"
      : "";
    setEnteredDaysError(dayError);
  }

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

    setEnteredDays(addOrRemoveLeadingZero(trimmedValue));

    updateDateStatus(+enteredYears, +enteredMonths, +trimmedValue);
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

    setEnteredMonths(addOrRemoveLeadingZero(trimmedValue));

    updateDateStatus(+enteredYears, +trimmedValue, +enteredDays);
  };

  const yearInputChangeHandler = (event) => {
    setEnteredYearsIsTouched(true);
    const trimmedValue = event.target.value.trim();
    setEnteredYears(trimmedValue);
    if (trimmedValue === "") {
      setEnteredYearsError("This field is required");
      return;
    }

    updateDateStatus(+trimmedValue, +enteredMonths, +enteredDays);
  };

  return (
    <form className={classes.form} onSubmit={formSumbitHandler}>
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
          onKeyDown={numericInputKeyHandler}
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
