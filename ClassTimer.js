import React, { Component } from 'react'

 class ClassTimer extends Component {
    interval
   constructor(props) {
     
     super(props)
   
     this.state = ({
        timer:0
     })
   }

   componentDidMount(){
    this.interval=setInterval(()=>{
        this.setState(prevState=>({timer: prevState+1}))

    },1000)
   }
   
   componentWillUnmount(){
    clearInterval(this.interval)
   }

  render() {
    return (
      <div>
        Class timer - {this.state.timer}
        <button onClick={() =>(this.interval)}>Clear Interval</button>
      </div>
    )
  }
}

export default ClassTimer
