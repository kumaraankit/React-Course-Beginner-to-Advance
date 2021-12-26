import React, { Component } from 'react'

export class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        // this.clickHandler=this.clickHandler.bind(this)  
        //binding in the constructor itself
    }
    // clickHandler(){
    //     this.setState({
    //         message:"Ankit"
    //     })
    // }

    clickHandler=()=>{
        this.setState({
            message:"Ankit"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
            </div>
        )
    }
}

//If we do not bind the handler it will throw undefined
//There are several ways to bind 
//First way is to bind in the onClick event itself
//2nd way to bind is to bind in constructor
//3rd way is to bind it in the function
//4th way is to use arrow function as a class property
