import TodoItem from './TodoItem.js';

function TodoList ({ todos, onDelete }) {
  return (
    <div className="todo_list">
      <h2>Todoリスト</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem index={index} todo={todo} onDelete={onDelete}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList