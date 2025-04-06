import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div className="todo_form">
      <h1>Todoリスト</h1>
      <div>
        <input
          type="text"
          placeholder="タスクを入力"
          className="todo_input"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="info_button">
          追加
        </button>
      </div>
      <p>入力内容: {newTodo}</p>
    </div>
  );
}

export default App;
