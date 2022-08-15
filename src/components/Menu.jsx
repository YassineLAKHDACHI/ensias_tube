import * as React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Container = styled.div `
    flex:1;
    background-color: #202020;
    height:120vh;
    color: white;
    font-size: 14px;
    position: sticky ;
    top: 0;
`

const Wrapper = styled.div `
    padding: 18px 26px ;
`
const Logo = styled.div `
    display:flex ;
    align-items: center ;
    gap: 5px ;
    font-weight: bold;
    margin-buttom: 25px;
`;

const Img = styled.img `
    height: 25px ;
`
const Item = styled.div `
    display:flex ;
    align-item : center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
`
const Hr = styled.hr `
    margin: 15px 0px;
    border: 0.5px solid #373737 ;
`

const Login = styled.div ``
const Button = styled.button `
    padding: 5px 15px;
    background-color: transparent ;
    border: 1px solid #3ea6ff ;
    color: #3ea6ff ;
    border-raduis: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer ;
    display: flex ;
    align-items: center ;
    gap: 5px;
`  

const Title = styled.h2 `
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-buttom: 20px;

`


const Menu = () => {
    return ( 
    <Container>
        <Wrapper>
        <Link to="/"  style={{textDecoration:"none" , color:"inherit"}}>
            <Logo>
                {/*<Img src={ENSIASTube}/>*/}
                <YouTubeIcon/>
                ENSIASTube
            </Logo>
        </Link>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            <Item>
                <ExploreIcon/>
                Explore
            </Item>
            <Item>
                <SubscriptionsIcon/>
                Subscriptions
            </Item>
            <Hr/>
            <Item>
                <VideoLibraryIcon/>
                Library
            </Item>
            <Item>
                <HistoryIcon/>
                History
            </Item>
            <Hr/>
            <Login>
                Sign in to like videos, comment, and subscribe.
                <Button><AccountCircleIcon/> SIGN IN </Button>
            </Login>
            <Hr />
            <Title>BEST OF ENSIAS</Title>
            <Item>
                <LibraryMusicIcon/>
                Music
            </Item>
            <Item>
                <SportsBasketballIcon/>
                Sports
            </Item>
            <Item>
                <SportsEsportsIcon/>
                Gaming
            </Item>
            <Item>
                <MovieCreationIcon/>
                Movies
            </Item>
            <Item>
                <NewspaperIcon/>
                News
            </Item>
            <Item>
                <LiveTvIcon/>
                Live
            </Item>
            <Hr/>
            <Item>
                <SettingsIcon/>
                Settings
            </Item>
            <Item>
                <DescriptionIcon/>
                Rapport
            </Item>
            <Item>
                <HelpOutlineIcon/>
                Help
            </Item>
            <Item>
                <SettingsBrightnessIcon/>
                Light Mode
            </Item>
        </Wrapper>
    </Container>
    )
}

export default Menu
