function TodoList ({ todos }) {
  return (
    <div className="todo_list">
      <h2>Todoリスト</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList