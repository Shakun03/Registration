import React from 'react'
import Task from './Task'

// stub to simulate a server that returns task info

function fetch (taskId) {
  switch (taskId) {
    case '1':
      return {fields: ['email'],
              text: ['Create a new team', 'Sign up with your e-mail address'],
              button: ['0', '2'],
              image: ['http://www.willerbyhill.co.uk/wp-content/uploads/2013/06/bir_team.png']}
    case '2':
      return {fields: ['team name'],
              text: ['What do you want to call your Team', 'Name your team after the group you are working in'],
              button: ['1', '3'],
              image: ['http://joshuareich.org/wp-content/uploads/2014/10/book4.jpg']}
    case '3':
      return {fields: ['domain name'],
              text: ['What web address do you want for your team', 'This is the address you will use to sign in'],
              button: ['2', '4'],
              image: ['http://www.networksupport.uk.com/images/large/domain_names_1.png']}
    case '4':
      return {fields: ['user name'],
              text: ['Pick a username', 'Your username should be something that your coworkers would recognize'],
              button: ['3', '5'],
              image: ['http://easi.cc/archive/thompson/images/objects/obj6-2.jpg']}
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
        <Task task={this.state.task} />
      </div>
    )
  }
}

