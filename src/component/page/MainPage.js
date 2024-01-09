// 1. MainPage
// =>리액트 문법
import React from "react";
// =>리액트 라우터 덤 사용
//=>페이지간의 이동을 위해 리액트 라우터 덤을 사용함

// =>a
// - html에서의 기본태그
// - import 할 필요없이 사용함
// - 페이지 전체를 로드함> 전체 페이지를 로드하므로 속도 저하있음
// - 리액트에서 외부 프로젝트와의 연결을 위해서만 사용함
// - a태그를 사용하면 useRef, useState 훅이란 개념을 사용할 수 없음
// - useRef, useState등에서 수정을 해둔 변수,상태값을 유지할 수 없음
// - 라우터 사용에 방해가 됨

// =>Link
// - react-router-dom 확장을 통해 포함된 기능
// - url에 영향을 주며 필요한 부분만 로드함
// - useRef, useState등을 유지하면서 속도저하없이 화면의 전환효과를 줄 수 있음
// - url도 필요한 부분만 건드려서 로드함
// - 클릭시 바로 이동하게 하기위한 간단한 동작시 주로사용함

// =>useNavigate
// - react-router-dom 확장을 통해 포함된 기능
// - url에 영향을 주며 필요한 부분만 로드함
// - useRef, useState등을 유지하면서 속도저하없이 화면의 전환효과를 줄 수 있음
// - url도 필요한 부분만 건드려서 로드함
// - 차이점 : 이동 후 추가적인 동작이 필요할때 사용함
// - 특정이벤트가 실행되었을때 이동하거나, 추가적인 기능이 필요한 경우
// - 필요한내용을 모두 채워야 이동을 하거나, 상세페이지 열기를 위해서 상품의정보를 추가로 로드할때

// => 클래스 컴포넌트에서는 생명주기 함수 
//    =>render함수
//    - return 되는 html형식의 코드를 화면에 그려주는 함수로
        //화면에 내용이 변경되어야 할 시점에 자동 호출되는 함수
//    =>constructor함수
//    - 생명주기 함수에서 가장 먼저 실행되는 함수, 초기화 영역작업, 처음에 한번만 호출   
//    =>getDerrivedStateFromProps 함수
//    - constructor함수에서 전달받은 props를 state로 변경함
//    - constructor함수 다음으로 호출
//    =>compoentDidMount함수
//    - 작성된 함수들 중에 가장 마지막으로 실행
//    - render함수가 코드를 화면에 그려준 후 실행됨
//    =>shouldComponentUpdate함수
//    - Component의 변경과정
//    - 변경,props,state의 변경시 사용

//    함수형 컴포넌트에서 생명주기 함수:(훅)
//    =>기존 존재하는 기능에 끼어들어서 같이 수행되는 형식
//    =>훅은 모두 함수명 앞에 use-가 접두어같은형식으로 시작됨
//    =>훅이 수행하는 기능에 따라서 이름을 설정하게 되어있음

//    ex=>가장많이 사용되는 useState는 함수형 컴포넌트 안에서 state를 사용하고 싶을때 지정하는 훅
// const [변수명,set함수명]=useState(초기값)
// function Counter(props){
//     const [count,setCount]=useState(0);
//     return(
//         <div>
//             <p>총 {count}번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     )
// } 

//    ex=> useEffect(이펙트함수,의존성배열) 사이트 이팩트,
//    일반적으로 사이트이펙트는 부작용을 의미. 개발자가 의도치 못한 코드가 실행되어서 버그발생 시 나타나는 이펙트를 의미함.
//    ->리액트에서" useEffect "는 서버에서 데이터를 받아오거나/ 수동으로 Dom을 변경하는 것을 이팩트라 명시함
//    -클래스 컴포넌트 함수들 중에 componentDidMount,componentDidUpdate,componentWillUnmount 세가지의 기능을 한번에 지정할 수 잇는 "훅" 명령임
//    -의존성 배열은 생략가능함
//    -이펙트가 의존하고 있는 배열값으로 배열안에 변수중 하나라도 변경이 되면 이펙트함수가 실행됨
//    -생략시 컴포넌트가 업테디트 될때마다 호출

// function Counter(props){
//     const [count,setCount]=useState(0);
//     useEffect(()=>{
//         document.title=`총${count}번 클릭함`
//     })
//     //=>브라우저에서 제공한 API를 사용해서 document의 title을 업데이트함
//     //=>document의 title은 브라우저에서 페이지를 열었을때 창에 표시되는 문자열임(크롬 탭에있는 제목)
//     return(
//         <div>
//             <p>총 {count}번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     )
// } 
import { useNavigate } from "react-router-dom";
// =>스타일 컴포넌트
import styled from "styled-components";
// =>PostList 컴포넌트, Button컴포넌트
import PostList from "../list/PostList";
//=>글목록을 표시
import Button from "../ui/Button";
//=>글 작성 페이지로 이동
import data from "../../data.json";
// =>임의설정 데이터(data.json)

const Wrapper=styled.div`
    padding:16px;
    width:calc(100% - 35px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Container=styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child){
        margin-bottom:16px;
    }
`;

// =>함수형 컴포넌트
function MainPage(props){
    const navigate=useNavigate();

    return(
        <Wrapper>
            <Container>
                <Button title="글 작성하기" onClick={()=>{
                    navigate('/post-write');
                    //경로패스: 사이트에 접속하면 기본적으로 제공되는 url에서 파일명이 덧붙는 경로를 패스라고 부름
                }}/>
                <PostList posts={data} onClickItem={(item)=>{
                    navigate(`/post/${item.id}`);
                }}/>
            </Container>
        </Wrapper>
    );
}
export default MainPage;