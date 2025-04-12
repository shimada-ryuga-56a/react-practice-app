import React, { useEffect, useState } from 'react';
import './App.css';
import ShowText from './ShowText.js';
import TodoInput from './todos/TodoInput.js';
import TodoList from './todos/TodoList.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');

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

  const handleDeleteTodos = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index != indexToDelete);
    setTodos(updatedTodos);
  }

  const handleStartEdit = (index) => {
    console.log("handleStartEditが呼ばれました");
    setEditingIndex(index);
    setEditingText(todos[index]);
  }

  const handleEditingChange = (event) => {
    setEditingText(event.target.value);
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
      <TodoList todos={todos} onDelete={handleDeleteTodos} onStartEdit={handleStartEdit} />
    </div>
  );
}

export default App;
