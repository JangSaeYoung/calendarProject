import './App.css';
import Calendar from'./Calendar';
import styled from 'styled-components';


function App() {
  return (
  <Container>
    <Sidebar>사이드바 자리</Sidebar>
    <CalContainer>
      <Calendar />
    </CalContainer>
  </Container>
  );
}

export default App;

// 전체 기본 화면
const Container = styled.div` 
display: flex;
`;

const Sidebar = styled.div`
width: 377px;
height: 977px;
background-color: #E2E2E2;
`;

const CalContainer= styled.div`
// padding: 157px 82px;
`