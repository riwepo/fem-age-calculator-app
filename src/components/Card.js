import React, { useState } from "react";

import Form from "./Form";
import Display from "./Display";

import classes from "./Card.module.css";

function Card() {
  const [submittedDate, setSubmittedDate] = useState(null);
  function onDateChange() {
    setSubmittedDate(null);
  }
  function onDateSubmitted(date) {
    setSubmittedDate(date);
  }
  return (
    <main className={classes.card}>
      <Form onChange={onDateChange} onSubmit={onDateSubmitted} />
      <Display date={submittedDate} />
    </main>
  );
}

export default Card;
