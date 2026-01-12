import React from 'react'
import MenuList from './menuList';

export default function App04() {
    const age = 20;
    const forAdults = ["맥주", "와인", "위스키"];
    const forChildren = ["우유", "당근주스", "사이다"];
    const isAdult = age > 19;
    const menuTitle = isAdult ? "성인 메뉴" : "어린이 메뉴";
    let menus = [];
    if (isAdult) {
        menus = forAdults;
    } else {
        menus = forChildren;
    }
    return (
        <div>
            <h1>메뉴</h1>
            {/* App04가 menuList의 부모가 됨 */}
            <MenuList title={menuTitle} menus={menus}/>
        </div>
    )
}
