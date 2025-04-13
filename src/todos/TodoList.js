import TodoItem from './TodoItem.js';

function TodoList ({ todos, onDelete, onStartEdit, editingIndex, editingText, handleEditingChange, handleUpdate }) {
  return (
    <div className="todo_list">
      <h2>Todoリスト</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={onDelete} onStartEdit={onStartEdit} editingIndex={editingIndex} editingText={editingText} handleEditingChange={handleEditingChange} handleUpdate={handleUpdate} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList