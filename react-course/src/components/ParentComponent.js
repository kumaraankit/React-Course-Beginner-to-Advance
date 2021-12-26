import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import { PureComponentClass } from './PureComponentClass'
import { RegularComponent } from './RegularComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Ankit"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Ankit"
            })
        },2000)
    }
    
    render() {
        console.log("-----------Parent Component--------")
        return (
            <div>
                Parent component
                <MemoComponent name={this.props.name}/>
                {/* <RegularComponent name={this.props.name}/>
                <PureComponentClass name={this.props.name}/> */}
            </div>
        )
    }
}


//If parent is pure component make sure all the child component are also pure
// to have the expected behaviour from the code
