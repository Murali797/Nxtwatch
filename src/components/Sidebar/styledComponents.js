import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarBg = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text};
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 60px;
    left: 0;
    height: calc(100% - 60px);
    z-index: 999;
  }
`

export const SideContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  color: ${({active, theme}) => (active ? '#ff0000' : theme.text)};
  background-color: ${({active, theme}) =>
    active ? (theme.mode === 'dark' ? '#333' : '#f1f1f1') : 'transparent'};
  border-radius: 5px;
  margin-bottom: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({theme}) => (theme.mode === 'dark' ? '#444' : '#e0e0e0')};
    color: ${({theme}) => theme.text};
  }
`

export const SideIcon = styled.div`
  margin-right: 20px;
  font-size: 30px;
`

export const Heading = styled.h1`
  font-size: 16px;
`

export const ContactContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
  }
`

export const MainSideBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const ContactHead = styled.h2`
  font-size: 20px;
  font-family: 'Roboto';
  padding-bottom: 20px;
`

export const ContactLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  margin-bottom: 20px;
`

export const ParaContact = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
`

export const Logos = styled.div`
  display: flex;
  flex-direction: row;
`


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
