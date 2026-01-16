import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

// 렌더링 -> js 객체를 리액트가 해석
// -> 가상dom(vdom) 생성 -> vdom을 실제 브라우저 dom에 반영
// 반영되는 시점이 마운트
// 언마운트: 컴포넌트가 화면에서 제거되는 시점
export default function UseEffect01() {
    console.log("함수호출 됨 (렌더링 시작)")

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    const handleClick = () => {
        console.log("클릭 이벤트 발생");
        setCount((prev) => prev + 1);
    }

    //주의
    // 2번이 먼저 실행됨
    // 렌더가 끝난뒤에 useEffect가 실행됨
    useEffect(()=>{
        console.log("누가 먼저 실행될까 1");
        // 렌더 이후라서 실제 dom 접근도 가능
        // 스크롤바.. 이벤트관련 조작 코드
    });//의존성 배열 없으면 렌더 끝날 때마다 실행
    console.log("누가 먼저 실행될까 2");

    // useEffect 함수는 
    // 1. 마운트 시점에 실행될 함수를 매개변수로 받음
    useEffect(() => {
        //마운트 시점: 처음으로 컴포넌트가 실제 dom에 장착되는 시점
        console.log("처음으로 컴포넌트가 실제 dom에 장착되었습니다.");

        // fetch()를 useEffect에서 실행함
    }, [])

    // 2. 의존성 배열에 담긴 값이 변경되면 함수가 실행됨
    // 최초 마운트시에도 실행됨
    useEffect(()=>{
        console.log("카운트 변경 감지");
        console.log(`실제 돔에 반영된 count: ${count}`);
    },[count])

    console.log("렌더 종료 직전");
    return (
        <div>
            <button onClick={handleClick}>클릭</button>
            <h2>count: {count}</h2>
            <h3>{message}</h3>
        </div>
    )
}
