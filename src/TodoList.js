import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    const storageTodos = window.localStorage.getItem("todos");

    if (storageTodos) setTodos(JSON.parse(storageTodos));
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;

    let newTodo = [todo, ...todos];

    setTodos(newTodo);
    window.localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => id !== todo.id);

    setTodos(newTodos);
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    window.localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2>O que vai fazer hoje?</h2>
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
