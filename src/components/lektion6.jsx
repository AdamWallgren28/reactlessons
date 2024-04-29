import React, { useState, useEffect, useReducer } from 'react';
import { TextField, Button, Box } from '@mui/material';

// Uppgift 6.1
export function ToggleButton () {
    let [active, setActive] = useState(false);

   function handleClick () {
        setActive(!active);
        console.log(!active);
   }

    return (
        <div className="bg-blue-300 w-1/2 mx-auto p-4 my-4 rounded-lg" >
            <p><em>Uppgift 6.1</em></p>
            <button onClick = {handleClick} className={`text-white font-bold py-2 px-4 rounded ${active ? 'bg-gray-500' : 'bg-blue-500'}`}>
                Toggle
            </button>
        </div>
    );
}

//Uppgift 6.2
export function NavigationMenu () {
   
    return (
        <div className="bg-blue-300 w-1/2 mx-auto p-4 my-4 rounded-lg" >
            <p><em>Uppgift 6.2</em></p>
            <div>meny...</div>
        </div>
    );
}

// Uppgift 6.3
export function MUIForm () {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
   
    return (
        <div className="bg-blue-300 w-1/2 mx-auto p-4 my-4 rounded-lg" >
            <p><em>Uppgift 6.3</em></p>

            <form onSubmit={handleSubmit}>
                {/* <Box display="flex" flexDirection="column" alignItems="center">
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        required
                    />
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Submit
                    </Button>
                </Box> */}
            </form>
        </div>
    );
}