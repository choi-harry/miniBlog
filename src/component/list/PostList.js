// - PostListItem의 상위 컴포넌트
// - 리액트 문법,styled문법
// - 함수형 컴포넌트 
// =>post.onClick을 매개변수로 전달
import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
:not(:last-child){
    margin-bottom:16px;
}
`
// not(선택자)=>선택자가 아니면
// 태그의 선택자 추가

function PostList(props){
    const {posts,onClickItem}=props;
    // =>PostList컴포넌트의 props로 받은 posts 안에는 post객체를 넘겨받는다
    // => posts의 배열값으로  인식 map함수를 활용해서 post객체에 포함되는 PostListItem컴포넌트를 읽어옴
    return(
        <Wrapper>
            {posts && posts.map((post,index)=>{
                //=>map함수를 사용글의 갯수만큼 PostListItem 컴포넌트를 만들기 위함
                return(
                    <PostListItem key={post.id} post={post} onClick={
                        ()=>{
                            onClickItem(post);
                        }
                    }/>
                )
            })}
        </Wrapper>
    );
}
export default PostList;