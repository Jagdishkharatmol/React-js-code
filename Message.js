import React, { Component } from  'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you for having me"
        })
    }

    render(){
        return (<div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>subscribe</button>

        </div>)
    }

}

export default Message