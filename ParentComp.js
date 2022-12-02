import React, { Component,PureComponent} from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';
import MemoComp from './MemoComp';
 class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'jk'
      }
    }
    
 componentDidMount(){
    setInterval(() => {
        this.setState({
            name:'jk'
        })
    }, 2000);
 }
     
  render() {
    console.log("*******************parent component********************")
    return ( 
      
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name}  /> */}
      </div>
    )
  }
}

export default ParentComp
