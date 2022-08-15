import React from 'react'
import styled from "styled-components"


const Container = styled.div `
    display: flex;
    gap: 10px ;
    margin: 30px;



` ;

const Avatar = styled.img ` 
    width: 50px;
    height: 50px;
    border-raduis: 50%;
` ;


const Details = styled.div ` 
    display: flex;
    gap: 10px ;
    flex-direction: column;

` ;

const Name = styled.span ` 
    font-size: 13px;
    font-weight: 500;
` ;

const Date = styled.span ` 
    font-size: 12px;
    font-weight: 400;
    margin-left: 5px;
` ;

const Text = styled.div ` 
font-size: 14px;
` ;

const Comment = () => {
  return (
    <Container>
        <Avatar/>
        <Details>
            <Name>
                Alaa rahmouni <Date> 1 day ago </Date>
            </Name>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio sed facere praesentium eveniet fugit est cum necessitatibus sit corrupti quibusdam alias minima, quas dolores illum pariatur incidunt temporibus nisi.
            </Text>
        </Details>
    </Container>
  )
}

export default Comment