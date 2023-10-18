import React from "react";
import "./index.css";

export default function Form(props) {
  return (
    <>
      <i class={props.icon} aria-hidden="true"></i>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.changeFunction}
      />
    </>
  );
}
