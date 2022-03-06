import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import './Calendar.css';

//calendar 레이아웃 컴포넌트
// Daypicker를 import

    // 요일 바꾸기 => 이렇게 바꾸면 요일 따라 날짜 이동을 안함. 요일만 바뀜.
    const WEEKDAYS_SHORT = ['S','M', 'T', 'W', 'T', 'F', 'S'];

    // Change format Day with Leading zero

    const lunch = {
        25: ['대리님과 점심'],
        28: ['멘토님과 상담'],
    };
    
    function renderDay(day) {
        const date = day.getDate();
        const cellStyle = {
        height: 50,
        width: 100,
        position: 'relative',
        };
        return (
            <div style={cellStyle}>
            <div>{date}</div>
            {lunch[date] &&
                lunch[date].map((name, i) => (
                <LunchdayStyled key={i}>{name}</LunchdayStyled>
                ))}
            </div>
        );
    }


const Calendar = () => {

    return(
        <div class='Container'>
            <CalendarBox>
                <DayPicker 
                    weekdaysShort={WEEKDAYS_SHORT}  
                    showOutsideDays    // 이전/다음 날짜 보이기
                    canChangeMonth={false}   // 버튼 제거
                    className="Birthdays"
                    renderDay={renderDay}
                />
            </CalendarBox>
        </div>
)
};

export default Calendar;


const CalendarBox = styled.div`
    background-color: white;
`

const LunchdayStyled = styled.div`
    background-color: #FFAF66;
    font-Size: 16px;
    font-weight: bold;
    color: white;
    text-Align: left;
    width: 138.84px;
    position: absolute;
`