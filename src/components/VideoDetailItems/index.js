import {Component} from 'react';
import Cookies from 'js-cookie';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import ThemeContext from '../../context/ThemeContext';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Loader from 'react-loader-spinner';
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';
import {MdPlaylistAdd} from 'react-icons/md';

import {
  AppContainer,
  MainBg,
  DetailMain,
  VideoContainer,
  VideoFrame,
  VideoMeta,
  MetaLeft,
  MetaRight,
  HrLine,
  ChannelInfo,
  ChannelImage,
  ChannelName,
  SubscriberCount,
  VideoDescription,
  FailureView,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
  LoaderContainer,
} from './styledComponents';

const failureImgUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png';

class VideoDetailItems extends Component {
  static contextType = ThemeContext;

  state = {
    detailVids: null,
    apiFailed: false,
    isLoading: true,
    liked: false,
    disliked: false,
    saved: false,
  };

  componentDidMount() {
    this.renderDetailsItems();
  }

  renderDetailsItems = async () => {
    this.setState({isLoading: true});
    const {match} = this.props;
    const {id} = match.params;
    const url = `https://apis.ccbp.in/videos/${id}`;
    const jwtToken = Cookies.get('jwt_token');

    const options = {
      method: 'GET',
      headers: { Authorization: `Bearer ${jwtToken}` },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        this.setState({
          detailVids: data.video_details,
          isLoading: false,
          apiFailed: false,
        });
      } else {
        this.setState({isLoading: false, apiFailed: true});
      }
    } catch {
      this.setState({isLoading: false, apiFailed: true});
    }
  };

  retry = () => {
    this.renderDetailsItems();
  };

  onLike = () => this.setState({ liked: true, disliked: false });
  onDislike = () => this.setState({ liked: false, disliked: true });

  savedVid = () => {
    const { detailVids } = this.state;
    this.setState(prev => ({ saved: !prev.saved }));

    let saved = JSON.parse(localStorage.getItem('savedVideos')) || [];
    const alreadySaved = saved.find(v => v.id === detailVids.id);
    if (!alreadySaved) {
      saved.push({
        id: detailVids.id,
        title: detailVids.title,
        thumbnail_url: detailVids.thumbnail_url,
        channel: detailVids.channel.name,
        view_count: detailVids.view_count,
      });
    }
    localStorage.setItem('savedVideos', JSON.stringify(saved));
  };

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
  );

  renderVideoDetails = () => {
    const { detailVids, liked, disliked, saved } = this.state;
    if (!detailVids) return null;

    return (
      <VideoContainer>
        <VideoFrame
          src={detailVids.video_url.replace('watch?v=', 'embed/')}
          title={detailVids.title}
          allowFullScreen
        />

        {/* Semantic <p> for tests */}
        <p>{detailVids.title}</p>
        <VideoMeta>
          <MetaLeft>
            <p>{detailVids.view_count} views</p>
            <p>• {detailVids.published_at}</p>
          </MetaLeft>

          <MetaRight>
            <button onClick={this.onLike} style={{ color: liked ? '#2563eb' : '#64748b' }}>
              <AiOutlineLike size={20} /> Like
            </button>
            <button onClick={this.onDislike} style={{ color: disliked ? '#2563eb' : '#64748b' }}>
              <AiOutlineDislike size={20} /> Dislike
            </button>
            <button onClick={this.savedVid}>
              <MdPlaylistAdd size={20} /> {saved ? 'Saved' : 'Save'}
            </button>
          </MetaRight>
        </VideoMeta>

        <HrLine />

        <ChannelInfo>
          <ChannelImage src={detailVids.channel.profile_image_url} alt="channel logo" />
          <div>
            <ChannelName>{detailVids.channel.name}</ChannelName>
            <SubscriberCount>{detailVids.channel.subscriber_count} subscribers</SubscriberCount>
          </div>
        </ChannelInfo>

        <VideoDescription>{detailVids.description}</VideoDescription>
      </VideoContainer>
    );
  };

  render() {
    const { theme } = this.context;
    const { isLoading, apiFailed } = this.state;

    return (
      <StyledThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <MainBg>
            <Sidebar />
            <DetailMain>
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
                this.renderVideoDetails()
              )}
            </DetailMain>
          </MainBg>
        </AppContainer>
      </StyledThemeProvider>
    );
  }
}

export default VideoDetailItems;
