import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import "./../App.css";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [isInitializing, setIsInitializing] = useState(true);

  //add todo handler
  const addTodoHandler = (newTodo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: newTodo, completed: false, isEditing: false },
    ]);

    addToLocalStorage(todos);
  };

  //toggle completed todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log(todos);
  };

  //delete todo
  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    addToLocalStorage(todos);
  };

  //edit todo handler
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  //edit task handler
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  //add to localStorage
  const addToLocalStorage = (data) => {
    if (data) {
      data = localStorage.setItem("todoData", JSON.stringify(data));
    }
  };

  //get data from localStorage
  const getItemHandler = () => {
    let localTodo = JSON.parse(localStorage.getItem("todoData"));
    return setTodos(localTodo);
  };



  useEffect(() => {
    if (isInitializing) {
      getItemHandler();
      setIsInitializing(false);
    } else {
      addToLocalStorage(todos);
    }
  }, [todos]);

  return (
    <div className="todo-wrapper">
      <h1 className="header">Get Things Done</h1>
      <TodoForm
        onAddTodo={addTodoHandler}
        setInLocalStorage={addToLocalStorage}
      />
      {todos.map((task, index) => {
        return (
          <React.Fragment>
            {task.isEditing ? (
              <EditTodoForm onEditTodo={editTask} task={task} key={uuidv4()} />
            ) : (
              <Todo
                task={task}
                key={index}
                toggleComplete={toggleComplete}
                deleteHandler={deleteHandler}
                editTodo={editTodo}
                setInLocalStorage={addToLocalStorage}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoWrapper;
