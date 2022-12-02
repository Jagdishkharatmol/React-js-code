import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("*******************pure component********************")
    return (
      <div>
       Pure componenet {this.props.name}
      </div>
    )
  }
}

export default PureComp
