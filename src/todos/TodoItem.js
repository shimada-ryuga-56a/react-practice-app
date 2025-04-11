function TodoItem({ todo, index, onDelete }) {
  return (
    <li key={index}>
      {todo}
      <button
        className="deleteButton"
        onClick={() => onDelete(index)}>
        削除
      </button>
    </li>
  )
}

export default TodoItem;