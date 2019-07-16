import React, {Component} from 'react'

class EventHandler extends Component{
    state = {
        username: ''
    }
    clickHandler = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    render(){
        return(
            <div className="container">
                {this.state.username ? <p>Hi Mr. {this.state.username}</p> : ""}
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" onChange={this.clickHandler}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default EventHandler