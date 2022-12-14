import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Container = styled.div ` 
  width: 360px;
  margin-bottom: 45px ;
  cursor: pointer ;

`;
const Image = styled.div ` 
  width: 100%;
  height: 202px ;
  background-color : #999;

`;
const Details = styled.div ` 
  display: flex;
  margin-top: 16px;
  gap: 12px;

`;

const ChannelImage = styled.img  ` 
  width: 36px;
  height: 36px;
  border-radius: 50% ;
  background-color: #999;

` ;

const Texts = styled.div  ` ` ;

const Title = styled.h1  ` 
  font-size: 16px;
  font-weight: 500;

` ;

const ChannelName = styled.h2  ` 
  font-size: 14px ;
  margin: 9px 0px;

` ;

const Info = styled.div  ` 
  font-size: 14px;
` ;

const Card = () => {
  return (
    <Link to="/Video/test"  style={{textDecoration:"none"}}>
    <Container>
        <Image src="https://www.youtube.com/embed/k3Vfj-e1Ma4" />
        <Details>
          <ChannelImage>
          
          </ChannelImage>
        </Details>
    </Container>
    </Link>
  )
}

export default Card