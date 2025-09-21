import { Component } from 'react'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  NotFoundBg,
  NotContainer,
  NotImage,
  NotHead,
  NotPara,
} from './styledComponents'

class NotFound extends Component {
  static contextType = ThemeContext

  render() {
    const { theme } = this.context

    return (
      <StyledThemeProvider theme={theme}>
        <NotFoundBg>
          <Header />
          <NotContainer>
            <NotImage
              src={
                theme.mode === 'dark'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NotHead>Page Not Found</NotHead>
            <NotPara>
              We are sorry, the page you requested could not be found.
            </NotPara>
          </NotContainer>
        </NotFoundBg>
      </StyledThemeProvider>
    )
  }
}

export default NotFound
