// 3.PostWritePage
// =>리액트 문법
import React,{useState} from "react";
// =>리액트 라우터 덤 사용
import { useNavigate } from "react-router-dom"; 
// =>스타일 컴포넌트
import styled from "styled-components";
// =>Button컴포넌트, TextInput컴포넌트
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

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
function PostWritePage(props){
    const navigate=useNavigate();
    const [title,setTitle]=useState(' ');
    //=>글의 제목을 위한 state
    const [content,setContent]=useState(' ');
    //=>글의 내용을 위한 state
    //=>실제로 사용하는 부분은 Textinput으로 동일함
    //=>제목,내용은 각자 입력을 받아야함
    return(
        <Wrapper>
            <Container>
                <TextInput height={30} value={title} onChange={(event)=>{
                    setTitle(event.target.value);
                }}></TextInput>
                <TextInput height={500} value={content} onChange={(event)=>{
                    setContent(event.target.value);
                }}></TextInput>
                <Button title='글 작성하기' onClick={
                    ()=>{navigate('/');}
                    //인덱스 메인페이지로 연결되는 임시링크 기능
                }/>
            </Container>
        </Wrapper>
    );
}
export default PostWritePage;