import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import CoreLayout from './layouts/CoreLayout/CoreLayout'
import Registration from './components/Registration'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={CoreLayout}>
      <Route path='/task/:taskId' component={Registration}/>
    </Route>
  </Router>, document.getElementById('root'))
