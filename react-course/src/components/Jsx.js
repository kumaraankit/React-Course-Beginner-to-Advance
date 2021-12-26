//Code with JSX
import React from 'react'

// export const jsx=()=> {
//     return (
//         <div>
//          <h1>Hello JSX</h1>        
//         </div>
//     )
// }

//Code without JSX
//React.createElement accepts n number of paramters
//second parameter is the extra parameter , eg key, className
// and accept as a object with key and value pair
export const Jsx=()=>{
    return React.createElement('div',null,React.createElement('h1',{key:"hello",className:"hi"},"JSX behind the scene"))
}

//JSX is the javascript XML , syntax like javascript
//It has tag name,children name and also attribute name
//It Makes code cleaner and easier
//It tanspiles into pure javascript code 

//JSX has camelCase naming property
//onclick---onClick
//for---htmlFor
//class---className
