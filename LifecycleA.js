import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
// Component mounting lifecycle methods
class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'jagdish'
      }
      console.log('LifeCycleA constructor')
    }
    
static getDerivedStateFromProps(props,state){
    console.log('LifecycleA getDerived')
    return null
}

shouldComponentUpdate(){
    console.log('LifeCycleA shouldComponent Update')
    return true
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
}


componentDidUpdate(){
    console.log('componentDidUpdate')
}

changeState=()=>{
    this.setState({
        name:'codeEvolutions'
    })
}


  render() {
    console.log('Lifecycle A render')
    return (
      <div>
       <div>Lifecycle A</div>
       <button onClick={this.changeState}>Change State</button>
       <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
