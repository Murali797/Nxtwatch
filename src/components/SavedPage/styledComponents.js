import styled from 'styled-components'

export const TrendingDiv = styled.div`
  background-color: ${({theme}) => theme.bg};
  min-height: 100vh;
`

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px; /* header height */
  box-sizing: border-box;
`

export const MainBg = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
`

export const SavedList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 350px;
  }
`

export const SavedCard = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  background-color: ${({theme}) => theme.cardBg};
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);

    @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const SavedThumbnail = styled.img`
  width: 250px;
  margin-right: 15px;
  border-radius: 8px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const SavedDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const SavedTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 5px 0;
  color: ${({theme}) => theme.text};
`

export const SavedText = styled.p`
  font-size: 14px;
  color: #606060;
  margin: 2px 0;
`

export const NoSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
  color: ${({theme}) => (theme.mode === 'dark' ? '#ffffff' : '#181818')};

  img {
    width: 300px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: ${({theme}) => (theme.mode === 'dark' ? '#cccccc' : '#606060')};
  }
`

export const SavedBg = styled.div`
  background-color: ${({theme}) => theme.cardBg};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px;
  width: 100%;
  position: sticky;
  top: 60px; /* header height */
  z-index: 1;

  @media screen and (min-width: 768px) {
    margin-left: 300px;
    width: calc(100% - 300px);
  }
`

export const SaveHead = styled.h1`
  color: ${({theme}) => theme.text};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
