import React from "react";
import { BrowserRouter, Routes, Route, useParams,Link } from "react-router-dom";

// useParam
// url 경로에서 값을 추출하는 훅(hook)

export default function Router02() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserDetail />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

// url에 정보를 담는경우
// localhost: 5173/user/3
// -> id가 3벅인 사용자 조회
function UserDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>사용자 정보</h1>
      <p>사용자 ID: {id}</p>
      <Link to="/">목록으로</Link>
    </div>
  );
}
