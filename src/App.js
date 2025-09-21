import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import TrendingPage from './components/TrendingPage'
import GamingPage from './components/GamingPage'
import SavedPage from './components/SavedPage'
import VideoDetailItems from './components/VideoDetailItems'
import {Component} from 'react'
import {ThemeProvider} from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div>
          <Header />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/trending" component={TrendingPage} />
            <ProtectedRoute exact path="/gaming" component={GamingPage} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoDetailItems}
            />
            <ProtectedRoute exact path="/saved-videos" component={SavedPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
