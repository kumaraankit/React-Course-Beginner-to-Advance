import React, { Component } from 'react'
import CompoB from './CompoB'

class CompC extends Component {
    render() {
        return (
            <div>
               Comp C 
               <CompoB />
            </div>
        )
    }
}

export default CompC

// Context is very useful when we want to pass the value from one component to the other nested component
// We dont need to pass down the props from parent to child instead we can use context to do 
// it has two important things, provider and consumer
