import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import {
  TrendingDiv,
  AppContainer,
  MainBg,
  TrendingBg,
  TrendHead,
  TrendMain,
  UlTrendVidContainer,
  TrendVideoCard,
  Thumbnail,
  TextBg,
  VideoTitle,
  MetaInfo,
  Meta,
  FailureView,
  FailureImg,
  FailureHeading,
  FailureText,
  LoaderContainer,
  RetryBtn,
} from './styledComponents'

const failureImgUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

class TrendingPage extends Component {
  static contextType = ThemeContext

  state = {
    trendVideos: [],
    apiFailed: false,
    isLoading: true,
  }

  componentDidMount() {
    this.renderTrendingVideos()
  }

  renderTrendingVideos = async () => {
    this.setState({isLoading: true}) // start loading
    const url = 'https://apis.ccbp.in/videos/trending'
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
        this.setState({
          trendVideos: data.videos,
          apiFailed: false,
          isLoading: false,
        })
      } else {
        this.setState({apiFailed: true, isLoading: false})
      }
    } catch (e) {
      this.setState({apiFailed: true, isLoading: false})
    }
  }

  retry = () => {
    this.renderTrendingVideos()
  }

  renderFailureView = () => (
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

  renderVideosList = () => {
    const {trendVideos} = this.state

    return trendVideos.map(video => {
      const publishedAgo = formatDistanceToNow(new Date(video.published_at), {
        addSuffix: true,
      })

      return (
        <TrendVideoCard key={video.id}>
          <Thumbnail src={video.thumbnail_url} alt={video.title} />
          <TextBg>
            <VideoTitle>{video.title}</VideoTitle>
            <MetaInfo>
              <Meta>{video.channel.name}</Meta>
              <Meta>• {video.view_count} views</Meta>
              <Meta>• {publishedAgo}</Meta>
            </MetaInfo>
          </TextBg>
        </TrendVideoCard>
      )
    })
  }

  render() {
    const {theme} = this.context
    const {apiFailed, isLoading} = this.state

    return (
      <StyledThemeProvider theme={theme}>
        <TrendingDiv>
          <AppContainer>
            <Header />
            <MainBg>
              <Sidebar />
              <TrendMain>
                <TrendingBg>
                  <FaFire
                    size={24}
                    style={{color: 'red', marginRight: '8px'}}
                  />
                  <TrendHead>Trending</TrendHead>
                </TrendingBg>

                <UlTrendVidContainer>
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
                    this.renderFailureView()
                  ) : (
                    this.renderVideosList()
                  )}
                </UlTrendVidContainer>
              </TrendMain>
            </MainBg>
          </AppContainer>
        </TrendingDiv>
      </StyledThemeProvider>
    )
  }
}

export default TrendingPage
