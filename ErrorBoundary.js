import React, {Component} from 'react'

//tutorial for catching the error similar to try catch in python


class ErrorBoundary extends Component {
    
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    
    
    static getDerivedStateFromError(error){
        return {
            hasError: true 
        }
    }

// this output is already shown in the console so no need of this
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

  render() {
    if(this.state.hasError){
    return (
<h1>Something went wrong</h1>
    )
    
}
return this.props.children
  }
}

export default ErrorBoundary
