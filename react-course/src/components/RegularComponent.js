import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log("--------Regular component------")
        return (
            <div>
                Regular component {this.props.name}
            </div>
        )
    }
}


//A regular component does not implement shouldcomponent update and return true by default

