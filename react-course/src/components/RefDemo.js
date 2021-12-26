import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
        this.cbRef=null //step 1 for callback ref
        this.setCbRef=(element)=>{  //step 2 to hav the method to initailze to the DOM element
            this.cbRef=element;
        }
    }

    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus();
        if(this.cbRef){        // step 3 to check null and step 4 is to attach to the input element
            this.cbRef.focus();
        }
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/> 
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}


// ref is used to access the DOM node or react elements created in the render method
// used in the case where we need to focus input, text selection, for imperative animations
// do not over use refs , try to own state if its possible to do so
//Refs are commonly assigned to an instance property when a component is 
//constructed so they can be referenced throughout the component.
//re is accessible at current attribute
//You may not use the ref attribute on function components because they don’t have instances.
