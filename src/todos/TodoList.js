import TodoItem from './TodoItem.js';

function TodoList ({ todos, onDelete, onStartEdit }) {
  return (
    <div className="todo_list">
      <h2>Todoリスト</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={onDelete} onStartEdit={onStartEdit}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList