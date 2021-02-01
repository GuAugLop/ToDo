import React from "react";

function TodoForm({ onSubmit }) {
  const [todo, setTodo] = React.useState("");
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: todo,
      complete: false,
    });

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
        ref={inputRef}
      />
      <button>Adicionar</button>
    </form>
  );
}

export default TodoForm;
