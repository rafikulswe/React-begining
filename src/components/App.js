import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import First from './FirstCom/First'
import Counter from './FirstCom/Counter'

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
    </div>
  );
 }
}

export default App;
