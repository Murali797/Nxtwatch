import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {
  TrendingDiv,
  AppContainer,
  MainBg,
  GamingBg,
  PageTitle,
  UlVideoContainer,
  VideoCard,
  Thumbnail,
  TextBg,
  VideoTitle,
  MetaInfo,
  ContentArea,
  Meta,
  FailureView,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
  LoaderContainer,
} from './styledComponents'
import Loader from 'react-loader-spinner'

class GamingPage extends Component {
  static contextType = ThemeContext

  state = {
    gamingItems: [],
    isLoading: true,
    apiFailed: false,
  }

  componentDidMount() {
    this.renderGamingItems()
  }

  renderFailureView = failureImgUrl => (
    <FailureView>
      <FailureImg src={failureImgUrl} alt="failure view" />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We are having some trouble to complete your request. <br />
        Please try again.
      </FailureText>
      <RetryBtn onClick={this.retry}>Retry</RetryBtn>
    </FailureView>
  )

  renderGamingItems = async () => {
    this.setState({isLoading: true, apiFailed: false})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        this.setState({gamingItems: data.videos, isLoading: false})
      } else {
        this.setState({apiFailed: true, isLoading: false})
      }
    } catch (error) {
      this.setState({apiFailed: true, isLoading: false})
    }
  }

  retry = () => {
    this.renderGamingItems()
  }

  renderGamingVideosList = () => {
    const {gamingItems} = this.state
    return (
      <UlVideoContainer>
        {gamingItems.map(video => (
          <VideoCard key={video.id}>
            <Thumbnail src={video.thumbnail_url} alt={video.title} />
            <TextBg>
              <VideoTitle>{video.title}</VideoTitle>
              <MetaInfo>
                <Meta>{video.view_count} Watching Worldwide</Meta>
              </MetaInfo>
            </TextBg>
          </VideoCard>
        ))}
      </UlVideoContainer>
    )
  }

  render() {
    const {theme} = this.context
    const {gamingItems, isLoading, apiFailed} = this.state

    const failureImgUrl =
      theme.mode === 'dark'
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <StyledThemeProvider theme={theme}>
        <TrendingDiv>
          <AppContainer>
            <Header />
            <MainBg>
              <Sidebar />
              <ContentArea>
                <GamingBg>
                  <SiYoutubegaming
                    size={24}
                    style={{color: 'red', marginRight: '8px'}}
                  />
                  <PageTitle>Gaming</PageTitle>
                </GamingBg>

                {isLoading ? (
                  <LoaderContainer>
                    <Loader
                      type="ThreeDots"
                      color={theme.mode === 'dark' ? '#ffffff' : '#000000'}
                      height={50}
                      width={50}
                    />
                  </LoaderContainer>
                ) : apiFailed ? (
                  this.renderFailureView(failureImgUrl)
                ) : gamingItems.length === 0 ? (
                  <h2>No videos found</h2>
                ) : (
                  this.renderGamingVideosList()
                )}
              </ContentArea>
            </MainBg>
          </AppContainer>
        </TrendingDiv>
      </StyledThemeProvider>
    )
  }
}

export default GamingPage
