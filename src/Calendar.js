import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import './Calendar.css';


//calendar 레이아웃 컴포넌트
// Daypicker를 import

const Calendar = () => {

    // 이전/다음 날짜 보이기
    // 버튼 제거 
    // 요일 바꾸기
    const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    // Change format Day with Leading zero
    const MyDate = new Date();


    return(
        <Container>
            <CalendarBox>
                <DayPicker 
                    weekdaysShort={WEEKDAYS_SHORT}
                    showOutsideDays
                    canChangeMonth={false} 
                    formatDay={MyDate}
                />
            </CalendarBox>
        </Container>
)
};

export default Calendar;

const Container = styled.div`
    with: 1499px;
`

const CalendarBox = styled.div`
    background-color: white;
`


