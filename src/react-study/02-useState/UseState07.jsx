import React from 'react'
import { useState } from 'react'

//조건부 렌더링 - UI 상태 or 권한 상태
export default function UseState07() {
    //로그인 상태
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    const toggleLogin = () => {
        setIsLogin((prev) => !prev);
    };
    const getTokenClick=()=>{
        setAccessToken("token");
    }

    // JS의 모든 값은 boolean값이 될 수 있다.
    // A가 truthy면 B가 평가
    // A && B
    // 값 && 함수(컴포넌트) -> 값이 truthy일때만 컴포넌트 호출
    // 삼항 연산자 -> 데이터 2개가 달리보여야 할때
    // && 연산자 -> 보이거나 안보이거나
    return (
        <div>
            <button onClick={toggleLogin}>{isLogin ? "login" : "logout"}</button>
            <h2>{isLogin ? "login please" : "welcome"}</h2>
            <button onClick={getTokenClick}>토큰 가져오기</button>
            {accessToken && <p>토큰 갱싱 성공</p>}
        </div>
    )
}
