import { useState } from "react";
import "./../App.css";

export const TodoForm = ({ onAddTodo, setInLocalStorage }) => {
  const [todoName, setTodoName] = useState([]);

  const todoInputHandler = (event) => {
    setTodoName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setInLocalStorage();
    if (todoName.length >= 1) {
      onAddTodo(todoName);
    }
    setTodoName("");
  };
  return (
    <form className="todo-form" onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="What is the task today?"
        className="todo-input"
        onChange={todoInputHandler}
        value={todoName}
      ></input>
      <button type="submit" className="todo-add-btn">
        Add todo
      </button>
    </form>
  );
};
