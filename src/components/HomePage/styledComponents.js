import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainBg = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`

export const AppContainer = styled.div`
  min-width: 100%;
  display: flex;
  padding-top: 60px;
  box-sizing: border-box;
  flex-direction: column;
`

export const MainContentLap = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  min-height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const PopupContainer = styled.div`
  position: relative;
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10000;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 6px;
`

export const GetIcon = styled.img`
  width: 150px;
  height: 30px;
`

export const HeadingGet = styled.h1`
  font-size: 16px;
  color: ${({theme}) => theme.text};
`

export const GetBtn = styled.button`
  background-color: white;
  border: 2px solid black;
  width: 110px;
  height: 30px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`

export const CardContainer = styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  min-height: 100vh;
  padding: 20px;
  min-width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-left: 300px;
    padding: 20px;
  }
`

export const InputBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  height: 32px;
  margin: 20px auto;
  padding: 0 8px;
  border: 1px solid #aaa;
  border-radius: 0;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: 240px;
    margin-left: 320px;
  }
`

export const Input1 = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  outline: none;
  background: transparent;
  color: ${({theme}) => theme.text};
`

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
`

export const UlVideosContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }
`

export const MainContainerVideo = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 350px;
  margin: 10px;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 30%;
    max-width: 300px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 150px;
  }
`

export const DetailsBg = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
`

export const Profile = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 5px;
  border-radius: 50%;
`

export const TextBg = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  word-break: break-word;
`

export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`

export const Meta = styled.span`
  font-size: 12px;
  margin: 5px;
  color: ${({theme}) => theme.text};
`

export const VideoTitle = styled.h2`
  font-size: 16px;
  font-family: "Roboto";
  color: ${({theme}) => theme.text};
  margin: 0 0 4px 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  text-align: center;
  
  @media screen and (min-width: 768px){
    margin-left: 300px
  }
`

export const FailureImg = styled.img`
  width: 300px;
  max-width: 100%;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  color: ${({theme}) => theme.text};
  margin-bottom: 10px;
`

export const FailureText = styled.p`
  font-size: 14px;
  color: ${({theme}) => theme.text};
  margin-bottom: 20px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #4338ca;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-left: 350px;
  }
`

// ✅ Custom Link with no underline + theme color
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
