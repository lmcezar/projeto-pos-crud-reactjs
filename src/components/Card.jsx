import React from "react";

export default (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <h3>{props.value}</h3>
    </div>
  );
};
