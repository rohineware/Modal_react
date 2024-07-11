import { useState } from "react";

export default function Modal({ addTodo, closeModal }) {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("pending");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo({ text: inputValue, status: status });
      setInputValue("");
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          placeholder="Enter todo..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <select value={status} onChange={handleStatusChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
        </select>
        <div className="modal-buttons">
          <button className="btn btn-add" onClick={handleAddTodo}>Add Task</button>
          <button className="btn btn-close" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}
