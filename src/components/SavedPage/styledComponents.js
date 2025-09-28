import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingDiv = styled.div`
  background-color: ${({theme}) => theme.bg};
  min-height: 100vh;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding-top: 60px;
  box-sizing: border-box;
`

export const MainBg = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const SavedBg = styled.section`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${({theme}) =>
    theme.mode === 'dark' ? '#181818' : '#f9f9f9'};
`

export const SaveHead = styled.h1`
  font-size: 20px;
  color: ${({theme}) => theme.text};
`

export const SavedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  list-style-type: none;
  margin: 0;
`

export const SavedCard = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) =>
    theme.mode === 'dark' ? '#000000' : '#ffffff'};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const SavedThumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

export const SavedDetails = styled.div`
  padding: 12px;
`

export const SavedTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 4px 0;
  color: ${({theme}) => theme.text};
`

export const SavedText = styled.p`
  font-size: 14px;
  margin: 2px 0;
  color: ${({theme}) => theme.text};
`

export const NoSavedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: center;

  img {
    width: 300px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
    color: ${({theme}) => theme.text};
  }

  p {
    font-size: 14px;
    color: ${({theme}) => theme.text};
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
