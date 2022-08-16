import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Container = styled.div `
    display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: black;
`;

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid  ;
    padding: 20px 50px ;
    gap: 10px ;
    
    
`;

const Title = styled.h1 `
    font-size: 24px;
` ;

const SubTitle = styled.h2 ` 
    font-size: 24px;
    font-weight: 300;
` ;

const Input = styled.input ` 
    border:  1px solid ;
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100% ; 
` ;

const Button = styled.button ` 
    border:  none ;
    border-radius: 3px;
    padding: 10px 20px;
    font-weigth: 500;
    cursor: pointer;
` ;

const More = styled.div ` 
    display: flex;
    margin-top: 10px; 
    font-size: 12px;
` ;

const SLinks = styled.div ` 
    margin-left: 50px;
` ;

const SLink = styled.span `
    margin-left: 30px;
` ;


const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle> to continue to ENSIASTube</SubTitle>
            <Input placeholder='username'/>
            <Input type="password" placeholder="password" />
            <Button>Sign in</Button>
            <Title>or </Title>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input type="password" placeholder="password" />
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(USA)
            <SLinks>
                <SLink>Help</SLink>
                <SLink>Privacy</SLink>
                <SLink>Terms</SLink>
            </SLinks>

        </More>
    </Container>
  )
}

export default SignIn ;