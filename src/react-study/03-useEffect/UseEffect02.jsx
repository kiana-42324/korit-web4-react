import React, { useEffect, useState } from 'react'

export default function UseEffect02() {
    const [inputVal, setInputVal] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // 상태가 바뀐 이후에 계산되어야 하는 것들
    // 검색어 -> 검색어 추천
    const keywords = [
        "리액트", "자바스크립트", "리액트네이티브", "자바", "스프링", "파이썬", "스프링부트", "흑백요리사", "최강록", "최강휘"
    ];

    //setInputVal 호출 -> 업데이트가 완료된 이후에 따로 계산되어야 함
    useEffect(() => {
        // inputVal이 포함된 문자열을 keywords에서 골라내서 suggention의 상태를 업데이트
        setSuggestions(keywords.filter((keyword) => {
            return keyword.includes(inputVal);
        }))
    }, [inputVal]);

    return (
        <div>
            <h2>검색</h2>
            <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder='검색어 입력'
            />
            <ul>
                {
                    !!inputVal &&
                    suggestions.map((suggestion, i) => {
                        return <li key={i}><button>{suggestion}</button></li>
                    })
                }
            </ul>
        </div>
    )
}
