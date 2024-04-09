import React, { Component } from 'react';

export function TraditionalGreeting(props){
    return (        
        <h2> Hej hej, {props.name}!!</h2> 
    );  
}

export let ArrowGreeting = (props) =>    
        <h2> Hej hej igen, {props.name}!!</h2>;


export function UserProfile4({name, age, location}){
    return (
        <>
            <hr/>
            <h1>Användare: {name}</h1>
            <p>Ålder: {age}</p>
            <p>Plats: {location}</p>
        </>
        
    );
}