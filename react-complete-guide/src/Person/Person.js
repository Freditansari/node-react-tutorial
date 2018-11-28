import React from 'react';
//import css to component
import './Person.css'


const person =(props)=>{


    // return <p>I'm a person and i'm {Math.floor(Math.random() * 100)} years old</p>
    return (
        
        <div className='Person' >
            {/* props.click is how you call method from another components.
                    props.click is defined in the second Person tag in App.js

                    props.name and props.age is being called from app.js Person tag
            */}
            <p onClick={props.click}>I'm {props.name} and i'm {props.age} years old</p>
            <p> {props.children}</p>

            {/* two way bindings tutorial */}
            <input type="text" onChange ={props.changed} value={props.name}></input>
        </div>
     
    )
};

export default person;