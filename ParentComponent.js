import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
constructor(props){
    super(props)
    this.state={
        parentName:'Parent'
    }

    this.greetParent=this.greetParent.bind(this)
}


// As we are using this keyword inside a function we will get a error 
// as this is undefined so we have bind it in the constructor 
greetParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
}


  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
