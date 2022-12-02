import React, { Component } from "react";
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {

  render() {
    const {count,incrementCount} =this.props
    return <h1 onMouseOver={incrementCount}> Hover {count} times</h1>;
  }
}

export default UpdatedComponent(HoverCounter,10)
