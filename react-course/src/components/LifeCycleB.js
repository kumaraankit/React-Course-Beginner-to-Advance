import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
        console.log("constructor child")
    }
    static getDerivedStateFromProps(props,state){
        console.log("static method from child")
        return null;
    }
    componentDidMount(){
        console.log("Componentdidmount from child")
    }
    render() {
        console.log("render from child")
        return (
            <div>
                Child component from lifecycle method
            </div>
        )
    }
}
