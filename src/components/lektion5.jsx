import React, { Component, useState } from 'react';

export let DynamicTitleEditor = () => {
    let [title, setTitle] = useState('');

    let handleTitleChange = (event) => {
        let newTitle = event.target.value;
        setTitle(newTitle === '' ? "Set new title below" : newTitle);
    };

    return (
        <div>
            <h1>{title}</h1>
        <input 
            type="text" 
            onChange={handleTitleChange} 
            placeholder="Enter title" 
        />        
        </div>
    );
};

///////////////////////////////////////////////////////////////////////////////////////////////

export let InteractiveList = () => {
    let items = [
      { name: 'Forward ', description: 'One of three players whose main role is to take care of the offensive part of the game. The focus is to score goals. A forward is either "left wing", "right wing" or "center".' },
      { name: 'Defence ', description: 'One of two players whose main role is to defend. They are to keep players away from the net and help their goalie. (Either left- or right-D.' },
      { name: 'Goalie ', description: 'One player in special equipment whose main (and almost only) role is to keep the puck out of the net. The goalie stays on the ice the entire game unless the backup takes over.' }
    ];
  
    let [selectedItem, setSelectedItem] = useState([]);

    function handleItemClick(index) {
        if (selectedItem.includes(index)) {
            setSelectedItem(selectedItem.filter((itemIndex) => itemIndex !== index));
        } else {
            setSelectedItem([...selectedItem, index]);
        }
    }

      return (
        <>            
            <ul className="lek5b" >
                {items.map((item, index) => (
                    <li key={index}>                    
                        {item.name}
                        <button onClick={() => handleItemClick(index)}>Show description</button>                       
                        {selectedItem.includes(index) && <p>{item.description}</p>}
                    </li>
                ))}
            </ul>
           
        </>
      )
  };

  //////////////////////////////////////////////////////////////////////////////////////////

  export let MultiFieldForm = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            name: name,
            email: email,
            message: message
        };
        console.log('Form data:', formData);
    };

    return (
        <form className="myForm" onSubmit={handleSubmit}>
            <div className="inputDiv">
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange= {(e) => setName(e.target.value)}
            />
            </div>
            <div className="inputDiv">
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange= {(e) => setEmail (e.target.value)}
            />
            </div>
            <div className="inputDiv">
            <label>Message:</label>
            <textarea        
                name="message"
                value={message}
                onChange= {(e) => setMessage (e.target.value)}
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
  }


