import React, { useEffect, useState } from 'react';
import './App.css';
import ShowText from './ShowText.js';
import TodoInput from './todos/TodoInput.js';
import TodoList from './todos/TodoList.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodos = () => {
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
      <TodoInput
        newTodo={newTodo}
        onInputChange={handleInputChange}
        onAddTodo={handleAddTodos}
      />
      <p>入力内容: {newTodo}</p>
      <ShowText text="テスト！"/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
