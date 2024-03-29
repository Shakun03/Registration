import React from 'react'
import ReactDOM from 'react-dom'

class EmailAddress extends React.Component {
  static propTypes = {
    fieldValues: React.PropTypes.object.isRequired,
    nextStep: React.PropTypes.func.isRequired,
    saveValues: React.PropTypes.func.isRequired
  };
  render () {
    var {fieldValues} = this.props
    return (
      <div>
        <div className='row'>
          <div className='col-md-3'>
          </div>
          <div className='col-md-6'>
            <div className='upperpart'>
              <h1> WELCOME TO OUR WEBSITE!! </h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
          </div>
          <div className='col-md-4'>
            <form className='form-inline'>
              <div className='form-group'>
                <input type='email' className='form-control' ref='emails'
                  placeholder='Email Address' defaultValue={fieldValues.emailss} required/>
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-success'
                  onClick={this.saveAndContinue}>Create a New Team</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  saveAndContinue = (e) => {
    e.preventDefault()
    let data = {
      emailss: ReactDOM.findDOMNode(this.refs.emails).value
    }
    this.props.saveValues(data)
    this.props.nextStep()
  };

}
export default EmailAddress
