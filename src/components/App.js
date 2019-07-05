import React from 'react';
import logo from '../logo.svg';
import './App.css';
import First from './FirstCom/First'
import Counter from './FirstCom/Counter'

function App() {
  
  return (
    <div className="App">
        <First name='Rafikul Islam' email='rafikulswe@gmail.com'/>
        <Counter/>
    </div>
  );
}

export default App;
