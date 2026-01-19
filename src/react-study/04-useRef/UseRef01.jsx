import React, { useEffect, useRef, useState } from 'react'

export default function UseRef01() {
    const [value, setValue] = useState("");
    const pervValueRef = useRef("");

    //이전 값을 기억해야 하는 상황
    //일반 변수: 렌더링 때 초기화 됨
    //useState의 상태 변수 -> 값이 변하여 리렌더링
    //useRef : 렌더링과 무관하게 값을 저장하는 변수 제공

    useEffect(() => {
        console.log(pervValueRef.current);
        pervValueRef.current = value;
        console.log(pervValueRef.current);
    }, [value]);


    return (
        <div>
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
            />
            <p>현재 : {value}</p>
            <p>이전 : {pervValueRef.current}</p>
        </div>
    )
}
