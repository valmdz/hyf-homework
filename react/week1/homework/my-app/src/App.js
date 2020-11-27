import React from "react";
import { ToDoList } from "./toDoList";

import "./App.css";

const toDos = [
  { description: "Get out of bed", deadline: "Wed Sep 13 2017" },
  { description: "Brush teeth", deadline: "Thu Sep 14 2017" },
  { description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
];

export const App = () => <ToDoList foo={toDos}></ToDoList>;
