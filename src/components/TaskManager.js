import React from 'react'
import Task from './Task'

// stub to simulate a server that returns task info
function fetch (taskId) {
  switch (taskId) {
    case '1':
      return {fields: ['email'], text: ['Create a new team', 'Sign up with your e-mail address'], next: 2}
    case '2':
      return {fields: ['vanityUrl', 'telephone'], text: ['text1', 'text2'], next: 3}
    case '3':
      return {fields: ['teamName']}
  }
}

export default class TaskManager extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  componentDidMount () {
    this.setState({
      task: fetch(this.props.params.taskId)
    })
  }

  render () {
    return (
      <div>
        <Task task={this.state.task}/>
      </div>
    )
  }
}

