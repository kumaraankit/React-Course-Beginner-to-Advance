import React from 'react'

export const PersonList=({person})=> {
    return (
        <div>
             <h1>{person.name} and i'm {person.age} years old</h1>
        </div>
    )
}

export default PersonList
