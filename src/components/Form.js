import React, { useState } from "react";

import buttonImg from "../assets/images/icon-arrow.svg";

import classes from "./Form.module.css";

function Form() {
  const [enteredDays, setEnteredDays] = useState("1");
  const [enteredDaysIsTouched, setEnteredDaysIsTouched] = useState(false);
  const [enteredDaysError, setEnteredDaysError] = useState("");

  const dayInputChangeHandler = (event) => {
    setEnteredDaysIsTouched(true);
    const value = event.target.value;
    if (enteredDays.trim() === "") {
      setEnteredDaysError("This field is required");
    }
    const numericValue = +value;
    if (numericValue < 1) {
      setEnteredDaysError("Must be a valid day");
    }
  };

  return (
    <form className={classes.form}>
      <div className={classes.inputsContainer}>
        <label htmlFor="day">DAY</label>
        <input
          type="number"
          id="day"
          placeholder="day"
          onChange={dayInputChangeHandler}
        />
        <label htmlFor="month">MONTH</label>
        <input type="number" id="month" placeholder="month" />
        <label htmlFor="year">YEAR</label>
        <input type="number" id="year" placeholder="year" />
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
