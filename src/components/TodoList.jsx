// src/components/TodoList.jsx
import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // ✅ Todo 추가
  const handleAdd = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  // ✅ Todo 수정
  const handleUpdate = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // ✅ Todo 삭제
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAdd}>추가</button>
      </div>
      <div>
        {todos.length === 0 ? (
          <p>할 일이 없습니다!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
