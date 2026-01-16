import React, { useEffect, useState } from 'react'

export default function UseEffect03() {
    const [temperature, setTemperature] = useState(8);
    const [msg, setMsg] = useState("");

    //10도 미만 -> "추워요"
    //10-25 -> "좋은 날씨"
    //25 초과 -> "더워요"

    useEffect(()=>{
        if (temperature<10){
            setMsg("추워요");
        } else if (temperature>25){
            setMsg("더워요");
        } else {
            setMsg("좋은 날씨");
        }
    },[temperature])
    

    return (
        <>
            <h2>에어컨 리모콘</h2>
            <h1>{temperature}도</h1>

            <button onClick={()=>setTemperature((prev)=>prev+1)}>+</button>
            <button onClick={()=>setTemperature((prev)=>prev-1)}>-</button>

            <h3>{msg}</h3>
        </>
    )
}
