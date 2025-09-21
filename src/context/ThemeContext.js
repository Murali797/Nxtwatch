import React, {createContext, Component} from 'react'

const ThemeContext = createContext()

export class ThemeProvider extends Component {
  state = {
    mode: 'light',
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'light' ? 'dark' : 'light',
    }))
  }

  render() {
    const {children} = this.props
    const {mode} = this.state

    // Themes
    const lightTheme = {
      bg: '#ffffff',
      text: '#000000',
      logo: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
      cardBg: '#f1f1f1',
    }
    const darkTheme = {
      bg: '#0f0f0f',
      text: '#ffffff',
      logo: 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
      cardBg: '#181818',
    }

    const theme = mode === 'light' ? lightTheme : darkTheme

    return (
      <ThemeContext.Provider
        value={{
          mode,
          toggleTheme: this.toggleTheme,
          theme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}
export default ThemeContext
