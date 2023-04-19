import { TodoItem } from "./TodoItem";
export function TodoList({ todo, deleteTodo, toggleTodo }) {
  return (
    <ul className="list">
      {todo.length === 0 && "No task"}
      {todo.map((item) => {
        console.log("map item", item.name);
        return (
          <TodoItem
            id={item.id}
            completed={item.completed}
            name={item.name}
            key={item.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
