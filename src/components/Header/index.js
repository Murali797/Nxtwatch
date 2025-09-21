import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {FaMoon, FaSun} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  Nav,
  Logo,
  Side,
  IconBtn,
  Profile,
  LogoutBtn,
  MobileHeader,
  LaptopHeader,
  HamburgerMenu,
  HamburgerItem,
  PopupOverlay,
  PopupBox,
  PopupTitle,
  PopupActions,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

class Header extends Component {
  static contextType = ThemeContext

  state = {
    menuOpens: false,
    showLogoutPopup: false,
  }

  toggleMenu = () => {
    this.setState(prev => ({menuOpens: !prev.menuOpens}))
  }

  handleLogout = () => {
    Cookies.remove('jwt_token')
    window.location.href = '/login'
  }

  render() {
    const {mode, toggleTheme, theme} = this.context
    const {menuOpens, showLogoutPopup} = this.state

    return (
      <StyledThemeProvider theme={theme}>
        <HeaderContainer>
          {/* Mobile Header */}
          {/* Mobile Header */}
          <MobileHeader>
            <Nav>
              <Link to='/'>
                <Logo src={theme.logo} alt='logo' />
              </Link>
              <Side>
                <IconBtn onClick={toggleTheme}>
                  {mode === 'light' ? <FaMoon /> : <FaSun />}
                </IconBtn>
                <IconBtn>
                  <GiHamburgerMenu onClick={this.toggleMenu} />
                </IconBtn>
                <IconBtn onClick={() => this.setState({showLogoutPopup: true})}>
                  <FiLogOut />
                </IconBtn>
              </Side>
            </Nav>
            {menuOpens && (
              <HamburgerMenu>
                <HamburgerItem>
                  <Link to='/'>Home</Link>
                </HamburgerItem>
                <HamburgerItem>
                  <Link to='/trending'>Trending</Link>
                </HamburgerItem>
                <HamburgerItem>
                  <Link to='/gaming'>Gaming</Link>
                </HamburgerItem>
                <HamburgerItem>
                  <Link to='/saved-videos'>Saved Videos</Link>
                </HamburgerItem>
              </HamburgerMenu>
            )}
          </MobileHeader>

          {/* Laptop Header */}
          <LaptopHeader>
            <Nav>
              <Link to='/'>
                <Logo src={theme.logo} alt='logo' />
              </Link>
              <Side>
                <IconBtn onClick={toggleTheme}>
                  {mode === 'light' ? <FaMoon /> : <FaSun />}
                </IconBtn>
                <Profile
                  src='https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
                  alt='profile'
                />
                <LogoutBtn
                  onClick={() => this.setState({showLogoutPopup: true})}
                >
                  Logout
                </LogoutBtn>
              </Side>
            </Nav>
          </LaptopHeader>

          {showLogoutPopup && (
            <PopupOverlay>
              <PopupBox>
                <PopupTitle>Are you sure you want to logout?</PopupTitle>
                <PopupActions>
                  <CancelBtn
                    onClick={() => this.setState({showLogoutPopup: false})}
                  >
                    Cancel
                  </CancelBtn>
                  <ConfirmBtn onClick={this.handleLogout}>Confirm</ConfirmBtn>
                </PopupActions>
              </PopupBox>
            </PopupOverlay>
          )}
        </HeaderContainer>
      </StyledThemeProvider>
    )
  }
}

export default withRouter(Header)
