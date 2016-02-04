import React from 'react';
import ReactDOM from'react-dom';

class Welcome extends React.Component{
    render(){
        return(
            <div>
            <h1>Welcome!!!</h1>
            <button className="btn btn-success" >Take a Tour</button>
            </div>
            );
    }
}
        
export default Welcome;