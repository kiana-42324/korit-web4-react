import React, { use, useEffect, useState } from 'react'

export default function UseEffect04() {
    const [formVal, setFormVal] = useState({
        "email": "",
        "password": ""
    });
    const [errorMsg, setErrorMsg] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);

    const inputChangeHandler = (e) => {
        setFormVal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        setIsDisabled(() => true);
        const newErrorMsg = {};
        // 1. 이메일에 @가 있는지 검사
        // -> 에러메세지 set
        // 2. 비밀번호의 길이가 8미만인지 검사
        // -> 에러메세지 set
        if (formVal.email.length > 0 && !formVal.email.includes("@")) {
            newErrorMsg.email = "이메일 형식에 맞게 입력";
        }
        if (formVal.password.length > 0 && formVal.password.length < 8) {
            newErrorMsg.password = "비밀번호는 8자 이상으로 설정해주세요";
        }
        setErrorMsg(newErrorMsg);
        if (formVal.email.length && formVal.password.length &&
            Object.keys(newErrorMsg).length < 1) {
            setIsDisabled(false);
        }
    }, [formVal]);

    return (
        <div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder='이메일'
                    value={formVal.email}
                    onChange={inputChangeHandler}
                />
                <p>{errorMsg.email}</p>
                
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder='비밀번호'
                    value={formVal.password}
                    onChange={inputChangeHandler}
                />
                <p>{errorMsg.password}</p>
            </div>
            {/* 유효성 통과 x -> disabled */}
            <button
                disabled={isDisabled}
                onClick={() => alert("가입 성공")}
            >
                가입하기
            </button>
        </div>
    )
}
