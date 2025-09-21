import {Component} from 'react'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {
  SidebarBg,
  SideContent,
  SideIcon,
  Heading,
  ContactContainer,
  MainSideBg,
  ContactHead,
  ContactLogo,
  ParaContact,
  Logos,
  StyledLink,
} from './styledComponents'

class Sidebar extends Component {
  static contextType = ThemeContext

  render() {
    const {theme} = this.context

    return (
      <StyledThemeProvider theme={theme}>
        <MainSideBg>
          <SidebarBg>
            <StyledLink to="/">
              <SideContent active={window.location.pathname === '/'}>
                <SideIcon as={IoMdHome} />
                <Heading>Home</Heading>
              </SideContent>
            </StyledLink>

            <StyledLink to="/trending">
              <SideContent active={window.location.pathname === '/trending'}>
                <SideIcon as={FaFire} />
                <Heading>Trending</Heading>
              </SideContent>
            </StyledLink>

            <StyledLink to="/gaming">
              <SideContent active={window.location.pathname === '/gaming'}>
                <SideIcon as={SiYoutubegaming} />
                <Heading>Gaming</Heading>
              </SideContent>
            </StyledLink>

            <StyledLink to="/saved-videos">
              <SideContent active={window.location.pathname === '/saved-videos'}>
                <SideIcon as={BiListPlus} />
                <Heading>Saved Videos</Heading>
              </SideContent>
            </StyledLink>

            <ContactContainer>
              <ContactHead>CONTACT US</ContactHead>
              <Logos>
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </Logos>
              <ParaContact>
                Enjoy! Now to see your channels and recommendations!
              </ParaContact>
            </ContactContainer>
          </SidebarBg>
        </MainSideBg>
      </StyledThemeProvider>
    )
  }
}

export default Sidebar
