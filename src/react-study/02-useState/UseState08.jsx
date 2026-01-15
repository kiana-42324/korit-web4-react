import React from 'react'
import { useState } from 'react'

export default function UseState08() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");

    const handleChangeInput = (e) => {
        setInputVal(e.target.value);
    };
    const addTodoClick = () => {
        // setTodos([...todos,inputVal]);
        setTodos((prev) => [...prev, inputVal]);
        setInputVal("");
    };
    console.log(todos[0] && 1);

    return (
        <div>
            <input
                type="text"
                value={inputVal}
                onChange={handleChangeInput}
                placeholder='TO-DO 입력'
            />
            <button onClick={addTodoClick}>할 일 추가</button>
            {!todos[0] && <p>할 일 없음</p>}
            <ul>
                {
                    todos[0] && todos.map((todo, i) => {
                        return <li key={i}>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
