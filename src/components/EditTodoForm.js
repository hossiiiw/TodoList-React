import { useState } from "react";
import "./../App.css";

export const EditTodoForm = ({ onEditTodo, task }) => {
  const [todoName, setTodoName] = useState(task.task);

  const todoInputHandler = (event) => {
    setTodoName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    onEditTodo(todoName, task.id);
    setTodoName("");
  };
  return (
    <form className="todo-form" onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="Update Task"
        className="todo-input"
        onChange={todoInputHandler}
        value={todoName}
      ></input>
      <button type="submit" className="todo-add-btn">
        Update Task
      </button>
    </form>
  );
};
