function TodoItem({
  todo,
  index,
  onDelete,
  onStartEdit,
  editingIndex,
  editingText,
  onEditingChange,
  onUpdate }) {

  const isEditing = (editingIndex === index);

  return (
    <li key={index}>
      {isEditing? (
        <>
          <input
            className="todo_input"
            type="text"
            value={editingText}
            onChange={onEditingChange}>
          </input>
        </>
      ) : (
        <>
          {todo}
          <button
            className="info_button"
            onClick={() => onStartEdit(index)}>
            編集
          </button>
          <button
            className="delete_button"
            onClick={() => onDelete(index)}>
            削除
          </button>
        </>)
      }
    </li>
  )
}

export default TodoItem;