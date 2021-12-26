import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdatedComponent from './withCounter'

 class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // clickHandler=()=>{
    //     this.setState(prevState=>{
    //         return {count:prevState.count+1}
    //     })
    // }
    // Remove all this code and put in the HOC
    render() {
        const {count, clickHandler}=this.props
        return (
            
            <div>
               <button onClick={clickHandler}>{this.props.name}Clicked X {count}times</button> 
            </div>
        )
    }
}

export default withCounter(ClickCounter)

// What is HOC
// It ian technique in react for reusing component logic
// It ia a pattern where a function takes component as an argument and returns a new component

// Why HOC??
// To share the common functionality between components

