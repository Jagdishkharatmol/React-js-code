import React, { Component } from  'react'

class Welcome extends Component{
    render(){
        const {name,heroName}=this.props//destructuring
        // const {state1, state2}= this.state//desctructing state values
        return <h1>Welcome {name} a.k. a {heroName}</h1>
    }

}

export default Welcome