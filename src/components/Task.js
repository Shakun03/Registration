import React from 'react'

export default class Task extends React.Component {
  static propTypes = {
    task: React.PropTypes.object.isRequired
  }
  render () {
    const { task } = this.props
    if (task == null) {
      return <div/>
    }
    console.log(task.fields)
    const inputs = task.fields.map((field, idx) => (
      <div key={idx}>
        <label>{field}</label>
        <input type='text' name={field} />
      </div>
    ))
    const next = '/task/' + task.next
    return (
      <div>
        {inputs}
        <a href={next}>Next</a>
      </div>
    )
  }
}
