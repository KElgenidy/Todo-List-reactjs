import './CSS/TodoItems.css'
import tick from './assets/tick.png'
import cross from './assets/cross.png'
import not_tick from './assets/not_tick.png'

import PropTypes from 'prop-types'

export function TodoItems({no, text, display, setTodos}) {

    const toggle = (no) => {
        const data = JSON.parse(localStorage.getItem("todos"))

        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                data[i].display = data[i].display==="" ? "line-through" : "";
                break;
            }
        }

        setTodos(data);
    };

    const deleteItem = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"))
        data = data.filter((item) => item.no !== no);
        setTodos(data);
    };

    return (
        <div className='todo-items'>
            <div className={`todo-items-container ${display}`}>
                {display==="" ? <img src={not_tick} alt="" onClick={() => toggle(no)}  /> : <img src={tick} alt="" onClick={() => toggle(no)}/> }
                <div className="todo-items-text">{text}</div>
            </div>
            <div className="todo-items-crossbtn">
                <img src={cross} alt="" onClick={() => deleteItem(no)}/>
            </div>
           
        </div>
    )
}

TodoItems.propTypes = {
    no: PropTypes.number,
    text: PropTypes.string,
    display: PropTypes.string,
    setTodos: PropTypes.func
}