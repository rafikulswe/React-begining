import React, {Component} from 'react'

class EventHandler extends Component{
    clickHandler = (event) =>{
        console.log("You Click Me");
    }
    render(){
        return(
            <div className="container">
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" onClick={this.clickHandler}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default EventHandler