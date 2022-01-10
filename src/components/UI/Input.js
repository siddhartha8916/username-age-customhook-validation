import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      {...props}
    ></input>
  );
};

export default Input;
