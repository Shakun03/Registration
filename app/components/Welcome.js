var React = require('react');
var ReactDOM = require('react-dom');

var Welcome = React.createClass({
        render: function(){
            return(
                <div>
                <h1>Welcome!!!</h1>
                <button className="btn btn-success" >Take a Tour</button>
                </div>
                );
        }
    });
        
    module.exports = Welcome