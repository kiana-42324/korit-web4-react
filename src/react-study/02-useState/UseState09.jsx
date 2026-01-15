import React, { use } from 'react'
import { useState } from 'react'

export default function UseState09() {
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState(null);

    const handleSearchClick = () => {
        let found = null;

        //1
        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i];
            let name = comment.author;
            if (name === author) {
                setComment(comment)
            }
        }

        //2
        // found = comments.find((comment) => { return comment.author === author }).title
        // setComment(found);

        // //3
        // found = comments.filter((comment) => {
        //     return comment.author === author;
        // });

        // setComment(found.length > 0 ? found : null);

        console.log(comment)
    };

    const comments = [
        { author: "홍길동", title: "배송빨라요" },
        { author: "김길동", title: "배송느려요" },
        { author: "이길동", title: "리뷰" },
        { author: "박길동", title: "상품" },
        { author: "최길동", title: "코멘트" },
    ];

    return (
        <div>
            <h1>리뷰 검색(작성자)</h1>
            <input
                type="text"
                value={author}
                placeholder='작성자 이름을 입력하세요'
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button onClick={handleSearchClick}>검색하기</button>
            <h2>
                {!!comment ? comment.title : "해당 작성자의 글을 찾을 수 없습니다."}
            </h2>
        </div>
    )
}
