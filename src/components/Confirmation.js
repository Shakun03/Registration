import React from 'react'

const Confirmation = ({fieldValues, previousStep, nextStep}) => {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <h2>Confirm Registration</h2>
        <ul>
          <li><b>Email:</b> {fieldValues.emailss}</li>
          <li><b>Team Name:</b> {fieldValues.teamname}</li>
          <li><b>Domain Name:</b> {fieldValues.domain}</li>
          <li><b>User Name</b> {fieldValues.username}</li>
        </ul>
        <button className='btn btn-success' onClick={previousStep}>Back</button>
        <button className='btn btn-success' onClick={nextStep}>Submit Registration</button>
      </div>
    </div>
  )
}

export default Confirmation
