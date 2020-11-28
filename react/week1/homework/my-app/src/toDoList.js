import { ToDoItem } from "./toDoItem";

export const ToDoList = (props) => (
  <ul>
    {props.foo.map((toDo) => (
      <ToDoItem foo={toDo}></ToDoItem>
    ))}
  </ul>
);
