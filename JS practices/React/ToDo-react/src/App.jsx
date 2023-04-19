import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todo, setTodo] = useState([]);

  function toggleTodo(id, completed) {
    // console.log(id, completed);
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          // console.log(completed);
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }
  function addTodo(name) {
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), name, completed: false },
      ];
    });
  }

  function deleteTodo(id) {
    // console.log(id);
    setTodo((currentTodo) => {
      // console.log(currentTodo);
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }
  // console.log(todo);
  return (
    <>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <h1 className="header">Todo list</h1>
      <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
