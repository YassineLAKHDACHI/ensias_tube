import styled from "styled-components" 
import Menu from './components/Menu'
import Navbar from "./components/Navbar";
import  React from 'react'; 
import Home from "./pages/Home"
import Video from "./pages/Video"


import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./pages/SignIn";

const Container = styled.div `
  display: flex;
` ;


const Main = styled.div `
  flex: 7;
  backgroound-color: #181818;
` ;
const Wrapper = styled.div `
  padding: 22px 96px ;

` ;

function App() {
  return (
    <Container>
      <BrowserRouter> 
        <Menu/>
        <Main>
          <Navbar/>
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="signin" element={<SignIn />} />
                <Route path="Video">
                  <Route path=":id" element={<Video/>} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>

        </Main>
      </BrowserRouter>
    </Container>

  );
}

export default App;
