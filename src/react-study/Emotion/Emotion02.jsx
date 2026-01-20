import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import Interstellar from '../../assets/Interstellar.webp'

// 1. src/assets 에 저장된 이미지 -> 빌드시 포함된다
// 2. public/assets 에 저장된 이미지 -> 정적이미지
// "/"로 접근할 수 있음

/**  @jsxImportSource @emotion/react*/

import { cardStyle, imageStyle, contentStyle, mainDiv } from "./Emotion02Styles";


const MovieCard = ({ movie, isActive, onClick }) => {
    const { title, year, description, imgUrl } = movie


    return (
        <div onClick={onClick} css={cardStyle(isActive)}>
            {/* <h4>영화제목</h4>
            <small>제작연도</small> */}
            {/* 영화 설명은 선택된 카드만 보이게 */}
            <img src={imgUrl} alt={title} css={imageStyle} />
            <div css={contentStyle}>
                <h4>{title}</h4>
                <small>{year}</small>
                {isActive && <p>{description}</p>}
            </div>
        </div>
    )
};

const MOVIES = [
    {
        id: 1,
        title: "인셉션",
        year: 2010,
        description: "상상의 경계가 무너진다.",
        imgUrl: "https://i.namu.wiki/i/FG2fN0uUSIMgzfAUWprYxsJTHn9u-aHuFOTejxOm05z2js709FUG04RxA_BAQU31JuZ4cpd5EfP2KKE3cLW6IBj0xtk9T916roMdSPv5OLNmJBwHfs5I1wPg9BrOe2Hx4F-QIjRsUZobp2lGbYBudg.webp"
    },
    {
        id: 2,
        title: "날씨의 아이",
        year: 2019,
        description: "이것은 나와 그녀만이 알고 있는, 세계의 비밀에 대한 이야기.",
        imgUrl: "https://i.namu.wiki/i/ke-qd1E1RIid_x7DlXADTnwhNmAXjJnC6ovmKlaXL4Xcv4EUtHD7cx0WmcAwtvxX4bTyevuoAOv7Hl3MCDVBK3N5Mamd3TjOSItLe9IRLMaYXIWnI87f8Hg0pdRdIN0J5W7-DD7hsUyNPL67X2SAGg.webp"
    },
    {
        id: 3,
        title: "인터스텔라",
        year: 2014,
        description: "우린 답을 찾을 것이다. 늘 그랬듯이.",
        imgUrl: Interstellar
    }
]

export default function Emotion02() {
    const [activeId, setActiveId] = useState(1);

    useEffect(() => {
        //setInterval(()=>{},ms)
        //ms마다 함수를 실행
        //ms마다 setActiveId를 호출하여 조작하면

        const intervalId = setInterval(() => {
            setActiveId((prev) => {
                if (prev === null) {
                    return MOVIES[0].id;
                }
                //find() -> 객체 return / findIndex() -> index(int)
                const currentIdx = MOVIES.findIndex((m) => prev === m.id);
                const nextIdx = currentIdx === (MOVIES.length - 1) ? 0 : currentIdx + 1;
                return MOVIES[nextIdx].id;
            })
        }, 3000);

        // setInterval, setTimeout 등 브라우저 api를 useEffect에서 사용한 경우 언마운트시 해제해줘야함
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div css={mainDiv}>
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

