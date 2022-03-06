import './App.css';
import Calendar from'./Calendar';
import Sidebar from './Sidebar';
import styled from 'styled-components';


function App() {
  return (
  <Container>
      <Sidebar />
      <Calendar />
  </Container>
  );
}

export default App;

// 전체 기본 화면
const Container = styled.div` 
margin: 0;
display: flex;
justify-content: center;
align-items: center;
`