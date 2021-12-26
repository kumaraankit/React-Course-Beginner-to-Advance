import React, { Component } from 'react'

export class TernaryOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        return this.state.isLoggedIn?(<div>Hello</div>):(<div>Yes</div>)      
       
    }
}

