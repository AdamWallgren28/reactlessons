import React, { useState, useEffect, useReducer } from 'react';
import { useCounter } from '../hooks/useCounter';
import { useForm } from '../hooks/useForm';

// Uppgift 7.1
export function CustomCounter () {
    let [count, increment, decrement, reset] = useCounter();

    return (
       
        <div className="bg-blue-300 w-1/2 mx-auto p-4 my-4 rounded-lg">
            <p>Uppgift 7.1</p>
            <p>Current count:</p><p>{count}</p>
            <button onClick={increment} className={`text-white font-bold py-2 px-4 rounded bg-blue-500`}>Plus</button>
            <button onClick={decrement} className={`text-white font-bold py-2 px-4 rounded bg-blue-500`}>Minus</button>
            <button onClick={reset} className={`text-white font-bold py-2 px-4 rounded bg-blue-500`}>Reset</button>

        </div>
    );
}

// Uppgift 7.1
export function MyForm () {
    let { values, handleChange, handleSubmit } = useForm({ name: '', email: '' });

    return (
       
        <div className="bg-blue-300 w-1/2 mx-auto p-4 my-4 rounded-lg">
            <p>Uppgift 7.2</p>    
            <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                />
            </label>
            <br />
            <button type='submit' className={`text-white font-bold py-2 px-4 rounded bg-blue-500`}>Submit</button>
            </form>
    </div>
  );
}
