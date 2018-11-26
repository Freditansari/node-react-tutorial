import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

state={
  persons:[
    {name : 'Jimbo', age : 50},
    {name : 'Jono', age : 45},
    {name : 'lindesy', age : 50}
  ]
}

swicthNameHandler= (newName)=>{
  console.log('switchname handler called');
  // don't do this this.state.persons[0].name[0].name ='jimminy cricket';
  this.setState({
    persons:[
      {name : newName, age : 100},
      {name : 'Jono', age : 45},
      {name : 'lindsay', age : 30}
    ]
  });
}

  render() {
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'hello there! General Kenobi!'));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <button onClick={this.swicthNameHandler()}></button>  
        this will be run directly*/}
          {/* you can do this: 
          <button onClick={this.swicthNameHandler.bind(this, 'johannesburgess')}>click me</button> */}
           <button onClick={() => this.swicthNameHandler('you can also do this!!')}>click me</button>
          <Person 
          name = {this.state.persons[0].name} 
          age ={this.state.persons[0].age} />
          
          <Person 
          name = {this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          click = {this.swicthNameHandler.bind(this, 'bomburgess')} > Hobby : ngetrek 
          </Person>
          
          <Person 
          name = {this.state.persons[2].name} 
          age ={this.state.persons[2].age} />
        </header>
      
      </div>

    );
  }
}

export default App;
