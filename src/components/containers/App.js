import React from 'react'
import WbnPlayer from './WbnPlayer'
import  { BrowserRouter , Route , Switch } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'
import NotFound from './NotFound'
import { createGlobalStyle } from 'styled-components'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WbnPlayer} />
      <Route exact path="/:activeVideo" component={WbnPlayer} />
      <Route component={ NotFound } />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
)

export default App;