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
    const next = '/task/' + task.button[1]
    const back = '/task/' + task.button[0]

    const Button = task.button.map((button, idx) => {
      if (idx===0) {
        if (button[0]==='0') {
          return (
            <div key={idx}>
              <a href={next}>
                <button type='button' className='btn btn-default btn-lg' >Next</button>
              </a>
            </div>
          )
        } else if (button[1]==='6') {
          return (
            <div key={idx}>
              <a href={back}>
                <button type='button' className='btn btn-default btn-lg' id='backButton'>Back</button>
              </a>
            </div>
          )
        } else {
          return (
            <div key={idx}>
              <a href={back}>
                <button type='button' className='btn btn-default btn-lg' >Back</button>
              </a>
              <a href={next}>
                <button type='button' className='btn btn-default btn-lg' >Next</button>
              </a>
            </div>
          )
        }
      }
    })
    const Image = task.image.map((url, idx) => {
      return (
        <div key='idx'>
          <img src={url} id='image'></img>
        </div>
        )
    })

    return (
      <div className='row'>
        <div className='col-md-4'>
          {inputText}
          {inputs}
          {Button}
        </div>
        <div className='col-md-1'>
        </div>
        <div className='col-md-7'>
          {Image}
        </div>
      </div>
    )
  }
}
