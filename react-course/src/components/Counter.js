import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    clickHandler(){
        this.setState({
            count: this.state.count+ 1
        },()=>console.log("executed after setting the value"))
    } 
    
    render() {
        return (
            <div>
               <h1>count {this.state.count}</h1>
               <button onClick={this.clickHandler()}></button> 
            </div>
        )
    }
}


//always use setState and Never modify the state directly as it will not re-render the UI
//Whenever we want to execute a code immediately after the state has been changed
// always place the code in callback function
//When we want to the update the state based on the previous state, always pass function
//as a paramter instead of a regular object
