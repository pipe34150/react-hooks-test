import React from 'react'
import WbnPlayer from './WbnPlayer'
import  { BrowserRouter , Route , Switch } from 'react-router-dom'
import NotFound from './NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WbnPlayer} />
      <Route exact path="/:activeVideo" component={WbnPlayer} />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

export default App;