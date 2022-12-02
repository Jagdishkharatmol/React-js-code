import React, { Component } from 'react'
import Input from './Input'

///29 tutorial  error in code (forwarding the refs)
export class FocusInput extends Component {
  constructor(props) {
    super(props)
  
    this.componentRef=React.createRef()
    
  }
  
  // focus input method is defined inInput js file
    clickHandler=()=>{
    this.componentRef.current.focusInput()
  }
 
 
 
    render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
