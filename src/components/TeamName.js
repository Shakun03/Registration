import React from 'react'
import ReactDOM from 'react-dom'

class TeamName extends React.Component {
  static propTypes = {
    fieldValues: React.PropTypes.object.isRequired,
    nextStep: React.PropTypes.func.isRequired,
    previousStep: React.PropTypes.func.isRequired,
    saveValues: React.PropTypes.func.isRequired
  }
  render () {
    var {fieldValues, previousStep} = this.props
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <h1>What would you want to call your team?</h1>
          </div>
        </div>
        <form className='form-inline'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label className='labels'>Your Team Name</label>
                <input type='text' className='form-control' ref='team' placeholder='Team Name'
                  defaultValue={fieldValues.teamname} required/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <button className='btn btn-success' onClick={previousStep}>Back</button>
                <button type='button' className='btn btn-success' onClick={this.saveAndContinue}>Next</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
  saveAndContinue = (e) => {
    e.preventDefault()
    let data = {
      teamname: ReactDOM.findDOMNode(this.refs.team).value }
    this.props.saveValues(data)
    this.props.nextStep()
  };
}
export default TeamName
