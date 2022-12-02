import React, { Component } from 'react'
//This code used for  conditional rendering
class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    // First method
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome Jagdish</div>
    //     )
    // } else{
    //     return(
    //     <div>Welcome Guest</div> 
    //     )


    //method two: Element varible approach

    // let message
    // if(this.state.isloggedIn){
    //     message=<div>Welcome Jagdish</div>
    // } else {
    //     message=<div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //method three:ternary condition approch
    // return (
    //     this.state.isLoggedIn?
    //     <div>Welcome Jagdish</div> :
    //     <div>Welcome Guest</div>
    // )

    //method four : short circuit approch

    return this.state.isLoggedIn && <div>Welcome Jagdish</div>
    // return (
    //   <div>
    //    <div> Welcome Jagdish</div>
    //    <div>Welcome Guest</div> 
       
    //     </div>
    // )
  }
}

export default UserGreeting
