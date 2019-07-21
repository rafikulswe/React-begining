import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import First from './FirstCom/First'
import Counter from './FirstCom/Counter'
import EventHandler from './FirstCom/EventHandler'
import Stateless from './FirstCom/Stateless'

const newElement = (
    <div className="row" style={{float:"left", padding: "10px 10px"}}>
      <div className="col-md-6">
        <div className="form-group">
            <label htmlFor="username">Name</label>
            <input type="text" id="username"/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email"/>
        </div>
      </div>
    </div>
)

function Welcome(props) {
    return <h1>Hello {props.name}</h1>
}
class App extends Component {
  state = {
    users: [
      {name: 'Rafikul Islam', email: 'rafikulswe@gmail.com'},
      {name: 'Rayhan Rafi', email: 'rayhan@gmail.com'}
    ]
  }
 render(){
  return (
    <div className="App">
        <Welcome name="Rafi"/>
        <div className="row">
            <div className="col-md-6">
                {newElement}
            </div>
        </div>
        {/* direct way without state */}
        <First name='Rezanul Hoque' email='reza@gmail.com'/>
        {/* way to using state */}
        {/* <First name={this.state.users[1].name} email={this.state.users[1].email}/>
        <First name={this.state.users[1].name} email={this.state.users[1].email}/> */}
        
        {/* Array maping */}
        {this.state.users.map((users, index) => {
          return <First 
                    key = {index}
                    name={users.name} 
                    email={users.email}
                  />
        }) }
        <Counter/>
        <EventHandler/>
        <Stateless name="stateless"/>
    </div>
  );
 }
}

export default App;
