import React, { Component } from 'react'
import CompA from './CompA'
import { UserConsumer } from './userContext'

class CompoB extends Component {
    render() {
        return (
           <UserConsumer>
               {
                   (username)=>{
                       return <div>Hello {username}</div>
                   }
               }
           </UserConsumer>
        )
    }
}

export default CompoB
