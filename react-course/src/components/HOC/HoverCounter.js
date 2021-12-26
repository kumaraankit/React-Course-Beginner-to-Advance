import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // clickHandler=()=>{
    // this.setState((prevState)=>{
    //   return  {count:prevState.count+1}
    // })
    // }
    render() {
        const {count,clickHandler}=this.props
        return (
            <div>
                <h1 onMouseOver={clickHandler}>{this.props.name}Hover {count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter)

// When we pass props name="Ankit" in the component , basically it binds with the HOC component
// and not with the HoverCounter component, thats why when we try to access it it will not show anything
