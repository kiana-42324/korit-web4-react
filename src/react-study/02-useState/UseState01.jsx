import React from 'react'
import { useState } from 'react';

//js에서는 이벤트 리스너를 사용해서 클릭 감지
//
export default function UseState01() {
    let myName = "홍길동";
    const [name, setName] = useState(myName);



    //리액트는 가상 dom을 가지고 있다
    //데이터 변경이 되었을 때
    //컴포넌트르르 재호출하는 방식으로 업데이트한다.

    const handleChangeNameClick = () => {
        console.log("이름 변경 버튼 클릭됨");
        myName = "김길동";

        setName(myName);
        console.log(myName);
    };

    return (
        <div>
            <div>{name}</div>
            {/* on(이벤트이름) -> onClick, onChange...*/}
            {/* 이벤트 발생시 호출할 함수 전달 */}
            <button onClick={handleChangeNameClick}>이름변경</button>
        </div>
    )
}
