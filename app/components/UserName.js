var React = require('react');
var ReactDOM = require('react-dom');

var UserName = React.createClass({
  render: function() {
    return (
      <div class="second">
                <div className="row">
                    <div className="col-md-6">
                    <h1>Pick a Username</h1><br />
                    <h3>Your username should be something that your coworkers would recognize.</h3><br />
                    </div>
                    </div>
                       <form className="form-inline">
                       <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                        <label className="labels">UserName</label>
                        <input type="text"  className="form-control" ref="username" className="input-type" defaultValue={this.props.fieldValues.username} required/>
                        </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                        <button className="btn btn-success" onClick={this.props.previousStep}>Back</button>
                        <button type="button" className="btn btn-success" onClick={this.saveAndContinue}>Next</button>
                        </div>
                        </div>
                        </div>
                        </form>
                    </div>
                    
                    
    )
  },
  saveAndContinue: function(e){
            e.preventDefault()
            var data = {
                username: ReactDOM.findDOMNode(this.refs.username).value
            }
            this.props.saveValues(data)
            this.props.nextStep()
        }
}); 
module.exports = UserName