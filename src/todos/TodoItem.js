function TodoItem({ todo, index }) {
  return (
    <li key={index}>{todo}</li>
  )
}

export default TodoItem;