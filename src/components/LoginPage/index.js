// LoginPage.js
import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'

import {
  LoginBg,
  LoginContainer,
  Form,
  Label,
  Logo,
  InputBg,
  Input,
  ShowPasswordBg,
  CheckInput,
  ShowPasswordLabel,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class LoginPage extends Component {
  static contextType = ThemeContext

  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg, showPassword} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    const {theme} = this.context

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <StyledThemeProvider theme={theme}>
        <LoginBg>
          <LoginContainer>
            <Form onSubmit={this.submitForm}>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="logo"
              />
              <Label htmlFor="username">USERNAME</Label>
              <InputBg>
                <Input
                  type="text"
                  id="username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </InputBg>

              <Label htmlFor="password">PASSWORD</Label>
              <InputBg>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </InputBg>

              <ShowPasswordBg>
                <CheckInput
                  type="checkbox"
                  id="show-password"
                  onChange={this.onChangeShowPassword}
                />
                <ShowPasswordLabel htmlFor="show-password">
                  Show Password
                </ShowPasswordLabel>
              </ShowPasswordBg>

              <LoginBtn type="submit">Login</LoginBtn>
              {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
            </Form>
          </LoginContainer>
        </LoginBg>
      </StyledThemeProvider>
    )
  }
}

export default LoginPage
