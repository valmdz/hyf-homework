import React, { useState, useEffect } from "react";
import { ToDoList } from "./toDoList";
import { Count } from "./count";
import "./App.css";
const intialTodos = [
  {
    id: 1,
    description: "Get out of bed",
    completed: true,
  },
  {
    id: 2,
    description: "Brush teeth",
    completed: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    completed: false,
  },
];

export const App = () => {
  const [todos, setTodos] = useState(intialTodos);

  const addToDo = () => {
    const element = (nextId) => ({ description: "random todo", id: nextId });
    console.log(element);
    return setTodos((prev) => [...prev, element(prev[prev.length - 1].id + 1)]);
  };

  const remove = () => {
    console.log("remove called");
  };

  const check = ({ event, todo }) => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, completed: event.target.checked };
          // return { id: element.id, description: element.description, completed: event.target.checked };
        }
        return element;
      })
    );
  };

  return (
    <div>
      <Count></Count>
      <button onClick={addToDo}>Add todo</button>
      <ToDoList onCheck={check} onClick={remove} todos={todos}></ToDoList>
    </div>
  );
};
