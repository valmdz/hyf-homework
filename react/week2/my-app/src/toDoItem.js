export const ToDoItem = (props) => {
  const textDecoration = props.todo.completed ? "line-through" : "";
  return (
    <li>
      <input
        type="checkbox"
        onClick={(event) => props.onCheck({ event, todo: props.todo })}
        defaultChecked={props.todo.completed}
      />
      <button onClick={() => props.onClick(props.todo)}>delete</button>
      <span style={{ textDecoration }}>{props.todo.description}</span>
    </li>
  );
};
