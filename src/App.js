import React, { useEffect, useState } from 'react';
import './App.css';
import ShowText from './ShowText.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAppTodos = () => {
    console.log("handleAppTodosが呼ばれました");
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
    console.log("handleAppTodos終了");
  }

  useEffect(() => {
    console.log("updated todos:", todos);
  }, [todos]);

  return (
    <div className="todo_div">
      <h1>Todoリスト</h1>
      <div>
        <input
          type="text"
          placeholder="タスクを入力"
          className="todo_input"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="info_button" onClick={handleAppTodos}>
          追加
        </button>
      </div>
      <p>入力内容: {newTodo}</p>
      <ShowText text="テスト！"/>
      <div className="todo_list">
        <h2>Todoリスト</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
