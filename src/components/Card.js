import React, { useState } from "react";

import Form from "./Form";
import Display from "./Display";

import classes from "./Card.module.css";

function Card() {
  const [enteredDate, setEnteredDate] = useState(null);
  function onDateEntered(date) {
    console.log(date);
    setEnteredDate(date);
  }
  return (
    <main className={classes.card}>
      <Form onSubmit={onDateEntered} />
      <Display date={enteredDate} />
    </main>
  );
}

export default Card;
