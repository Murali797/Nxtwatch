import styled from 'styled-components'

export const TrendingDiv = styled.div`
  background-color: ${({theme}) => theme.bg};
  margin: 0;
  padding: 0;
`

export const AppContainer = styled.div`
  min-width: 100%;
  display: flex;
  padding-top: 40px;
  box-sizing: border-box;
  flex-direction: column;
`

export const MainBg = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`

export const TrendingBg = styled.div`
  background-color: ${({theme}) => theme.cardBg};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  width: 100vw;


  @media screen and (min-width: 768px) {
    margin-left: 280px;
    width: 100%;

  }
`

export const TrendHead = styled.h1`
  color: ${({theme}) => theme.text};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`
export const TrendMain = styled.div`
  flex: 1;
  padding: 20px;
  width: calc(100% - 300px); 

  @media screen and (max-width: 768px) {
    width: 100%;             
    display: flex;
    flex-direction: column;
    align-items: center;     
  }
`

export const UlTrendVidContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 300px;
    width: calc(100% - 300px);
  }
`

export const TrendVideoCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`

export const TextBg = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word; /* ✅ prevent overflow */
  flex: 1;
  padding: 8px 0;
`

export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  color: ${({theme}) => theme.text};
`

export const Meta = styled.span``

export const VideoTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto";
  color: ${({theme}) => theme.text};
  margin: 0 0 6px 0;

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

  
`
