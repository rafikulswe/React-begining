import React, {Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props)

        this.state ={
            countValue: 10
        }
    }
    increase = () => {
        this.setState({
            countValue: this.state.countValue + 1
        })

        if (this.state.countValue >= 15) {
            this.setState({
                color: 'green'
            })
        } else {
            this.setState({
                color: 'black'
            })
        }
    }
    decrease = () => {
        this.setState({
            countValue: this.state.countValue - 1
        })     

        if (this.state.countValue <= 0) {
            this.setState({
                color: 'red'
            })
        } else {
            this.setState({
                color: 'black'
            })
        }   
    }
    render(){
        return(
            <div>
                <h1 style={{color: this.state.color}}>
                    <button onClick={this.decrease}><span>--</span></button>
                    <span>{this.state.countValue}</span>
                    <button onClick={this.increase}><span>++</span></button>
                </h1>
            </div>
        )
    }
}
export default Counter