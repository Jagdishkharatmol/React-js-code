import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react',
      }
    }
    
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    hangleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

  render() {
    return (
      <div>
        <lable>Username</lable>
      <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
      <div>
        <label>Commments</label>
        <textarea value={this.state.comments} onChange={this.hangleCommentsChange}></textarea>
      </div>

      <label>Topic</label>
      <select value={this.state.topic} onChange={this.handleTopicChange}>
        <option value='react'>React</option>
        <option value='angular'>Angular</option>
        <option value='vue'>Vue</option>
      </select>
      
      </div>
    )
  }
}

export default Form
