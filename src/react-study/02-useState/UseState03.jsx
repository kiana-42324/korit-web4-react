import React, { use } from 'react'
import { useState } from 'react';

export default function UseState03() {
    const [formData,setFormData] = useState({
        name:"",
        major:""
    })
    // const [name, setName] = useState("");
    // const [major, setMajor] = useState("");

    const handleNameChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        console.log(target);
        console.log(value);
        setName(value);
    };
    const handleMajorChange = (e) => {
        const value = e.target.value;
        setName(value);
    };
    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    return (
        <div>

            <input
                type="text"
                value={formData.name}
                name="name"
                placeholder="이름 입력"
                // onClick, onChange와 같은 이벤트 속성에
                // 등록된 함수는 첫번째'매개변수에
                // 리액트가 알아서 이벤트객체를 넣어준다.
                onChange={handleInputChange}
            // onChange={(event) => handleNameChange(event)}와 같음
            />
            <br />
            <input
                type="text"
                value={formData.major}
                name="major"
                placeholder="전공 입력"
                onChange={handleInputChange}
            />
            <p>이름:{formData.name}</p>
            <p>전공:{formData.major}</p>
        </div>
    )
}
