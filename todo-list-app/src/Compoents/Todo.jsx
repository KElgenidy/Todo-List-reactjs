import './CSS/Todo.css'
import { useState, useRef, useEffect } from 'react'
import { TodoItems } from './TodoItems';
export function Todo() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
		console.log(inputRef.current.value);

    setTodos((currentState) => [...currentState, {no:count, text:inputRef.current.value, display:""}]);
		setCount((currentState) => currentState + 1);
		localStorage.setItem("todos_count", count);
  }

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem("todos")) || []);
		setCount(Number(localStorage.getItem("todos_count")) || 0);
	}, []);


	useEffect(() => {
		setTimeout(() => {
			inputRef.current.value = ""; // Clear the input field
			console.log(todos);
			localStorage.setItem("todos", JSON.stringify(todos))
		}, 100)
	}, [todos]);

  return (
    <div className='todo'>
        <header className="todo-header">To-Do List</header>
        <div className="todo-add">
            <input ref={inputRef} type="text" className="todo-input" placeholder='Add Your Task' />
            <div className="todo-add-btn" onClick={() => add()}>ADD</div>
        </div>
        <div className="todo-list">
				 	{todos.map((item, index) => {
						return <TodoItems key={index} setTodos={setTodos}  no={item.no} text={item.text} display={item.display} />
					})}
        </div>
    </div>
  )
}
