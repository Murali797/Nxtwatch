import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {formatDistanceToNow} from 'date-fns'
import {IoMdClose, IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import Loader from 'react-loader-spinner'
import {
  MainBg,
  AppContainer,
  MainContentLap,
  PopupContainer,
  CloseBtn,
  GetIcon,
  HeadingGet,
  GetBtn,
  CardContainer,
  InputBg,
  Input1,
  SearchIcon,
  UlVideosContainer,
  MainContainerVideo,
  Thumbnail,
  DetailsBg,
  Profile,
  TextBg,
  VideoTitle,
  VideoText,
  FailureView,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
  LoaderContainer,
  StyledLink,
  NavUl,
  NoVideosView,
  NoVideosImg,
  NoVideosHeading,
  NoVideosText,
  NoVideosRetryBtn,
} from './styledComponents'

class HomePage extends Component {
  static contextType = ThemeContext

  state = {
    showPopup: true,
    videos: [],
    apiFailed: false,
    isLoading: true,
    searchInput: '',
    navItemsList: ['Home', 'Trending', 'Gaming', 'Saved Videos'],
  }

  componentDidMount() {
    this.renderAllVideos()
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchClick = () => {
    this.renderAllVideos()
  }

  onSearchKeyDown = event => {
    if (event.key === 'Enter') {
      this.renderAllVideos()
    }
  }

  renderAllVideos = async () => {
    const {searchInput} = this.state
    this.setState({isLoading: true})

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        this.setState({videos: data.videos, apiFailed: false, isLoading: false})
      } else {
        this.setState({apiFailed: true, isLoading: false})
      }
    } catch {
      this.setState({apiFailed: true, isLoading: false})
    }
  }

  closePopup = () => this.setState({showPopup: false})
  retry = () => this.renderAllVideos()

  renderFailureView = failureImgUrl => (
    <FailureView>
      <FailureImg src={failureImgUrl} alt="failure view" />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We are having some trouble to complete your request. <br /> Please try
        again.
      </FailureText>
      <RetryBtn onClick={this.retry}>Retry</RetryBtn>
    </FailureView>
  )

  renderNoVideosView = () => {
    const noVideosImgUrl =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
    return (
      <NoVideosView>
        <NoVideosImg src="NO_VIDEOS_IMAGE_URL" alt="no videos" />
        <NoVideosHeading>No Search results found</NoVideosHeading>
        <NoVideosText>
          Try different key words or remove search filter
        </NoVideosText>
        <NoVideosRetryBtn onClick={this.renderAllVideos}>
          Retry
        </NoVideosRetryBtn>
      </NoVideosView>
    )
  }

  renderVideosList = () => {
    const {videos} = this.state
    return videos.map(video => {
      const publishedAgo = formatDistanceToNow(new Date(video.published_at), {
        addSuffix: true,
      })
      return (
        <MainContainerVideo key={video.id}>
          <StyledLink to={`videos/${video.id}`}>
            <Thumbnail src={video.thumbnail_url} alt="video thumbnail" />
            <DetailsBg>
              <Profile
                src={video.channel.profile_image_url}
                alt="channel logo"
              />
              <TextBg>
                <VideoTitle>{video.title}</VideoTitle>
                <VideoText>{video.channel.name}</VideoText>
                <VideoText>{video.view_count} views</VideoText>
                <VideoText>{publishedAgo}</VideoText>
              </TextBg>
            </DetailsBg>
          </StyledLink>
        </MainContainerVideo>
      )
    })
  }

  render() {
    const {theme} = this.context
    const {showPopup, apiFailed, isLoading, navItemsList, videos} = this.state

    const failureImgUrl =
      theme.mode === 'dark'
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <StyledThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <MainBg>
            <Sidebar />

            {showPopup && (
              <MainContentLap
                data-testid="banner"
                style={{
                  backgroundImage:
                    'url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png")',
                }}
              >
                <PopupContainer>
                  <CloseBtn data-testid="close" onClick={this.closePopup}>
                    <IoMdClose size={24} />
                  </CloseBtn>

                  <GetIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />

                  <HeadingGet>
                    Buy Nxt Watch Premium Prepaid plan with UPI
                  </HeadingGet>

                  <GetBtn type="button">GET IT NOW</GetBtn>
                </PopupContainer>
              </MainContentLap>
            )}
          </MainBg>

          <CardContainer>
            {/* Search bar */}
            <InputBg>
              <Input1
                type="search"
                placeholder="Search"
                data-testid="searchInput"
                onChange={this.onChangeSearch}
                onKeyDown={this.onSearchKeyDown}
              />
              <SearchIcon
                as={IoIosSearch}
                onClick={this.onSearchClick}
                data-testid="searchButton"
              />
            </InputBg>

            {/* Navigation UL */}
            <NavUl>
              {navItemsList.map(item => (
                <li key={item}>{item}</li>
              ))}
            </NavUl>

            {/* Videos / Loader / Failure / No Videos */}
            <UlVideosContainer>
              {isLoading ? (
                <LoaderContainer data-testid="loader">
                  <Loader
                    type="ThreeDots"
                    color={theme.mode === 'dark' ? '#ffffff' : '#000000'}
                    height={50}
                    width={50}
                  />
                </LoaderContainer>
              ) : apiFailed ? (
                this.renderFailureView(failureImgUrl)
              ) : videos.length === 0 ? (
                this.renderNoVideosView()
              ) : (
                this.renderVideosList()
              )}
            </UlVideosContainer>
          </CardContainer>
        </AppContainer>
      </StyledThemeProvider>
    )
  }
}

export default HomePage
