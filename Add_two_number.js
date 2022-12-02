import React,{Component} from 'react'

class Add_two_number extends Component {
    constructor(props){
        super(props)
        this.state = {
            num1:0,
            num2:0,
            result:0
         }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

       
    


    sum_all=()=>{
        var result1 = parseInt(this.state.num1)+parseInt(this.state.num2)
        this.setState({
            result:result1,
        })
    }

    minus_all=()=>{
            var result1 = parseInt(this.state.num1)-parseInt(this.state.num2)
            this.setState({
                result:result1,
            })

    }

    divide_all=()=>{
        var result1 = parseInt(this.state.num1)/parseInt(this.state.num2)
        this.setState({
            result:result1,
        })
    }

    multiply_all=()=>{
            var result1 = parseInt(this.state.num1)*parseInt(this.state.num2)
            this.setState({
                result:result1,
            })
        }

    render() {
        const {num1, num2 , result } = this.state
            return (
                
                <div>
            <div>
            Number 1:<input type='text' name='num1' value={num1} onChange={this.changeHandler}/>
            </div>
            <div>
            Number 2:<input type='text' name='num2' value={num2} onChange={this.changeHandler} />
            </div>
            <div>
            <span >Result: {result}</span>
            </div>
            <div>
            <input type='button' value='add' onClick={this.sum_all}/>
            <input type='button' value='mul' onClick={this.multiply_all}/>
            <input type='button' value='div' onClick={this.divide_all}/>
            <input type='button' value='min' onClick={this.minus_all}/>
            </div>
            </div>
            
            
            )

    }

}


export default Add_two_number