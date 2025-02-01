import { useState } from "react";

function ToDoItem({ item, onToggleComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  function handleSave() {
    onEdit(item.id, editText);
    setIsEditing(false);
  }

  return (
    < div className="wrap">
    <li className={`list-item ${item.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="task-container">
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            className="edit-input"
          />
          <button className="icon-button save" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div className="task-container">
          <span
            className={`heart ${item.completed ? "checked" : ""}`}
            onClick={() => onToggleComplete(item.id)}
          ></span>
          <span className="task-text">{item.text}</span>
          <button
            className="icon-button edit"
            onClick={() => setIsEditing(true)}
          >
            <img src="/edit.png" alt="Edit" />
          </button>
          <button
            className="icon-button delete"
            onClick={() => onDelete(item.id)}
          >
            <img src="/delete.png" alt="Delete" />
          </button>
        </div>
      )}
    </li>
    </div>
  );
}

export default ToDoItem;
