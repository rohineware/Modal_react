import { useEffect, useState } from "react";
import Todo from "./Todo.jsx";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [cTime, setTime] = useState(new Date().toLocaleDateString());
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodoStatus = (index, status) => {
    const newTodos = [...todos];
    newTodos[index].status = status;
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'due-tomorrow') return todo.status === 'due-tomorrow';
    if (filter === 'completed') return todo.status === 'done';
    return todo.status === filter;
  });

  return (
    <>
      <Todo addTodo={addTodo} />
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <li key={index}>
              <span className="todo-number"></span>
              <span className="todo-text">{todo.text}</span>
              <div className="todo-buttons">
                <button className={`btn-todo ${todo.status}`} onClick={() => updateTodoStatus(index, 'pending')}>Pending</button>
                <button className="btn-todo in-progress" onClick={() => updateTodoStatus(index, 'in-progress')}>In Progress</button>
                <button className="btn-todo done" onClick={() => updateTodoStatus(index, 'done')}>Done</button>
                <button className="btn-todo edit" onClick={() => editTodo(index, prompt('Edit todo:', todo.text))}>Edit</button>
                <button className="btn-todo due-tomorrow" onClick={() => updateTodoStatus(index, 'due-tomorrow')}>Due Tomorrow</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar">
        <button className="sidebar-btn" onClick={() => setFilter('all')}>All Tasks</button>
        <button className="sidebar-btn" onClick={() => setFilter('due-tomorrow')}>Upcoming Tasks</button>
        <button className="sidebar-btn" onClick={() => setFilter('in-progress')}>In Progress</button>
        <button className="sidebar-btn" onClick={() => setFilter('done')}>Completed Tasks</button>
        <div className="clock">{cTime}</div>
      </div>
    </>
  );
}

export default App;
