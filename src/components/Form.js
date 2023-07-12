import React from "react";

import classes from "./Form.module.css";

function Form() {
  return (
    <form className={classes.form}>
      <div className={classes.inputsContainer}>
        <label htmlFor="day">Day</label>
        <input type="text" id="day" placeholder="day" />
        <label htmlFor="month">Month</label>
        <input type="text" id="month" placeholder="month" />
        <label htmlFor="year">Year</label>
        <input type="text" id="year" placeholder="year" />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
