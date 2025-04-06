import './App.css';

function App() {
  return (
    <div class="todo_form">
      <h1>Todoリスト</h1>
      <div>
        <input
          type="text"
          placeholder="タスクを入力"
          class="todo_input"
        />
        <button class="info_button">
          追加
        </button>
      </div>
    </div>
  );
}

export default App;
