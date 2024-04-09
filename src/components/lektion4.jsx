import React, { Component, useState, useEffect, useReducer } from 'react';

// Uppgift 1
export function TraditionalGreeting(props){
    return (
            <p><em>Hej hej, {props.name}!!</em></p>
    );
}

export let ArrowGreeting = (props) =>
<p><em> Hej hej igen, {props.name}!!</em></p>;
        


// Uppgift 2
export function UserProfile4({name='anonym', age='okänd', location='gömd'}){
    return (
        <>
            <h2>Användare: {name}</h2>
            <p>Ålder: {age}</p>
            <p>Plats: {location}</p>
        </>
    );
}

// Uppgift 3
export function Card({children}){
    return (
        <div class="produkt">
            {children}
        </div>
    );
}

// Uppgift 4
export function Counter2() {
    let [count, setCount] = useState(0);

    function eatCookie () {
        if (count > 0) {
            setCount(count - 1);
        }
    }

  return (
    <div>
      <h2>Cookie maker</h2>
      <p>You have {count} cookies.</p>
      <button onClick={() => setCount(count + 1)}>Make a Cookie!</button>
      <button onClick={eatCookie}>Eat a Cookie!</button>
    </div>
  );
  }

  // Uppgift 5
export function TitleUpdater() {
    let [titleCount, setTitleCount] = useState(0);

    function updateTitleCount() {
        setTitleCount(titleCount +1);
    }

    useEffect(() => {
        if (titleCount > 0){
            document.title = `New Title nr ${titleCount}`;
        }
    });
    
    return (
        <button onClick={updateTitleCount}>Set new title!</button>
    )
}

// Uppgift 6
let ADD_ITEM = 'ADD_ITEM';
let REMOVE_ITEM = 'REMOVE_ITEM';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case REMOVE_ITEM:
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
};

export function ToDoList() {
    const [items, dispatch] = useReducer(reducer, []);

    function addItem(){
        const newItemContent = document.getElementById('newItem').value;
        if (newItemContent.trim() !== '') {
            dispatch({ type: ADD_ITEM, payload: newItemContent });
            document.getElementById('newItem').value = '';
        }
    }

    function removeItem(index) {
        dispatch({ type: REMOVE_ITEM, payload: index });
    }

    return (
        <>
            <h2>Att-göra lista</h2>
            <input type="text" id="newItem" />
            <button onClick={addItem}>Add item</button>
            <ul>
            {items.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removeItem(index)}>Remove item</button>
                    </li>
                ))}
            </ul>

            <h3>useReducer vs. useState</h3>
            <p>useReduce är onödigt komplicerad för en så enkel sak som en "att gör"-lista. Säkert bra till mer komplexa grejer.</p>
        </>
    )
}