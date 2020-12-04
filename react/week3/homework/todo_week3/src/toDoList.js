import { ToDoItem } from "./toDoItem";
import { Children } from "./Children";

export const ToDoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <div className="children-todo">
        <ToDoItem
          key={todo.id}
          todo={todo}
          onClick={props.onClick}
          onCheck={props.onCheck}
          defaultChecked={props.completed}
          onChange={props.onChange}
        ></ToDoItem>
      </div>
    ))}
  </ul>
);
