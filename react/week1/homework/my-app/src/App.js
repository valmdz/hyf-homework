import React from "react";
// import ReactDOM from "react-dom";
// import { toDoItem } from "./toDoItem";
// import * as ToDoItem from "./toDoItem";
import { ToDoList } from "./toDoList";

import "./App.css";

const toDos = [
  { description: "Get out of bed", deadline: "Wed Sep 13 2017" },
  { description: "Brush teeth", deadline: "Thu Sep 14 2017" },
  { description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
];

console.log({ toDos });

export const App = () => <ToDoList foo={toDos}></ToDoList>;

