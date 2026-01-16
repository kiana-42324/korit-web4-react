import React, { useState } from 'react'
import A from './A';
import B from './B';
/* 
-렌더링하고 난 이후
1. 실제 dom에 컴포넌트가 필요  -> 마운트 -> useEffect 실행 -> 마운트 완료
2. 의존성에 있는 상태변화 -> 업데이트 -> (상태를 구독하는) useEffect 실행 
3. 실제 dom에 컴포넌트가 필요 x -> useEffect의 return 함수들 실행 -> 언마운트
컴포넌트의 생명 주기
*/

export default function Unmount() {
    const [showA, setShowA] = useState(true);
    const toggle = () => {
        setShowA((prev)=>!prev);
    }

    return (
        //<></> fragment
        <>
            <button onClick={toggle}>컴포넌트 전환</button>
            {showA ? <A /> : <B />}
        </>
    );
}
