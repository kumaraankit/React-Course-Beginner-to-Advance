import React from 'react'

//If export is not default then we need to import the component with the
// same name as mentioned here in curly braces

//Functional component receives props and outputs( jsx)
// not use of this keyword makes functional easy
//stateless/dumb/presentational
//Solution without using state

export const Functional=()=> {
    return (
        <div>
           <h1>Functional component</h1> 
        </div>
    )
}

//export default Functional
