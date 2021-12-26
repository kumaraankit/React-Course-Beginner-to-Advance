import React from 'react'
import PersonList from './PersonList'

export const ListRendering=()=> {
    const persons=[
    {name:"Ankit",age:24},
    {name:"Ashutosh",age:24},
    {name:"Anubhab",age:24},
    {name:"Arnab",age:24}]
    return (
        <div>
            {persons.map((person)=> {
                return <PersonList key={person.id} person={person}/>
            })}
        </div>
    )
}

//Key prop is impportant while accessing or rendering list
//Key prop cannot be passed to child component like this instead we need to use 
//different name, otherwise it will throw undefined
//Key prop is useful in ientifying which list in the item is modified and changes the rendering of the UI

//Key gives the element stability
//keys help react help identify the items add, removed or changed and 
//helps in the efficient update of the user interfaces.
//It provied key to each of the list element and try to map to the corresponding list element 

//Key- Anti-PAttern
//When to use index as a key
//The items in your do not have a unique ID
//The list is a static and do not change(add,remove) and list never reordered or filtered
