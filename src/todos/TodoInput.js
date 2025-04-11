function TodoInput ({newTodo, onInputChange, onAddTodo}) {
  return (
    <div>
      <input
        type="text"
        placeholder="タスクを入力"
        className="todo_input"
        value={newTodo}
        onChange={onInputChange}
      />
      <button className="info_button" onClick={onAddTodo}>
        追加
      </button>
    </div>
  )
}

export default TodoInput;