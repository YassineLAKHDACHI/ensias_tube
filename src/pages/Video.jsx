import React from 'react'
import styled from 'styled-components'
import Iframe from 'react-iframe'
import Comments from '../components/Comments';
import Comment from '../components/Comment';
import Card from '../components/Card';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const Container = styled.div `
    display: flex;
    gap: 24px;
`;

const Content = styled.div `
    flex: 5;
    
`;

const VideoWrapper = styled.div `
    
    
`;

const Title = styled.h1 `
    font-size:  18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px; 
`;

const Details = styled.div `
    display: flex;
    align-items: center ;
    justify-content: space-between;
`;

const Info = styled.span `
       
`;

const Buttons = styled.div `
      display: flex;
      gap: 20px; 
`;

const Button = styled.div `
     display: flex;
     align-items: center;
     gap: 5px;  
     cursor: pointer;

`;

const Hr = styled.hr `
    margin: 15px 0;
    border: 0.5px solid ;
`;

const Recommendation = styled.div `
    flex: 2;
`;

const Channel = styled.div `
    display: flex;
    justify-content: space-between; 
`;

const ChannelInfo = styled.div `
    display: flex;
    gap: 20px;
`;

const Image = styled.img `
    width: 50px;
    height: 50px;
    border-raduis: 50%;
`;

const ChannelDetail  = styled.div `
    display: flex;
    flex-direction: column;
`;

const ChannelName  = styled.span `
    font-weight: 500;
`;

const ChannelCounter  = styled.span `
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 12px;
`;

const Description  = styled.p `
    font-size: 14px;
`;

const Subscribe = styled.button `
    background-color: #cc1a00 ;
    font-weight: 500;
    color: white;
    border: none;
    border-raduis: 3px;
    height: max-content;
    padding: 10px 20px ;
    cursor: pointer;
`;

const Video = () => {
    return(
        <Container>
            <Content>
                <VideoWrapper>
                <iframe 
                     width="100%"
                     height="720"
                     src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                     title="Youtube Video Player"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen
                ></iframe>
                  
                </VideoWrapper>
                <Title>Video test</Title>
                <Details>
                    <Info>7,948,154 views . Jun 22, 2022</Info>
                    <Buttons>
                        <Button><ThumbUpOffAltIcon/>101</Button>
                        <Button><ThumbDownOffAltIcon/>Dislike</Button>
                        <Button><ReplyIcon/>Share</Button>
                        <Button><PlaylistAddIcon/>Save</Button>
                    </Buttons>
                </Details>
                <Hr/>
                <Channel>
                    <ChannelInfo>
                        <Image src=""/>
                        <ChannelDetail>
                            <ChannelName>ENSIASTube</ChannelName>
                            <ChannelCounter>5K subscribers</ChannelCounter>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi reiciendis ipsam temporibus nostrum perferendis dicta corrupti minus. Voluptates ipsam doloremque laborum quidem rerum minima numquam? Vel expedita nemo dignissimos!</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr/>
                <Comments />
                  
            </Content>
            <Recommendation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommendation>
        </Container>
    )
}

export default Video