import styled from 'styled-components'

export const TrendingDiv = styled.div`
  background-color: ${({theme}) => theme.bg};
  min-height: 100vh;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
`

export const MainBg = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const GamingBg = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${({theme}) => theme.cardBg};
  width: 100vw;
  

  @media screen and (min-width: 768px){
    min-width: 100%;
    padding-left: 40px;
  }
`

export const PageTitle = styled.h1`
  color: ${({theme}) => theme.text};
  font-size: 24px;
  font-weight: bold;
`

export const UlVideoContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0 0 0;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;  
    gap: 24px;                     
    margin: 30px;
  }
`

export const VideoCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px; /* reduce max width */

  @media (min-width: 768px) {
    flex: 0 0 calc((100% - 48px) / 3); 
    max-width: none;
  }

  @media (min-width: 1024px) {
    flex: 0 0 calc((100% - 64px) / 4); 
    /* 4 cards per row on larger screens */
  }
`



export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
  height: auto;
`

export const TextBg = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word;
`

export const VideoTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.text};
  margin: 0;
`

export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Meta = styled.p`
  font-size: 14px;
  color: ${({theme}) => theme.text};
  margin: 0;
`
// Wrap your video content
export const ContentArea = styled.div`
  flex: 1;               
  padding: 16px;
  margin-left: 0;

  @media screen and (min-width: 768px) {
    margin-left: 300px;  // match sidebar width
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

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
