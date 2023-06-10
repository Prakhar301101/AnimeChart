import { Button } from "bootstrap";
import React from "react";

export default function Header(props) {
  return (
    <div className="head">
      <button>&#60;</button>
      <h1>
        {props.Season} {props.Year}
      </h1>
      <button>&gt;</button>
    </div>
  );
}
