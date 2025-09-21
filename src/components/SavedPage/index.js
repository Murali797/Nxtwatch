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

  NoSavedVids = () => (
    <NoSavedContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <h1>No Saved Videos Found</h1>
      <p>You can see your videos while watching them</p>
    </NoSavedContainer>
  )

  render() {
    const {theme} = this.context
    const {isLoading, savedVideos} = this.state

    return (
      <StyledThemeProvider theme={theme}>
        <TrendingDiv>
          <Header />
          <AppContainer>
            <MainBg>
              <Sidebar />
              <div style={{flex: 1}}>
                <SavedBg>
                  <FaFire
                    size={24}
                    style={{color: 'red', marginRight: '8px'}}
                  />
                  <SaveHead>Saved Videos</SaveHead>
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
                  <SavedList>
                    {savedVideos.map(video => (
                      <SavedCard key={video.id}>
                        <SavedThumbnail
                          src={video.thumbnail_url}
                          alt={video.title}
                        />
                        <SavedDetails>
                          <SavedTitle>{video.title}</SavedTitle>
                          <SavedText>{video.channel}</SavedText>
                          <SavedText>{video.view_count} views</SavedText>
                        </SavedDetails>
                      </SavedCard>
                    ))}
                  </SavedList>
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
