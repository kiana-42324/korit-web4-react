import React from 'react'
import Layout from './Layout'
import AuthManager from './AuthManager';


//Layout 태그 사이에 들어간 내용은 
//children 이라는 props로 전달됨
//children은 react에서 미리 정해둔 이름
//주로 레이아웃 css나 권한관리를 하는 바깥 레이어 만들 때 사용
export default function App05() {
    const isLogin = true;
    return (
        <AuthManager isLogin={isLogin}>
            <Layout>
                <h2>메인페이지</h2>
                <p>레이아웃이 적용될까요?</p>
            </Layout>
        </AuthManager>
    )
}
