import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import {
  TrendingDiv,
  AppContainer,
  MainBg,
  SavedList,
  SavedCard,
  SavedThumbnail,
  SavedDetails,
  SavedText,
  SavedTitle,
  SavedBg,
  SaveHead,
  NoSavedContainer,
  LoaderContainer,
  StyledLink,
} from './styledComponents'

class SavedPage extends Component {
  static contextType = ThemeContext

  state = {isLoading: true, savedVideos: []}

  componentDidMount() {
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || []

    setTimeout(() => {
      this.setState({savedVideos, isLoading: false})
    }, 500)
  }

  NoSavedVids = () => {
    const {theme} = this.context
    return (
      <NoSavedContainer theme={theme}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <h1>No saved videos found</h1>
        <p>Save your videos by clicking a button</p>
      </NoSavedContainer>
    )
  }

  renderSavedVideosList = () => {
    const {savedVideos} = this.state
    const {theme} = this.context

    return (
      <SavedList>
        {savedVideos.map(video => (
          <SavedCard key={video.id} theme={theme}>
            <StyledLink to={`/videos/${video.id}`}>
              <SavedThumbnail src={video.thumbnail_url} alt={video.title} />
            </StyledLink>
            <SavedDetails>
              <SavedTitle theme={theme}>{video.title}</SavedTitle>
              <SavedText theme={theme}>{video.channel}</SavedText>
              <SavedText theme={theme}>{video.view_count} views</SavedText>
            </SavedDetails>
          </SavedCard>
        ))}
      </SavedList>
    )
  }

  render() {
    const {theme} = this.context
    const {isLoading, savedVideos} = this.state

    return (
      <StyledThemeProvider theme={theme}>
        <TrendingDiv theme={theme}>
          <Header />
          <AppContainer>
            <MainBg>
              <Sidebar />
              <div style={{flex: 1}}>
                <SavedBg theme={theme}>
                  <FaFire
                    size={24}
                    style={{color: 'red', marginRight: '8px'}}
                  />
                  <SaveHead theme={theme}>Saved Videos</SaveHead>
                </SavedBg>

                {isLoading ? (
                  <LoaderContainer>
                    <Loader
                      type="ThreeDots"
                      color={theme.mode === 'dark' ? '#ffffff' : '#000000'}
                      height={50}
                      width={50}
                    />
                  </LoaderContainer>
                ) : savedVideos.length === 0 ? (
                  this.NoSavedVids()
                ) : (
                  this.renderSavedVideosList()
                )}
              </div>
            </MainBg>
          </AppContainer>
        </TrendingDiv>
      </StyledThemeProvider>
    )
  }
}

export default SavedPage
