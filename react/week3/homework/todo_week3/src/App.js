import React, { useState, useEffect } from "react";
import { Count } from "./count";
import "./App.css";
import { ToDoForm } from "./toDoForm";
import { ToDoItem } from "./toDoItem";

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const baseToDos = data.map((todo) => ({ ...todo, completed: false }));
  return baseToDos;
};

export const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchAndSet = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };
    fetchAndSet();
  }, []);

  const addToDo = (e) => {
    const newTodo = [...new FormData(e.target).entries()];
    const makeTodo = (nextId) => ({
      description: newTodo[0][1],
      id: nextId,
      deadline: newTodo[1][1],
      completed: false,
    });
    return setTodos((prev) => [
      ...prev,
      makeTodo(prev[prev.length - 1].id + 1),
    ]);
  };

  const remove = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const check = ({ event, todo }) => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, completed: event.target.checked };
        }
        return element;
      })
    );
  };

  const edit = ({ event, todo }) => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, description: event.target.value };
        }
        return element;
      })
    );
  };

  return (
    <div>
      <h1>Todos</h1>
      <Count></Count>
      <ToDoForm onSubmit={addToDo}></ToDoForm>
      <ul>
        {todos.map((todo) => (
          <div className="children-todo">
            <ToDoItem
              key={todo.id}
              todo={todo}
              onClick={remove}
              onCheck={check}
              defaultChecked={todos.completed}
              onChange={edit}
            ></ToDoItem>
          </div>
        ))}
      </ul>
    </div>
  );
};
