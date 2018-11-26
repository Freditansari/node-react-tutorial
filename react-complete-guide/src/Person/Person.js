import React from 'react';

const person =(props)=>{
    // return <p>I'm a person and i'm {Math.floor(Math.random() * 100)} years old</p>
    return (
        <div>
            {/* props.click is how you call method from another components.
                    props.click is defined in the second Person tag in App.js

                    props.name and props.age is being called from app.js Person tag
            */}
            <p onClick={props.click}>I'm {props.name} and i'm {props.age} years old</p>
            <p> {props.children}</p>
        </div>
    )
};

export default person;