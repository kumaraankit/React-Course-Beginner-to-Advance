import React, { PureComponent } from 'react'

export class PureComponentClass extends PureComponent {
    render() {
        console.log("------------Pure component class------")
        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

// Pure component implements the shouldcomponentupdate with a shallow props and state comparison
// shallow comparison of preveious state, props with the current state, props and
//only if there is any difference it will re-render otherwise not
// It only renders if it sees a change in props and state resulting in performace boost
// Never mutate the state, always return a new object that reflects a new state
//It only applies to class based component 
