import React from "react";

import buttonImg from "../../assets/images/icon-arrow.svg";

import classes from "./Form.module.css";

function Form() {
  return (
    <form className={classes.form}>
      <div className={classes.inputsContainer}>
        <label htmlFor="day">DAY</label>
        <input type="text" id="day" placeholder="day" />
        <label htmlFor="month">MONTH</label>
        <input type="text" id="month" placeholder="month" />
        <label htmlFor="year">YEAR</label>
        <input type="text" id="year" placeholder="year" />
      </div>
      <div className={classes.buttonContainer}>
        <hr />
        <button className={classes.button}>
          <img src={buttonImg} alt="arrow" />
        </button>
      </div>
    </form>
  );
}

export default Form;
