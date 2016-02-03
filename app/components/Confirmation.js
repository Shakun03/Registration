var React = require('react');

var Confirmation = React.createClass({
         render: function() {
    return (
        <div className="row">
                    <div className="col-md-6">
        <h2>Confirm Registration</h2>
        <ul>
          <li><b>Email:</b> {this.props.fieldValues.emailss}</li>
          <li><b>Team Name:</b> {this.props.fieldValues.teamname}</li>
          <li><b>Domain Name:</b> {this.props.fieldValues.domain}</li>
          <li><b>User Name</b> {this.props.fieldValues.username}</li>
        </ul>
        
            <button className="btn btn-success" onClick={this.props.previousStep}>Back</button>
            <button className="btn btn-success" onClick={this.props.nextStep}>Submit Registration</button>
            
          
        
      </div>
      </div>
    )
  }
    });
module.exports = Confirmation