import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// js로 실제 dom 요소들이 렌더링된다.
// main.jsx가 진입점이 된다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



//github에 올라갈 때는 node_modules는 올라가지 않음
//타 pc에서 실행할 때는 npm install (package.json에 따라 설치됨)