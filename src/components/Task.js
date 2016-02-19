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
        <input className='form-control input-lg' type='text' name={field} placeholder={field} id='inputLg'/>
      </div>
      ))
    const inputText = task.text.map((text, idx) => {
      if (idx===0) {
        return (
          <div key={idx} id='heading'>
            <h1>{text}</h1>
          </div>
        )
      } else {
        return (
          <div key={idx}>
            <h5>{text}</h5>
          </div>
        )
      }
    })

    const next = '/task/' + task.next
    return (
      <div>
        {inputText}
        {inputs}
        <a href={next}>
          <button type='button' className='btn btn-default btn-lg' id='buttonLg'>Next</button>
        </a>
      </div>
    )
  }
}
