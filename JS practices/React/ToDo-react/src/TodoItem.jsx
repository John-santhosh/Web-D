export function TodoItem({ completed, id, name, deleteTodo, toggleTodo }) {
  const a = name;
  console.log(name);
  return (
    // key={item.id}
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {name}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
