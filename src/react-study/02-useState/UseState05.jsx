import React, { use } from 'react'
import { useState } from 'react';

export default function UseState05() {
    const [todos, setTodos] = useState([]);
    const [inputVal, setInputVal] = useState("");
    
    const handleChangeInput = (e)=>{
        setInputVal(e.target.value);
    };
    const addTodoClick = ()=>{
        // setTodos([...todos,inputVal]);
        setTodos((prev)=>[...prev,inputVal]);
        setInputVal("");
    };

  return (
    <div>
        <input 
        type="text" 
        value={inputVal}
        onChange={handleChangeInput}
        placeholder='TO-DO 입력'
        />
        <button onClick={addTodoClick}>TO-DO 추가</button>
        <ul>
            {todos.map((todo,i)=>{
                //원래 key로 index를 넣으면 안됨
                //리액트가 리스트로 렌더링할 때
                //실제 데이터 기준이 아니라
                //key 기준으로 변경을 감지함
                return <li key={i}>{todo}</li>
            })}
        </ul>
    </div>
  )
}
