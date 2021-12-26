import React, { Component } from 'react'
import { LifeCycleB } from './LifeCycleB'

export class LifeCycleForClass extends Component {
    constructor(props) {// constructor is the only place where we can change the state directly
                        // by using this.state, in all other place we need to put it as a 
                        // this.setState
        super(props) //it will call the base class constructor,
                    //to use this.props in our component we need to
                    //have props passed as an argument in the super function
    
        this.state = {
             name:""
        }
        console.log("Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Lifecycle A getDerievedStateFromProps")
        return null;
        
    }
    componentDidMount(){
        console.log("Component Did Mount")
    }
    
    render() {
        console.log("render")
        return (
            <div>
                <LifeCycleB />
                life cycle
            </div>
        )
    }
}


//Notes
//Mouting methods 
//Order of execution is ---constructor--->static getDerivedFromPropsMethod---->render--->componentDidoMount
//Constructor--
// 1. Its a special function and gets called whenever a new component is created
// 2. It is use to initialize a state and also to bind event handlers
// 3. Do not call any ajax calls or https request

// static getDerivedFromProps(props,state)
// 1. When the state of the component depends on the changes in props over time we can use this method
// 2. Since the method is static we dont have the access to this keyword
// 3. Simply returns the object represents the new state
// 4. Rarely used method
// 5. use for setting state
// 6. Do not cause any side effects or ajax calls ex. http


// render()
// 1. This is the only require method in the class component
// 2. Read props and state and outputs the JSX
// 3. Do not change the state or interact with the DOM or make any ajax calls
// 4. Children components lifecycle method are also executed

// ComponentDidMount
// 1. Invioked immediately after a component and all its children components have been rendered to the DOM
// 2. Perfect place for calling side effects and load the data --network requests etc
