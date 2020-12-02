import { ToDoItem } from "./toDoItem";
import { Children } from "./Children";

export const ToDoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <Children>
        <ToDoItem
          key={todo.id}
          todo={todo}
          onClick={props.onClick}
          onCheck={props.onCheck}
          onClickEdit={props.onClickEdit}
          defaultChecked={props.completed}
        ></ToDoItem>
      </Children>
    ))}
  </ul>
);
