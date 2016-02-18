import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import CoreLayout from './layouts/CoreLayout/CoreLayout'
import TaskManager from './components/TaskManager'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={CoreLayout}>
      <Route path='/task/:taskId' component={TaskManager}/>
    </Route>
  </Router>, document.getElementById('root'))
