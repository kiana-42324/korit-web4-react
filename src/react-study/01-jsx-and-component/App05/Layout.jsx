import React from 'react'

export default function Layout({children}) {
  return (
    <div style={{width:"600px", margin:"0 auto", backgroundColor:"#eee"}}>
        <header style={{borderBottom:"1px solid #ccc"}}>
            <h1>레이아웃 연습</h1>
        </header>
        <main style={{padding:"20px"}}>
            {children}
        </main>
    </div>
  )
}
