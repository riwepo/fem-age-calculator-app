import React from "react";

import Form from "./Form";
import Display from "./Display";

import classes from "./Card.module.css";

function Card() {
  return (
    <main className={classes.card}>
      <Form />
      {/* <Display /> */}
    </main>
  );
}

export default Card;
