import React, { Component } from 'react'

 class HoverCounter extends Component {
    //  constructor(props) {
    //      super(props)
     
    //      this.state = {
    //           count:0
    //      }
    //  }
    //  clickHandler=()=>{
    //      this.setState((prevState)=>{
    //        return { count:prevState.count+1}
    //      })
    //  }
    render() {
        const {count, clickHandler}=this.props
        return (
            <div>
                <h2 onMouseOver={clickHandler}>Clicked {count} times</h2>
            </div>
        )
    }
}

export default HoverCounter


// Render props is a technique for sharing code 
//between react components using prop whose value is a function
