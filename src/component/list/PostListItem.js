//리액트문법,styled문법
import React from "react";
import styled from "styled-components";


const Wrapper=styled.div`
width:calc(100% - 35px);
height: ;
padding:16px;
display:flex;
flex-dirrction:column;
align-items:center;
justify-content:center;
border:1px solid gray;
border-radius:5px;
cursor:pointer;
background:yellow;
:hover{
    background:lightgray;
}
`
//=>div 태그에 추가선택자 사용
const TitleText=styled.p`
    font-size:20px;
    font-weight:500;
`

//함수형 컴포넌트
//=>글의 제목영역(제목만 표시함)
function PostListItem(props){
    //post,onClick을 매개변수로 전달
    const {post,onClick}=props;

    return(
        <Wrapper onClick={onClick}>
            <TitleText>
                {post.title}
                {/* =>props로 받은 post객체에 들어있는 title 문자열을 표시함 */}
            </TitleText>
        </Wrapper>
    )
}

export default PostListItem;