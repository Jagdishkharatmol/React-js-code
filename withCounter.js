import React from 'react'
//tutorial om higher order component
const UpdatedComponent = (OriginalComponent,increamentNumber) => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
    
          incrementCount= () =>{
            this.setState(prevState =>{
              return {count:prevState.count+ increamentNumber}
            })
          }

        render(){
            return <OriginalComponent  
                count ={this.state.count}
                increamentCount={this.incrementCount}
               {...this.props}
            />
        }

    }
    return NewComponent 
}

export default UpdatedComponent