import React from 'react';
import ReactDOM from 'react-dom';

class UserName extends React.Component{
    propTypes : {
        fieldValues: React.propTypes.object.isRequired,
        nextStep: React.propTypes.func.isRequired,
        previousStep: React.propTypes.func.isRequired,
        saveValues: React.propTypes.func.isRequired
    };
    render() {
        var {fieldValues,previousStep} = this.props;
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
                                    <input type="text"  className="form-control" ref="username" placeholder="User Name" defaultValue={fieldValues.username} required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <button className="btn btn-success" onClick={previousStep}>Back</button>
                                <button type="button" className="btn btn-success" onClick={this.saveAndContinue}>Next</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>              
        );
    }
  saveAndContinue = (e) => {
        e.preventDefault();
        let data = {
            username: ReactDOM.findDOMNode(this.refs.username).value
        };
        this.props.saveValues(data);
        this.props.nextStep();
        };
}
export default UserName;