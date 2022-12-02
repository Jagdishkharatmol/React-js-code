// Component mounting lifecycle methods
//Component update lifecycle
import React, { Component } from 'react'
// Component mounting lifecycle methods
class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'jagdish'
      }
      console.log('LifeCycleB constructor')
    }
    
static getDerivedStateFromProps(props,state){
    console.log('LifecycleB getDerived')
    return null
}

shouldComponentUpdate(){
    console.log('LifeCycleB shouldComponent Update')
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('componentDidUpdate')
}


  render() {
    console.log('Lifecycle B render')
    return (
      <div>
       <div>Lifecycle B</div>
      </div>
    )
  }
}

export default LifecycleB
