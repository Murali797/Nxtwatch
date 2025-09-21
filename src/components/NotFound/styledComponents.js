import styled from 'styled-components'

export const NotFoundBg = styled.div`
  min-height: 100vh;
  background-color: ${({theme}) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px; /* space for header */
  box-sizing: border-box;
`

export const NotContainer = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.bg}
  color: ${({theme}) => theme.text};
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  padding: 20px;
`

export const NotImage = styled.img`
  width: 300px;
  max-width: 100%;
  margin-bottom: 20px;
`

export const NotHead = styled.h1`
  font-size: 24px;
  color: ${({theme}) => theme.text};
  margin-bottom: 10px;
`

export const NotPara = styled.p`
  font-size: 16px;
  color: ${({theme}) => theme.textSecondary || '#555'};
`
