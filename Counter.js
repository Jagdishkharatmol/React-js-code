import React, { Component } from 'react'

class Counter extends Component {

    constructor (props){
        super(props)
        this.state={
            count:0
        }
    }

increment(){
//   this.setState({
//     count:this.state.count+1
// },()=> {console.log('Callback value',this.state.count)})


this.setState(prevState=>{
count:prevState.count+1
})
console.log(this.state.count)
}

incrementFive(){
  //react this in single group and ouput is 1 for its better performance
  this.increment()
  this.increment()
  this.increment()
  this.increment()
  this.increment()
}




  render() {
    return (
      <div>
        count-{this.state.count}
      <button onClick={()=> this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
