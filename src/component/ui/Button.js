import React from "react";
import styled from "styled-components";

// const 삽입태그형식명(변수)=styled.태그명`
// css 속성명:속성값;
// color:${변수명};
// color:${변수명=>조건?참:거짓};
// color:${a=>dark? "black":"yellow"};
// `;
// const Title=styled.h1`
// font-size:40px;
// color:red;
// text-align:center;
// `

// function Button(){
//     return(
//         <div>
//             <Title>내용</Title>
//         </div>
//     );
// }

//2번째 예제

// const But = styled.button`
// color:${props => props.dark ? "yellow" : "dark"};
// background:${props => props.dark ? "black" : "yellow"};
// border:1px solid black;
// `;
// color:${변수명=>조건?참:거짓}; 다크색상이면 노랑색으로/다크색상이 아니면 다크색으로 변경!
const But=styled.button`
padding: 8px 16px;
font-size: 17px;
border:1px solid gray;
border-radios:8px;
cusor:pointer;
`;

function Button(props) {
    //하위 컴포넌트
    //상위 컴포넌트의 props값을 할당 받아서 사용할때의 정의방법
    //const {props변수명 삽입,props변수명 삽입}=props;
    const {title,onClick}=props;
    return (
        // <div>
        //     <But>기본</But>
        //     <But dark>변경</But>
        // </div>
     <div>
            <But onClick={onClick}>{title||"button"}</But>
            {/* =>Button 컴포넌트에서 props로 title이 버튼의 내용으로 표시되게 함
            =>onClick은 but의 onClick에 넣어 이벤트를 상위 컴포넌트에서 받을 수 있도록 함
            =>표기법중(조건부 랜더링)
            -조건에 따라서 보여지는 화면이 다를때 표기하는 방법
            - 회원과 비회원의 차이 */}
            {/* function User(props){
                return <h1>회원입니다</h1>
            }
            function Guest(props){
                return <h1>비회원입니다</h1>
            }
            function PageV(props){
                const isLogIn=props.isLogIn;
                if(isLogIn){
                    return <User/>
                }      
                return <Guest/>
            } */}
            {/* 인라인조건 표기법중
            =>인라인 if
            {title 논리연산자(&&,||)}
            && 참,참=>참값
            || 거짓,거짓=>거짓값
            =>if가 실제로 삽입되는 것은 아님
            =>결과가 정해져 있는 논리연산에서 
            굳이 불필요한 연산을 하지 않도록 하기위해 사용
            &&(and 연산자)
            =>true && ex ->ex
            -조건문이 참이면 ex가 결과값
            =>false && ex->false
            -조건문이 거짓이면 false가 결과값
            ||(or 연산자)
            =>항상 참일때 사용함

            =>인라인 if-else
            =>{조건문?참:거짓} =>삼항 연산자 표기로 작성
             */}

</div>
       
    );
}
export default Button;