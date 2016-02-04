import React from 'react';
import ReactDOM from 'react-dom';

class UserName extends React.Component{
    constructor(){
        super();
        this.saveAndContinue = this.saveAndContinue.bind(this);
    }
  render() {
    return (
      <div className="second">
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
                        <input type="text"  className="form-control" ref="username" defaultValue={this.props.fieldValues.username} required/>
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
  }
  saveAndContinue(e){
            e.preventDefault()
            var data = {
                username: ReactDOM.findDOMNode(this.refs.username).value
            }
            this.props.saveValues(data)
            this.props.nextStep()
        }
}
export default UserName;