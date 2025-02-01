import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import CrayonEffectSVG from "./components/CrayonEffectSVG";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newItem = { id: Date.now(), text: inputValue, completed: false };
    setItems([...items, newItem]);
    setInputValue("");
  }

  function handleToggleComplete(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleEdit(id, newText) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  }

  return (
    <div className="App">
      
      <CrayonEffectSVG />
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ToDoList
        items={items}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;



