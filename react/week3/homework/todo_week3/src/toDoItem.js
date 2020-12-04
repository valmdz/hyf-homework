import React, { useState } from "react";

export const ToDoItem = (props) => {
  const textDecoration = props.todo.completed ? "line-through" : "";

  const [isEditing, setEditing] = useState(false);
  return (
    <li>
      <input
        type="checkbox"
        onClick={(event) => props.onCheck({ event, todo: props.todo })}
        defaultChecked={props.todo.completed}
      />
      <button onClick={() => props.onClick(props.todo)}>delete</button>
      <button onClick={() => setEditing(true)}>Edit</button>
      {isEditing ? (
        <input
          value={props.todo.description}
          onChange={(event) => props.onChange({ event, todo: props.todo })}
          onBlur={() => setEditing(false)}
        ></input>
      ) : (
        <span style={{ textDecoration }}>
          {props.todo.description} | {props.todo.deadline}
        </span>
      )}
    </li>
  );
};
