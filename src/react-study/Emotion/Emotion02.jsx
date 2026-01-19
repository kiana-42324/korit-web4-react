import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'

/**  @jsxImportSource @emotion/react*/

const cardStyle = (isActive) => css`
    width: ${isActive ? "220px" : "120px"};
    height: 220px;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${isActive? "#ddd":"#eee"};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
`;

const MovieCard = ({ movie, isActive, onClick }) => {
    const { title, year, description } = movie


    return (
        <div onClick={onClick} css={cardStyle(isActive)}>
            {/* <h4>영화제목</h4>
            <small>제작연도</small> */}
            {/* 영화 설명은 선택된 카드만 보이게 */}
            <h4>{title}</h4>
            <small>{year}</small>
            {isActive && <p>{description}</p>}
        </div>
    )
};

const MOVIES = [
    {
        id: 1,
        title: "인셉션",
        year: 2010,
        description: "영화"
    },
    {
        id: 2,
        title: "날씨의 아이",
        year: 2020,
        description: "애니메이션 영화"
    },
    {
        id: 3,
        title: "인터스텔라",
        year: 2030,
        description: "우주 영화"
    }
]

export default function Emotion02() {
    const [activeId, setActiveId] = useState(null);

    useEffect(()=>{
        //setInterval(()=>{},ms)
        //ms마다 함수를 실행
        //ms마다 setActiveId를 호출하여 조작하면
    },[])

    return (
        <div css={{display: "flex"}}>
            {MOVIES.map((movie) => {
                return <MovieCard
                    movie={movie}
                    key={movie.id}
                    isActive={activeId === movie.id}
                    onClick={() => setActiveId(activeId === movie.id ? null : movie.id)}
                />
            })}
        </div>
    )
}

