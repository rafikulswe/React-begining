import React, {Component} from 'react'

class First extends Component{

    render(){
        return (
            <div>
                <h1>Hello {this.props.name} ! <br></br></h1>
                <p>I know your email {this.props.email}.</p>
                <p>I am your first component.</p>
            </div>
        ) 
    }
    
}

export default First