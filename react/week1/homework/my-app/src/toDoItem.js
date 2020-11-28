export const ToDoItem = (props) => (
  <li>
    <h3>
      <span>{props.foo.description}:</span> {props.foo.deadline}
    </h3>
  </li>
);
