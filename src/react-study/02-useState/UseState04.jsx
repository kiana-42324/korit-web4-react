import React from 'react'
import { useState } from 'react';

export default function UseState04() {
    //setter를 호출하면 컴포넌트는 재실행됨
    //재호출시 number가 초기값으로 재설정됨
    // let number = 0;
    const [count, setCount] = useState(0);
    const increase = () => {
        // setCount(count+1);
        // setCount(count+1);
        //두번 호출해도 setter들은 리액트가 batch 처리함
        //그때의 count 값은 0으로 동일

        //함수형 업데이트
        //setter에 함수를 매개변수로 전달가능
        //리액트가 첫번째 매개변수에 이전 값을 넣는다
        //이전 값을 쓰는 경우 함수형 권장
        setCount((prev)=>prev +1);
        setCount((prev)=>prev +1);
    };
    const decrease = () => {
        setCount(count-1);
    };
    return (
        <div>
            <h1>카운터</h1>
            <h3>
                {count}
            </h3>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}
