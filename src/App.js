import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import NotFound from './components/NotFound'
import About from './components/About'
import Profile from './components/Profile'
import Python from './components/Python'
import Html from './components/Html'
import Css from './components/Css'
import JavaScript from './components/JavaScript'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/python" component={Python} />
      <Route exact path="/html" component={Html} />
      <Route exact path="/css" component={Css} />
      <Route exact path="/javascript" component={JavaScript} />
      <Route exact path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
