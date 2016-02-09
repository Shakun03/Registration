 import React from 'react';
 import EmailAddress  from './EmailAddress';
 import TeamName from './TeamName';
 import DomainName from './DomainName';
 import UserName from './UserName';
 import Confirmation from './Confirmation';
 import Welcome from './Welcome';
 import ReactDOM from 'react-dom';
 import assign from 'object-assign';


let fieldValues = {

        emailss: null,
        teamname: null,
        domain: null,
        username: null
}

class Registration extends React.Component{
    constructor(){
        super();
        this.state = {
            step: 1
        };
    }
    render(){
        switch(this.state.step){
            case 1:
                return <EmailAddress fieldValues={fieldValues} nextStep={this.nextStep} saveValues={this.saveValues}/>
            case 2:
                return <TeamName fieldValues={fieldValues} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues}/>
            case 3:
                return <DomainName fieldValues={fieldValues} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues}/>
            case 4:
                return <UserName fieldValues={fieldValues} nextStep={this.nextStep} previousStep={this.previousStep} saveValues={this.saveValues}/>
            case 5:
                return <Confirmation fieldValues={fieldValues} nextStep={this.nextStep} previousStep={this.previousStep}/>
            case 6: 
                return <Welcome previousStep={this.previousStep}/>
        }
    }
    saveValues = (fields) => {
        return function(){
            fieldValues = assign({}, fieldValues, fields)
        }()
    };
    nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    };
    previousStep = (e) => {
        e.preventDefault()
        this.setState({
            step: this.state.step - 1 
        })
    };
}
ReactDOM.render(<Registration />,document.getElementById('app'))

export default Registration;