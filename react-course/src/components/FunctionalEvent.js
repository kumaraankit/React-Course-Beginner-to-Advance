import React from 'react'

export function FunctionalEvent() {
   const clickHandler=()=>{
       console.log("Click on button")
   }
    return (
        <div>
           <button onClick={clickHandler}>Click</button> 
        </div>
    )
}

//While passing the function in the event--onClick make sure we are passing only function
//not a function call
//so avioid paranthesis on onClick event
//clickHandler()-----InValid
