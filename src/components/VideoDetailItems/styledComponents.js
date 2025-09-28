import styled from 'styled-components'

/* ---------- Layout ---------- */
export const AppContainer = styled.div`
  min-width: 100%;
  display: flex;
  padding-top: 60px;
  box-sizing: border-box;
  flex-direction: column;
`

export const MainBg = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 60px);
  background-color: ${({theme}) => theme.bg};
`

export const DetailMain = styled.div`
  flex-grow: 1;
  background-color: ${({theme}) => theme.bg};
  padding: 20px;
  overflow-y: auto;
`

/* ---------- Loader + Failure ---------- */
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`

export const FailureImg = styled.img`
  width: 300px;
  max-width: 80%;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h2`
  font-size: 20px;
  color: ${({theme}) => theme.text};
  margin-bottom: 10px;
`

export const FailureText = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 16px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #4338ca;
  }
`

/* ---------- Video Section ---------- */
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px){
    margin-left: 330px;
  }
`

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    height: 220px;
  }
`

export const VideoTitle = styled.h2`
  font-size: 18px;
  color: ${({theme}) => theme.text};
  margin: 8px 0;
  line-height: 1.4;
`

export const VideoMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const MetaLeft = styled.div`
  font-size: 14px;
  color: #616e7c;
  display: flex;
  gap: 10px;
`

export const MetaRight = styled.div`
  display: flex;
  gap: 16px;
`

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({active}) => (active ? '#2563eb' : '#606060')};
  gap: 5px;
`

export const HrLine = styled.hr`
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 15px 0;
`

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`

/* ---------- Reusable Styled Paragraph ---------- */
export const SemanticP = styled.p`
  font-size: ${({size}) => size || '14px'};
  font-weight: ${({weight}) => weight || 'normal'};
  color: ${({theme, color}) => color || theme.text};
  margin: ${({margin}) => margin || '0'};
`

export const ChannelName = styled(SemanticP)`
  font-weight: 500;
`

export const SubscriberCount = styled(SemanticP)`
  font-size: 14px;
  color: #64748b;
`

export const VideoDescription = styled(SemanticP)`
  font-size: 15px;
  color: #475569;
  margin-top: 10px;
  line-height: 1.5;
`
