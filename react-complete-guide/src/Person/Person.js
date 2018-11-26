import React from 'react';

const person =(props)=>{
    // return <p>I'm a person and i'm {Math.floor(Math.random() * 100)} years old</p>
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and i'm {props.age} years old</p>
            <p> {props.children}</p>
        </div>
    )
};

export default person;