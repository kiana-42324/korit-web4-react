import React, { use } from 'react'
import { useState } from 'react'

export default function UseState06() {
    const [memos, setMemos] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const [done, setDone] = useState(false);

    const handleChangeInput = (e) => {
        setInputVal(e.target.value);
    };
    const addMemoClick = () => {
        setMemos((prev) => [...prev, { id: [Date.now()], text: inputVal, done: done }]);
        setInputVal("");
        setDone(false);
    }
    const handleCheckClick = (e) => {
        setDone(e.target.checked);
    };
    const handleToggleDone = (id) => {
        const newMemos = memos.map((memo) => {
            if (memo.id === id) {
                return { ...memo, done: !memo.done }
            } else {
                return memo;
            }
        });
        setMemos(newMemos);
    };
    const handleAllCheck = () => {
        setMemos((prev) => prev.map((memo) => {
            return { ...memo, done: true }
        }));
    }
    const handleAllNonCheck = () => {
        setMemos((prev) => prev.map((memo) => {
            return { ...memo, done: false }
        }));
    }

    return (
        <div>
            <input
                type="text"
                value={inputVal}
                onChange={handleChangeInput}
            />
            <input type="checkbox" checked={done} onChange={handleCheckClick} />
            <button onClick={addMemoClick}>메모 추가하기</button>
            <button onClick={handleAllCheck}>모두 체크하기</button>
            <button onClick={handleAllNonCheck}>모두 체크해제</button>
            <ul>
                {memos.map((memo) => {
                    return (
                        <li key={memo.id}>
                            {memo.text}
                            <input
                                type="checkbox"
                                checked={memo.done}

                                onChange={() => handleToggleDone(memo.id)} />
                        </li>
                    )
                })}
            </ul>
            <ul>
                {memos
                    .filter((memo) => {
                        return memo.done
                    })
                    .map((memo) => {
                        return (
                            <li key={memo.id}>
                                {memo.text}
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}
