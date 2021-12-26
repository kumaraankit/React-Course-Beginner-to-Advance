import React from 'react'

export const ReactFragements=()=> {
    return (
        <React.Fragment>
           <p>Hello Fragment</p>
           <h1>React fragement</h1>
        </React.Fragment>
    )
}

// only single element can be returned from react
// If we group the elements in div it will add extra div element in the DOM with the app.js div node
// React fragments lets group the children elements without adding any extra DOM to the node
// If we enclose everythign inside div tag then one extra tag with app div tag will be added into the DOM
// using <></> is also a syntax we can use but it will not sllow to pass any key whereas in
// <React.Fragement> we can easily pass the key while iterating through list


