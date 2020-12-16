import React, { useContext } from "react";
import { RequestContext } from "./main";

export const Form = () => {
  const cxt = useContext(RequestContext);

  const updateUser = (e) => {
    cxt.setQuery(e.target.value);
  };

  return (
    <div>
      <input type="text" value={cxt.query} onChange={updateUser}></input>
    </div>
  );
};
