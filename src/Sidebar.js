import React from 'react';
import DayPicker from 'react-day-picker';
import Button from './Button';
import {FaArrowLeft} from 'react-icons/fa';
import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import './Calendar.css';


const Sidebar = () => {

    return(
        <SidebarContainer>
           <SidebarToday>사이드바 오늘 날짜</SidebarToday>       {/* 데이피커에서 가져오기 */}
            <RegisterBox>
                <Styledinput type='text' placeholder='TODO'></Styledinput>
                <Styledinput type='text' placeholder='Description'></Styledinput>
                <Styledinput type='text'></Styledinput>
                <Button>Register</Button>
            </RegisterBox>
            <RegitsterDetail>
                <FaArrowLeft />
                <TodoText>대리님과의 점심 / 정자동 카페거리 </TodoText> {/* 텍스트 받아 오는 곳*/}
                <ButtonBox>
                    <Button>Modify</Button>
                </ButtonBox>
            </RegitsterDetail>
            <ResgitsterInput>
                <Styledinput type='text' placeholder='할 일 이름'></Styledinput>
                <Styledinput type='text' placeholder='할 일 설명'></Styledinput>
                <ButtonBox>
                    <Button>Modify</Button>
                    <Button>Cancle</Button>
                </ButtonBox>
            </ResgitsterInput>
        </SidebarContainer>
)
};


export default Sidebar;


const SidebarContainer = styled.div`
width: 23.5625rem;
height: 61.0625rem;
background-color: #E2E2E2;
display: flex;
position: relative;
flex-wrap: wrap;
justify-content: center;
left:15px;
`;



const SidebarToday = styled.div`
position: absolute;
  width: 316px;
  height: 54px;
  top:26px;
  buttom:897px;
  left: 33px;
  margin-bottom:20px;
`

const RegisterBox = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 352px;
height: 219px;
left: 10px;
top: 85px;
buttom:673px;
background: #F2F2F2;
border-radius: 9.4498px;
`

const Styledinput = styled.input`
 width : 315.89px;
 height: 36.05px;
 background-color:#E0E0E0;
 margin-bottom: 12.57px;
 border: none;
 border-radius: 5px;
 padding-left: 19px;
`


const RegitsterDetail = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
width: 332px;
height: 142px;
left: 10px;
top: 347px;
buttom:488px;
background: #F2F2F2;
border-radius: 9.4498px;
padding: 10px;
`

const ButtonBox = styled.div`
display: flex;
align-items: center;
justify-content: center;

`


const ResgitsterInput = styled.div`

position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 352px;
height: 229px;
left: 10px;
top: 536px;
buttom:212px;
background: #F2F2F2;
border-radius: 9.4498px;
`

const TodoText = styled.div`
width : 315.89px;
 height: 36.05px;
 text-align: center;

`

