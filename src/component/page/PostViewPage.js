// 2.PostViewPage
// =>리액트 문법
import React,{useState} from "react";
// =>리액트 라우터 덤 사용
import { useNavigate, useParams } from "react-router-dom";
// =>스타일 컴포넌트
import styled from "styled-components";
// =>CommentList 컴포넌트, Button컴포넌트, TextInput컴포넌트
import CommentList from "../list/CommentList";
//=>글을 볼 수 있도록 해주는 컴포넌트
import Button from "../ui/Button";
//=>버튼 컴포넌트
import TextInput from "../ui/TextInput";
//=>텍스트작성이 가능하게 하는 컴포넌트
//=>실제 삽입은 현재로는 안됨

// =>임의설정 데이터(data.json)
import data from "../../data.json";

const Wrapper = styled.div`
    padding:16px;
    width:calc(100% - 35px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Container = styled.div`
    width: 100%;
    max-width:720px;
    :not(:last-child){
        margin-bottom:16px;
    }
`;
const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid gray;
    border-radius:5px;
`;
const TitleText = styled.p`
    font-size:28px;
    font-weight:500;
`;
const ContentText = styled.p`
    font-size:20px;
    lign-height:32px
    write-space:pre-wrap;
`;
const CommentLabel = styled.p`
    font-size:16px;
    font-weight:500;    
`;



// =>함수형 컴포넌트
function PostViewPage(props) {
    // 1.useNavigate 사용명시
    const navigate = useNavigate();
    // 2.url형식의 매개변수를 전달받은 글의 아이디를 이용함을 명시
    const { postId } = useParams();
    // 3.전체 데이터에서 해당되는 글을 찾기
    //=>find함수 사용
    const post = data.find((item) => {
        return item.id == postId;
    })
    // 4. 함수형 컴포넌트에서 state사용
    const [comment, setComment] = useState(' ');
    //초기값은 없는 state
    return (
        //=>전체부모 스타일태그 Wrapper
        //=>박스형 부모 스타일태그 Container
        //=>버튼 컴포넌트(title,onclick,props 전달)
        //=>작성된 글의 제목과 내용영역의 부모스타일 태그 Postcontainer
        //=>글 제목 스타일 컴포넌트TitleText
        // - 내용 post의 title화면 출력
        //=>찾은 글의 내용 스타일컴포넌트 ContentText
        // - 내용 post의 content화면 출력
        //=>CommentLable 스타일 컴포넌트
        //=>CommentList 컴포넌트
        // -comments의 props로 post의 comments를 넘겨줌
        //=>댓글 작성을 위한 UI
        // - TextInput 컴포넌트 value값,onchange 이벤트 넘겨줌
        // - Button 컴포넌트 title,onClick이벤트 넘겨줌
        <Wrapper>
            <Container>
                <Button title="뒤로가기" onClick={()=>{
                    navigate('/');
                    //href # 과 같음
                }}/>
                <PostContainer>
                    <TitleText>
                        {post.title}
                    </TitleText>
                    <ContentText>
                        {post.content}
                    </ContentText>
                </PostContainer>
                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments}></CommentList>
                <TextInput height={40} value={comment} onChange={(event)=>{
                    //ui>textinput 컴포넌트에서 px높이값을 받아올것 이기 때문에, 초기값으로 내가원하는 높이값의 숫자를 입력
                    setComment(event.target.value);
                }}/>
                <Button title='댓글 남기기' onClick={()=>{
                    navigate('/')
                }}/>
            </Container>
        </Wrapper>
    );
}
export default PostViewPage;