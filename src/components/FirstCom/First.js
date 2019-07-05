import React, {Component} from 'react'

class First extends Component{

    render(){
        return (
            <h1>Hello {this.props.name}, I know your email {this.props.email}. <br></br> I am your first component.</h1>
        ) 
    }
    
}

export default First