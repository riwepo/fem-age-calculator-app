import React from "react";

function Display({ date }) {
  const dateString = date ? date.toString() : "";
  return <h1>{dateString}</h1>;
}

export default Display;
