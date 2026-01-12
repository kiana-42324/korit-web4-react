import React from 'react'

//컴포넌트는 첫글자가 대문자여야 함
//파일이름.jsx의 파일이름과 동일한 이름이어야 함
export default function App03() {
    const age = 10;
    const forAdults = ["맥주","와인","위스키"];
    const forChildren = ["우유","당근주스","사이다"];
    
  return (
    <div>
        <h1>메뉴</h1>
        <h2>
            {/* 성인이며 성인메뉴, 어린이면 어린이 메뉴 텍스트 출력 */}
            {age>19 ? "성인 메뉴" : "어린이 메뉴"}
        </h2>
        <ul>
            {/* 메뉴 목록 출력 */}
            {
                age>19 ? 
                forAdults.map((menu, index)=>{
                    return <li key={index}>{menu}</li>
                }) : 
                forChildren.map((menu, index)=>{
                    return <li key={index}>{menu}</li>
                })
            }
        </ul>
    </div>
  )
}
