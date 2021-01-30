import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Todo({ todo, completeTodo, deleteTodo }) {
  return (
    <div className={`${todo.complete ? "row-todo complete" : "row-todo"}`}>
      <div onClick={() => completeTodo(todo.id)} className="todo-text">
        {todo.text}
      </div>
      <div onClick={() => deleteTodo(todo.id)}>
        <AiOutlineCloseCircle className="delete-icon" />
      </div>
    </div>
  );
}

export default Todo;
