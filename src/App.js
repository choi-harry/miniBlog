import React from 'react';
import styled from 'styled-components';
import MainPage from './component/page/MainPage';
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWritePage';

import { BrowserRouter, Routes, Route } from "react-router-dom";
//=>리액트를 위한 라우팅 라이브러리
//=>각 경로에 따라 다른 컴포넌트를 보여주도록 만들어져 있음
//=>웹사이트에서 라우팅은 사용자가 원하는 경로로 보내는 과정
//=>라우팅을 쉽게 구현할 수 있도록 리액트 컴포넌트 형태로 작성이 되도록하는 라이브러리
//=>연결부분작업을 할때, react-router-dom을 이용해서 라우팅을 할 수 있게하는 컴포넌트 총 3가지
//= 1. BrowserRouter 컴포넌트
//     - 웹브라우저에서 react-router를 사용해서 라우팅을 할 수 있도록 해줌
//     - 웹브라우저에서 history영역 기능을 이용해 경로를 탐색할 수 있게해줌
//     - 부모영역으로 사용함(Routes의 부모)
//= 2. Routes 컴포넌트
//     - 실제로 라우팅경로를 구성할 수 있게하는 컴포넌트
//     - Route들의 상위컴포넌트
//     - Routes는 여러개의 route를 children으로 가짐
//= 3. Route 컴포넌트
//     - 실제로 라우팅경로를 구성할 수 있게하는 컴포넌트
//     - Routes의 하위 컴포넌트로 path(경로), element(요소)라는 props를 가짐
//     - element:경로가 일치할 경우 렌더링할 리액트요소를 의미. 
//사용자가 주소창에 새로운경로를 입력하거나 웹사이트 내에서 경로이동이 일어나게되면
//Routes 컴포넌트는 하위 Route 컴포넌트 중에서 현재 경로가 가장일치하는 경로를 찾아 해당하는 element를 보여줌
const MainTitle=styled.p`
  fontsize:24px;
  font-weight:bold;
  text-align:center;
`;

function App(props) {
  return (
  <BrowserRouter>
      <MainTitle>블로그 제목</MainTitle>
      <Routes>
        <Route index element={<MainPage/>}/>
        {/* =>path없이 index라는 props를 가진 route로 라우팅됨/ 메인 첫번째 페이지로 설정 */}
        <Route path='post-write' element={<PostWritePage/>}/>
        {/* =>하위 컴포넌트에서 path로 설정한 경로를  route의 path로 설정해서 해당 element 컴포넌트로 이동시킴 */}
        <Route path='post/:postId' element={<PostViewPage/>}/>
        {/* =>:postId는 동적으로 변하는 파라미터를 위한 값, 경로에 :을 사용하고 Id를 입력하면 실제 컴포넌트에서\
        useParams()훅을 사용해 아이디를 해당값으로 가지고 옴 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
