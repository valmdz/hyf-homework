export const ToDoItem = (props) => {
  const s = props.todo.completed ? "line-through" : "";
  return (
    <li>
      <h3>
        <span style={{ textDecoration: s }}>{props.todo.description}:</span>
        {props.todo.id}
        <input
          type="checkbox"
          onClick={(event) => props.onCheck({ event, todo: props.todo })}
          defaultChecked={props.todo.completed}
        />
        <button onClick={props.onClick}>delete</button>{" "}
      </h3>
    </li>
  );
};
