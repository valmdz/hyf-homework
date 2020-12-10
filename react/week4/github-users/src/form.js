import React from "react";

export const Form = (props) => {

  const updateUser = (e) => {
    props.setQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" value={props.query} onChange={updateUser}></input>
    </div>
  );
};
