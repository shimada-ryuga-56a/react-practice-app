import TodoItem from './TodoItem.js';

function TodoList ({ todos, onDelete, onStartEdit, editingIndex, editingText, onEditingChange, onUpdate }) {
  return (
    <div className="todo_list">
      <h2>Todoリスト</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} onDelete={onDelete} onStartEdit={onStartEdit} editingIndex={editingIndex} editingText={editingText} onEditingChange={onEditingChange} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList