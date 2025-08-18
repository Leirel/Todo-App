// src/App.jsx
import "./App.css";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";
import Quote from "./components/Quote";


function App() {
  return (
    <div className="App">
      <h1>✨ Todo App ✨</h1>
      <Clock />   {/* ✅ Clock 추가 */}
      <TodoList /> {/* ✅ TodoList 아래에 위치 */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Todo + 유틸리티 앱</h1>
      {/* TodoList 등 다른 컴포넌트 */}
      <Quote />
    </div>
  );
}
export default App;
