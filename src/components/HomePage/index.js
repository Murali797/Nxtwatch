import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {formatDistanceToNow} from 'date-fns'
import {IoMdClose} from 'react-icons/io'
import {IoIosSearch} from 'react-icons/io'
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
  MetaInfo,
  Meta,
  FailureView,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
  LoaderContainer,
  StyledLink,
} from './styledComponents'

class HomePage extends Component {
  static contextType = ThemeContext

  state = {
    showPopup: true,
    videos: [],
    apiFailed: false,
    isLoading: true,
    searchInput: '',
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchClick = () => {
    this.renderAllVideos()
  }

  onSearchKeyDown = (event) => {
    if(event.key === "Enter"){
      this.renderAllVideos()
    }
  }
  componentDidMount() {
    this.renderAllVideos()
  }

  renderAllVideos = async () => {
    const {searchInput} = this.state
    
    this.setState({isLoading: true})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        this.setState({videos: data.videos, apiFailed: false, isLoading: false})
      } else {
        this.setState({apiFailed: true, isLoading: false})
      }
    } catch (error) {
      this.setState({apiFailed: true, isLoading: false})
    }
  }

  closePopup = () => {
    this.setState({showPopup: false})
  }

  retry = () => {
    this.renderAllVideos()
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

  renderVideosList = () => {
    const {videos} = this.state
    return videos.map(video => {
      const publishedAgo = formatDistanceToNow(new Date(video.published_at), {
        addSuffix: true,
      })

      return (
        <StyledLink to={`videos/${video.id}`} key={video.id}>
          <MainContainerVideo>
            <Thumbnail src={video.thumbnail_url} alt={video.title} />
            <DetailsBg>
              <Profile
                src={video.channel.profile_image_url}
                alt={video.channel.name}
              />
              <TextBg>
                <VideoTitle>{video.title}</VideoTitle>
                <MetaInfo>
                  <Meta>{video.channel.name}</Meta>
                  <Meta>• {video.view_count} views</Meta>
                  <Meta>• {publishedAgo}</Meta>
                </MetaInfo>
              </TextBg>
            </DetailsBg>
          </MainContainerVideo>
        </StyledLink>
      )
    })
  }

  render() {
    const {theme} = this.context
    const {showPopup, apiFailed, isLoading} = this.state

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

            {/* ✅ Banner popup */}
            {showPopup && (
              <MainContentLap>
                <PopupContainer>
                  <CloseBtn onClick={this.closePopup}>
                    <IoMdClose size={24} />
                  </CloseBtn>

                  <GetIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="logo"
                  />
                  <HeadingGet>
                    Buy Nxtwatch Premium Prepaid plan with UPI
                  </HeadingGet>
                  <GetBtn type="button">GET IT</GetBtn>
                </PopupContainer>
              </MainContentLap>
            )}
          </MainBg>

          <CardContainer>
            {/* 🔍 Search bar */}
            <InputBg>
              <Input1
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearch}
                onKeyDown={this.onSearchKeyDown}
              />
              <SearchIcon as={IoIosSearch} onClick={this.onSearchClick}/>
            </InputBg>

            {/* 🎥 Video cards */}
            <UlVideosContainer>
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
