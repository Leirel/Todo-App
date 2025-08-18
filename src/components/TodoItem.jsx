// src/components/TodoItem.jsx
import { useState } from "react";

function TodoItem({ todo, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        onUpdate(todo.id, editText);
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
        {isEditing ? (
            <>
            <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={handleSave}>저장</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
            </>
        ) : (
            <>
            <span>{todo.text}</span>
            <button onClick={() => setIsEditing(true)}>수정</button>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
            </>
        )}
        </div>
    );
    }

export default TodoItem;
