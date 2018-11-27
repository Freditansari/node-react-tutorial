import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

state={
  persons:[
    {id: '123', name : 'Jimbo', age : 50},
    {id: '321', name : 'Jono', age : 45},
    {id: '456', name : 'lindesy', age : 50}
  ],
  showPersons : false
}




swicthNameHandler= (newName)=>{
  console.log('switchname handler called');
  // don't do this this.state.persons[0].name[0].name ='jimminy cricket';
  this.setState({
    persons:[
      {name : newName, age : 100},
      {name : 'Jono', age : 45},
      {name : 'lindsay', age : 30}
    ],
    showPersons:false
  });
}

deletePersonHandler =(personIndex)=>{
  //not being used anymore. we have to copy the state then cut the index
  // const persons = this.state.persons;
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}

//this one is for two way binding tutorial.
//event.target value is to get the change from the person.js
nameChangedHandler = (event, id) =>{
  console.log('namechanged handler called');

  const personIndex = this.state.persons.findIndex(p =>{
    return p.id=== id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };
  //we can also to this as an alternative:
  //const person = Object.assign({}, this.state.persons[personIndex]);

  person.name = event.target.value;
  const persons = [ ...this.state.persons];
  persons[personIndex]= person;

  this.setState({persons:persons});
}

togglePersonsHandler=()=>{

  console.log('toggleperson handler called');
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}

  render() {

    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8 px',
      cursor : 'pointer'
    
    };

    let persons = null;

    if (this.state.showPersons){
          persons=(
            <div>
              {this.state.persons.map((person, index)=>{
                // return <Person click={this.deletePersonHandler(index)} name={person.name} age = {person.age} />
                return <Person 
                click={()=>this.deletePersonHandler(index)} 
                name={person.name} 
                age = {person.age} 
                key={person.id}
                changed={(event)=>this.nameChangedHandler(event, person.id)} />
              })}
                {/* <Person 
                name = {this.state.persons[0].name} 
                age ={this.state.persons[0].age} />
                
                <Person 
                name = {this.state.persons[1].name} 
                age ={this.state.persons[1].age}
                click = {this.swicthNameHandler.bind(this, 'bomburgess')} 
                changed={this.nameChangedHandler}> Hobby : ngetrek 
                </Person>
                
                <Person 
                name = {this.state.persons[2].name} 
                age ={this.state.persons[2].age} /> */}
            </div>
          );
    }


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
          this is how you pass value into other method in project
          <button onClick={this.swicthNameHandler.bind(this, 'johannesburgess')}>click me</button> */}
           
           {/* using the inline style defined above
          <button style={style} onClick={() => this.swicthNameHandler('you can also do this!!')}>click me</button> */}
          <button style={style} onClick={this.togglePersonsHandler}>click me</button>
          {persons}
       
          
        </header>
      
      </div>

    );
  }
}

export default App;
