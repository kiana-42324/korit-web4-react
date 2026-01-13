import React from 'react'

//컴포넌트는 매개변수를 받을 수 있음
//props라고 한다

//1. 부모 -> 자식만 전달 가능
//2. js 객체로 데이터 전달
export default function MenuList({title, menus}) {
  return (
    <div>
        <h2>{title}</h2>
        <ul>
            {menus.map((menu, index)=>{
                return <li key={index}>{menu}</li>
            })}
        </ul>
    </div>
  )
}
