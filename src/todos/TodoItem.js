function TodoItem({ todo, index, onDelete, onStartEdit }) {
  return (
    <li key={index}>
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
    </li>
  )
}

export default TodoItem;