import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
//React Router
// 설치: npm install react-router-dom
// 원래: URL을 바꾸면? get요청
// // 라우터 라이브러리: URL을 바꾸면? 컴포넌트 호출

export default function Router01() {
  //라우팅만 하는 컴포넌트
  return (
    /*
            BrowserRouter : 리액트 라우터 최상위 컴포넌트
            - 이 컴포넌트 내부에서만 url라우팅(Link,Route)이 가능
            - url이 변경될 때 브라우저의 기본 작동을 막고 리액트 방식(컴포너트 호출)으로 작동하게 함

            Routes: 여러 Route들을 그룹화하는 컨테이너
            - if-else if문
            Route: URL경로와 컴포넌트를 매칭  
            path: url 경로
            element: 해당경로에서 호출할 컴포넌트
            */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/*" element={<UserRouter />} />
        {/* path/경로/* 하위 경로는 하위 라우터에게 위임 */}
        <Route path="/shop/*" element={<ShopRouter />} />
        {/* path="/*" : 정의되지 않은 모든 경로*/}
        <Route path="/*" element={<h1>에러페이지</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

function ShopRouter() {
  // 하위 라우터
  // 하위 라우터에서 /shop/* 들어온 요청 처리
  // 여기서 path는 products or cart이지
  // /shop/products or /shop/cart가 아님!!
  // 이미 상위에서 /shop까지는 처리했기 때문
  return (
    <div>
      <h1>쇼핑 영역입니다</h1>
      <Routes>
        <Route path="products" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

function UserRouter() {
  // 권한검사 -> 토큰검사
  // 1. accessToken이 있으면 -> 허용
  // 2. accessToken이 없으면 -> 로그인페이지
  if (!accessToken) {
    return <h1>로그인페이지 컴포넌트</h1>;
  }
  // 3. accessToken이 만료? -> 재요청 (refresh)

  return (
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

function MainPage() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <nav>
        {/* a태그 : 페이지 전체가 새로고침, 상태가 초기화됨 */}
        {/* 상태를 초기화해야 하는 경우 ex)로그인->메인페이지 */}
        <a href="/user/profile">프로필</a>
        <a href="/user/contact">연락처</a>

        {/* LINK : 컴포넌트 교체만 일어남, 상태가 유지됨 */}
        <Link to="/user/profile">프로필</Link>
        <Link to="/user/contact">연락처</Link>
      </nav>
    </div>
  );
}

function ProfilePage() {
  // 리액트 라우터의 훅
  // 리턴된 것은 함수
  const navigate = useNavigate();

  const handleSaveProfile = () => {
    alert("프로필 저장이 완료되었습니다");

    //저장완료후 메인 페이지로 자동이동
    navigate("/"); //컴포넌트만 교체
  };

  const handleCancel = () => {
    /*
      라우터 대상들은 BrowserRouter에 감싸져 있음
      BrowserRouter는 함수호출 순서를 상태로 가지고 있다
      ->방문기록을 갖고 있다
      navigate(-1) -> 바로 직전 페이지로 이동 
      navigate(-2) -> 2단계 전 페이지로 이동 
    */
    navigate(-1);
  };

  return (
    <div>
      <h1>프로필 페이지</h1>
      <div>
        <button onClick={handleSaveProfile}>저장하고 메인으로</button>
        <button onClick={handleCancel}>취소(뒤로가기)</button>
      </div>
    </div>
  );
}

function ContactPage() {
  // 전송버튼을 누르면
  // confirm으로 전송하시겠습니까?
  // true면 전송완료! alert 후 메인으로 이동
  // 메인으로-> 라우팅되게 변경
  const navigate = useNavigate();
  const handleSend = () => {
    if (confirm("전송하시겠습니까?")) {
      alert("전송완료!");
      navigate("/");
    }
  };

  return (
    <div>
      <h1 href="/user/contact">연락처 페이지</h1>
      <button onClick={handleSend}>전송</button>
      <Link to="/">메인으로</Link>
    </div>
  );
}

function ProductPage() {
  return (
    <div>
      <h1>상품목록</h1>
      <p>입고예정</p>
      <Link to="/shop/cart">장바구니로 이동</Link>
    </div>
  );
}

function CartPage() {
  return (
    <div>
      <h1>장바구니</h1>
      <p>상품 확인하세요</p>
      <Link to="/shop/products">상품목록으로 이동</Link>
    </div>
  );
}
