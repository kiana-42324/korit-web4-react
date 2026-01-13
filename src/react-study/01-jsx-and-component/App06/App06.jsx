import React from 'react'
import MenuList from './MenuList';

export default function App06() {
    const menus = {
        adults: ["맥주", "와인", "위스키"],
        child: ["우유", "주스", "사이다"]
    };
    const user = {
        name: "홍길동",
        age: 188
    };
    let title = user.age > 19 ? "성인용 메뉴" : "어린이용 메뉴";
    // let menuKey;
    // if (user.age > 19){
    //     title="성인용 메뉴";
    //     menuKey=adults;
    // } else {
    //     title = "어린이용 메뉴";
    //     menuKey = child;
    // }
    return (
        <div>
            <h1>연습문제</h1>
            <MenuList title={title} menus={user.age > 19 ? menus.adults : menus.child}/>
        </div>
    )
}
