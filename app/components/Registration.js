 var React = require('react')
 var EmailAddress  = require('./EmailAddress');
 var TeamName = require('./TeamName');
 var DomainName = require('./DomainName');
 var UserName = require('./UserName');
 var Confirmation = require('./Confirmation');
 var Welcome = require('./Welcome');
 var ReactDOM = require('react-dom');
var assign = require('object-assign');


 var fieldValues = {

        emailss: null,
        teamname: null,
        domain: null,
        username: null
    }

    var Registration = React.createClass({
        getInitialState: function(){
            return{ step : 1}
        },
        render: function(){
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

    },
    saveValues: function (fields) {
        return function(){
            fieldValues = assign({}, fieldValues, fields)
        }()
    },
    nextStep: function(){
     
        this.setState({
            step: this.state.step + 1
        })
    },
    previousStep: function(e){
        e.preventDefault()


        this.setState({
            step: this.state.step - 1 
        })
    }


    });
 ReactDOM.render(<Registration />,
            document.getElementById('app'))

 module.exports = Registration