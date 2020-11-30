import { ToDoItem } from "./toDoItem";
export const ToDoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <ToDoItem
        key={todo.id}
        todo={todo}
        onClick={props.onClick}
        onCheck={props.onCheck}
        defaultChecked={props.completed}
      ></ToDoItem>
    ))}
  </ul>
);
