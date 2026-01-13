import React from 'react'
import { useState } from 'react';

export default function UseState02() {
    //setter를 호출하면 컴포넌트는 재실행됨
    //재호출시 number가 초기값으로 재설정됨
    // let number = 0;
    const [num, setNum] = useState(0);
    const handlePlusClick = () => {
        setNum(num+1);
    };
    const handleMinusClick = () => {
        setNum(num-1);
    };
    return (
        <div>
            <h1>카운터</h1>
            <h3>
                {num}
            </h3>
            <button onClick={handlePlusClick}>+1</button>
            <button onClick={handleMinusClick}>-1</button>
        </div>
    )
}
