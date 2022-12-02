import React, { Component } from 'react'


class EventBind extends Component {

    constructor (props){
        super(props)
        this.state={
            message:'Hello'
        }

        this.clickhandler=this.clickhandler.bind(this)
    }

    clickhandler(){
        this.setState({
            message:'Good bye'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* 2 methods  */}
        {/* <button onClick={this.clickhandler.bind(this)}> click </button> */}
        {/* <button onClick={()=> this.clickhandler()}> click </button> */}
        <button onClick={this.clickhandler}> click </button>
      </div>
    )
  }
}

export default EventBind
