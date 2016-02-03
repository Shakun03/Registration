var React = require('react');
var ReactDOM = require('react-dom');

var EmailAddress = React.createClass({
        
       
        render: function(){
            return(
                <div id="second">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                    <div className="upperpart">
                    <h1></h1>
                    <h1> WELCOME TO OUR WEBSITE!! </h1>
                    </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                       <form className="form-inline">
                        <div className="form-group">
                        <input type="email"  className="form-control" ref="emails" className="input-type" placeholder="Email Address" defaultValue={this.props.fieldValues.emailss} required/>
                        </div>
                        <div className="form-group">
                        <button type="button" className="btn btn-success" onClick={this.saveAndContinue}>Create a New Team</button>
                        </div>
                        </form>
                    </div>
                    </div>
                    </div>
                    
                );
        },
        saveAndContinue: function(e){
            e.preventDefault()
            var data = {
                
                emailss: ReactDOM.findDOMNode(this.refs.emails).value
            }
            this.props.saveValues(data)
            this.props.nextStep()
        }
    });
module.exports = EmailAddress