import styled from "styled-components" 
import Menu from './components/Menu'
import Navbar from "./components/Navbar";
import React from 'react'; 
const Container = styled.div `
  display: flex;
` ;


const Main = styled.div `
  flex: 7;
  backgroound-color: #181818;
` ;
const Wrapper = styled.div `` ;

function App() {
  return (
    <Container>
      <Menu/>
      <Main>
        <Navbar/>
        <Wrapper>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </Wrapper>

      </Main>
    </Container>

  );
}

export default App;
