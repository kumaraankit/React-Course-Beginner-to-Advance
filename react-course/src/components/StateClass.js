import React, {Component} from 'react';

export class StateClass extends Component{
    constructor(){
        super()
        this.state={
            message:"welcome Home"
        }
    }
    clickHandler(){
        this.setState({
            message:"Hello India"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.clickHandler()}>Change text</button>
            </div>
            
        )
    }
}


//About props
//1. It gets passed to the component
//2. Props are immutable as we canot modify its value
//3. props -Functional component
//4. this.props- Class based component

//About state
//1. State is managed within the component
//2. Variables are declared in the function body
//3. state can be changed
//4. useState hooks - Functional component
//5. this.state-class based component