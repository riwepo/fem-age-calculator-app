import React from "react";

import Form from "./Form";
import Display from "./Display";

import classes from "./Card.module.css";

function Card() {
  function onDateEntered(date) {
    console.log(date);
  }
  return (
    <main className={classes.card}>
      <Form onSubmit={onDateEntered} />
      {/* <Display /> */}
    </main>
  );
}

export default Card;
