import React, { useRef, useState } from 'react'

/*
    리액트에서는 실제 dom조작을 사용하지 않기를 바람
    VDOM <-> DOM 비교 매커니즘 때문
    브라우저 기능을 써야하는 경우가 존재
    focus(), click() 등
*/

export default function UseRef02() {
    const [value, setValue] = useState("");

    // dom 객체에 직접 접근할 때 사용
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);

    const handleKeyDown = (e) => {
        const div1 = div1Ref.current
        const div2 = div2Ref.current
        const div3 = div3Ref.current

        const key = e.key;
        if (key != "Enter") {
            return;
        }

        if (value === "1") {
            div1.focus();
        } else if (value === "2") {
            div2.focus();
        } else if (value === "3") {
            div3.focus();
        }
    };

    const handleKeyDown2 = (e) => {
        const key = e.key;
        if (key != "Enter") {
            return;
        }
        if (e.target.id === "1") {
            input2Ref.current.focus();
        } else if (e.target.id === "2") {
            input3Ref.current.focus();
        }
    };

    const handleKeyDown3 = (e, nextRef) => {
        if (e.key === "Enter" && nextRef) {
            nextRef.current.focus();
        }
    }

    return (
        <>
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder='1-3 입력'
                />

                {/* 
                jsx 태그에 ref속성으로 실제 dom객체를 useRef변수에 대입 
                원래 div 태그는 focus 대상이 아니다

            */}
                <div ref={div1Ref} tabIndex={0}>1번</div>
                <div ref={div2Ref} tabIndex={0}>2번</div>
                <div ref={div3Ref} tabIndex={0}>3번</div>
            </div>
            <div>
                <input id='1' type="text" placeholder='1번' ref={input1Ref} onKeyDown={(e)=>handleKeyDown3(e,input2Ref)} />
                <input id='2' type="text" placeholder='2번' ref={input2Ref} onKeyDown={handleKeyDown2} />
                <input id='3' type="text" placeholder='3번' ref={input3Ref} onKeyDown={handleKeyDown2} />
            </div>
        </>
    )
}
