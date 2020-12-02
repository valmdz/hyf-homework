import React from "react";

export const Children = (props) => {
  const { children } = props;

  return (
    <div className="children-todo">
      {children}
    </div>
  );
};
