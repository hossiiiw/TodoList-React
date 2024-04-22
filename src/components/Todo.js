import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./../App.css";
export const Todo = ({ task, toggleComplete, deleteHandler, editTodo }) => {
  return (
    <div className="todo">
      <p
        onClick={() => {
          toggleComplete(task.id);
        }}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div className="todo-task-icon">
        <FontAwesomeIcon
          className={`${task.isEditing ? "isEditing" : ""}`}
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteHandler(task.id)}
        />
      </div>
    </div>
  );
};
