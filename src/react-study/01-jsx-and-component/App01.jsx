//JSX? JS의 확장 문법
//HTML태그처럼 보이지만, 실제로는 JS코드다

//컴포넌트-JSX를 리턴하는 함수
function App01() {
    console.log("App01 호출되었습니다.");
    const title = "React 수업 시작";
    const content = "jsx가 뭔지 알아봅시다";
    const name = "리액트";
    const myTag = <h1>{name}</h1>
    //jsx 규칙
    //return되는 것은 반드시 하나의 태그
    //모든 태그는 닫혀야 한다.
    //태그 사이 혹은 안에 js코드 삽입 시 중괄호{} 이용

    return(
        //태그가 JS코드로 변환
        //리턴하는 것을 실제 html이 아니다.
        <div>
            {myTag}
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

//export: 외부에서 접근하게 하겠다
//default: 해당 파일에서 대표로 내보낼 값 하나
export default App01;